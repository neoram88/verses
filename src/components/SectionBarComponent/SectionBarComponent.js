import React from 'react';
import './SectionBarComponent.scss';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';


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
            <NavLink to='/authors' activeClassName="selectedLink">
                <Button size="lg" variant="NavLink" >Authors</Button>
            </NavLink>
            <NavLink to='/poems' activeClassName="selectedLink">
                <Button size="lg" variant="NavLink">Poems</Button>
            </NavLink>
            <NavLink to='/favs' activeClassName="selectedLink">    
                <Button size="lg" variant="NavLink">Favourites</Button>
            </NavLink>
            </ButtonGroup>
        )
    }

}