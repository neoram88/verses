import React from 'react';
import './SectionBarComponent.scss';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


export default class SectionBarComponent extends React.Component{

    constructor(props, context) {
        super(props, context);
    
        this.loadAuthors = this.loadAuthors.bind(this);
        this.loadPoems = this.loadPoems.bind(this);
        this.loadFavs = this.loadFavs.bind(this);
    
        this.state = {
          authorsSelected: true,
          poemsSelected: false,
          favsSelected: false
        };
        
    }

    loadAuthors(){
        this.setState({authorsSelected: true,
            poemsSelected: false,
            favsSelected: false});
    }

    loadPoems(){
        this.setState({authorsSelected: false,
            poemsSelected: true,
            favsSelected: false});
    }

    loadFavs(){
        this.setState({authorsSelected: false,
            poemsSelected: false,
            favsSelected: true});
    }

    render(){
        return(
            <ButtonGroup className="sectionBar">
                <Button size="xl" variant="link" active={this.state.authorsSelected} onClick={this.loadAuthors}>Authors</Button>
                <Button size="xl" variant="link" active={this.state.poemsSelected} onClick={this.loadPoems}>Poems</Button>
                <Button size="xl" variant="link" active={this.state.favsSelected} onClick={this.loadFavs}>Favourites</Button>
            </ButtonGroup>
        )
    }

}