import React from 'react';

import Header from 'components/reusable/Header';
import Main from 'components/reusable/Main';
import Footer from 'components/reusable/Footer';

export default function App(props){
    return(
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    )
}
