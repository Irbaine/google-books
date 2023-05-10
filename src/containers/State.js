import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'; 
import './State.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'; 
import {Tooltip} from '../components/Tooltip';

class State extends React.Component{
    constructor(){
        super()
        this.state = {
            data: [],
            inputfield: ''
        }
    }

    async getCategories() {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=the&maxResults=40`);
        const data = await response.json();
        console.log(data.items);
        this.setState({ data : data.items });
    }

   componentDidMount(){

    const v1Books = 'https://www.googleapis.com/books/v1/volumes?q=the&maxResults=40';

    this.getCategories();

    fetch(v1Books)
        .then(response => response.json())
        //.then(response => console.log(JSON.stringify(response)))
        .then(books => this.setState({data: books.items}));
    }


    onSearchChange = (event) => { // add = () => to prevent event this to scope on other places // without that it will scope input in this case
            this.setState({inputfield: event.target.value})
    }

    render(){
        const { data, inputfield } = this.state;
        const filteredRobots = data.filter( singledata =>{
            return singledata.volumeInfo.title.toLowerCase().includes(inputfield.toLowerCase());
            // the two lines above was in onSearchChange
            //and <CardList data={this.state.data} /> to filteredRobots
        })

        return (!data.length) ?
            <h1> No Books </h1> :
            (
            <div className='tc mt0 pt0'>
                <Tooltip text="Google Books is a service from Google Inc. 
                That searches the full text of books and magazines that Google has scanned.">
                <h1 className='f1 mb4'>Google Books</h1>
                </Tooltip>
                    <SearchBox searchChange={this.onSearchChange} /> 
                    <Scroll>
                        <ErrorBoundry>
                            <CardList data={filteredRobots} />
                        </ErrorBoundry> 
                    </Scroll>
            </div>
        );
    }
}


//watch the end of the vid 14 it explains everything

export default State;