import AppHeader from "../app-header"
import SearchPanel from "../search-panel"
import PostStatusFilter from "../post-status-filter"
import PostList from "../post-list"
import PostAddForm from "../post-add-form"

import './app.scss'

const App = () => {

    let data = [
        {
            label: "Going to learn React",
            important: false
        },
        {
            label: "Going to sleep",
            important: false
        },
        {
            label: "Going to eat meat..",
            important: false
        },
    ]

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}

export default App
