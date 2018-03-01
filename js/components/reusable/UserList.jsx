import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/actions/index';


const mapStateToProps = state => ({
    users: state.users.users,
    loading: state.users.usersLoading
});

const mapDispatchToProps = dispatch => ({
    getUsers: url => dispatch(getUsers(url))
});


class ConnectedUsers extends React.Component {

    componentDidMount() {
        this.props.getUsers('https://jsonplaceholder.typicode.com/users');
    }

    render() {
        if(this.props.loading){
            return <p>Users Loading...</p>
        } else {
            return (
                <ul>
                    {
                        this.props.users.map(user => (
                            <li key={user.id}>
                                <span>{user.name} - <em>{user.username}</em></span>
                            </li>
                        ))
                    }
                </ul>
            )
        }
    }

}


const UserList = connect(mapStateToProps, mapDispatchToProps)(ConnectedUsers);

export default UserList;