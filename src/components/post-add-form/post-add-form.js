import { Component } from 'react'
import './post-add-form.scss'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <form className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder="Напишите в это поле!"
                    className="form-control new-post-label"
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    onClick={() => onAdd('Hello')}>
                    Добавить</button>
            </form>
        )
    }
}

