import React from 'react';
import List from './List';
import Form from './Form'

export default function Header(props){
    return(
        <main>
            <div>
                Your content will go here <span>Hello</span>
                <List />
            </div>
            <div>
                <h3>Add a New Article</h3>
                <Form />
            </div>
        </main>
    )
}
