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
                    idx: 0
                },
                {
                    label: "Going to sleep",
                    important: false,
                    idx: 1
                },
                {
                    label: "Going to eat meat..",
                    important: false,
                    idx: 2
                },
                {
                    label: "Going to cook",
                    important: false,
                    idx: 3
                },
            ]
        }

        this.deletePost = this.deletePost.bind(this)
        this.addItem = this.addItem.bind(this)

        this.maxId = 4
    }

    deletePost(idx) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.idx === idx)
            // Массив до клика по корзине
            // Массив после клика по коризе с учетом нажатого элемента
            // Объединяем в новый массив
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }
    onAdd
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            idx: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deletePost} />
                <PostAddForm 
                    onAdd={this.addItem}
                />
            </div >
        )
    }
}
