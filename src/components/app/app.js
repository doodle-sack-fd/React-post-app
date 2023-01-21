import { Component } from "react"
import AppHeader from "../app-header"
import SearchPanel from "../search-panel"
import PostStatusFilter from "../post-status-filter"
import PostList from "../post-list"
import PostAddForm from "../post-add-form"

import './app.scss'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    label: "Going to learn React",
                    important: false,
                    like: false,
                    id: 1
                },
                {
                    label: "Going to sleep",
                    important: false,
                    like: false,
                    id: 2
                },
                {
                    label: "Going to eat meat..",
                    important: false,
                    like: false,
                    id: 3
                },
                {
                    label: "Going to cook",
                    important: false,
                    like: false,
                    id: 4
                },
            ],
            term: ''
        }

        this.deletePost = this.deletePost.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onUpdateInputSearch = this.onUpdateInputSearch.bind(this)

        this.maxId = 5
    }

    deletePost(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)
            // Массив до клика по корзине
            // Массив после клика по коризе с учетом нажатого элемента
            // Объединяем в новый массив
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]
            const newItem = { ...old, important: !old.important }

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]
            const newItem = { ...old, like: !old.like }

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateInputSearch(term) {
        this.setState({ term: term })
    }

    render() {
        const { data, term } = this.state

        const liked = data.filter(elem => elem.like).length
        const allPosts = data.length
        const visiblePosts = this.searchPost(data, term)

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateInputSearch={this.onUpdateInputSearch}
                    />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deletePost}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}
