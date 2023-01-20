import './post-add-form.scss'

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Напишите в это поле!"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Добавить</button>
        </form>
    )
}

export default PostAddForm