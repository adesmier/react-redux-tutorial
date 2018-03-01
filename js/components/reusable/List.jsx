import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log(state);
    return {
        articles: state.articles
    };
};

const ConnectedList = (props) => (
    <ul>
        {
            props.articles.map(item => (
                <li key={item.id}>
                    {item.title}
                </li>
            ))
        }
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;