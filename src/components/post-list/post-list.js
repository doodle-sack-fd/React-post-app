import PostListItem from "../post-list-item";
import { ListGroup } from 'reactstrap'
import "./post-list.scss"
/* or use spread {...itemProps}   9line */
const PostList = ({ posts, onDelete  }) => {

    const elements = posts.map((item, idx) => {
        return (
            <li className="list-group-item" key={idx}>
                <PostListItem
                    label={item.label}
                    important={item.important}
                    onDelete={() => onDelete(idx)}
                />
            </li>
        )
    });

    return (
        <ListGroup className="app-list list-group">
            {elements}
        </ListGroup>
    )
}

export default PostList

