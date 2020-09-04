import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../redux/actions/add';


const Add = (props) => {

    const [todo, setTodo] = useState('')

    const change = (e) => {
        setTodo(e.target.value)

    }

    const Add = (e) => {

        e.preventDefault();
        const data = {
            title: todo,

        }

        props.add(data);
        setTodo('')



    }


    return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
            <h4>ADD a new Todo</h4>
            <form onSubmit={Add} >
                <input type="text" onChange={change} name="title" value={todo.title} />&nbsp;
                <button type="submit" className="btn btn-primary"  >Add</button>

            </form>
        </div>
    );
}
const mapStateToProps = (state) => ({

    add: state.Add.added_data,
})

export default connect(mapStateToProps, { add })(Add);
