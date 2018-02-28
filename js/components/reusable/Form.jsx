import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../redux/actions/index';

const mapDispatchToProps = dispatch => {
    return{
        addArticle: article => dispatch(addArticle(article))
    }
}

class ConnectedForm extends React.Component {
    
    state = {
        title: ''
    };

    changeHandler = (evt) => {
        console.log('Title is: ', evt.target.value);
        this.setState({
            [evt.target.id]: evt.target.value
        });
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        const { title } = this.state;
        const id = Math.floor(Math.random() * Math.floor(100));

        this.props.addArticle({ id, title });
        this.setState({ title: '' });
    }

    render() {
        const { title } = this.state;

        return (
            <form onSubmit={(evt) => this.submitHandler(evt)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text"
                           id='title'
                           value={title}
                           onChange={(evt) => this.changeHandler(evt)} 
                    />
                </div>
                <button>Save</button>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
