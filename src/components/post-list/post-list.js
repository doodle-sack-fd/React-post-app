import PostListItem from "../post-list-item";
import "./post-list.css"
/* or use spread {...item}   9line */
const PostList = ({ posts }) => {

    const elements = posts.map((item, idx) => {
        return (
            <li className="list-group-item" key={idx}>
                <PostListItem
                    label={item.label}
                    important={item.important} />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList

