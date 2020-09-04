import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { del } from '../redux/actions/delete';
import { fetch } from '../redux/actions/todo';

const Todos = (props) => {

    useEffect(() => {
        props.fetch()
    }, [props.add, props.dele])
    const del = (e) => {


        props.del(e.target.id)

    }
    return (
        <div className="container" style={{ marginTop: 20 }}>
            <h2 style={{ textAlign: "center" }}>All todos</h2>
            <hr />
            {props.data.map(todo => {
                return (
                    <React.Fragment key={todo.id}>
                        <div className="d-flex felx-column justify-content-around">
                            <h2>{todo.title}</h2>
                            <button type="button" className="btn btn-danger" id={todo.id} onClick={del}>Delete</button>

                        </div>
                        <hr />
                    </React.Fragment>
                )
            })}

        </div>
    );
}
const mapStateToProps = (state) => ({
    data: state.Fetch.fetched_data,
    add: state.Add.added_data,
    dele: state.Delete.deleted_data
})
export default connect(mapStateToProps, { del, fetch })(Todos);
