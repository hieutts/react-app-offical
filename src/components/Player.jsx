import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-social/bootstrap-social.css';

export const Players = [
    { id: 1, name: 'Cristiano Ronaldo', club: 'Manchester United', img: 'assets/images/cr.jpg' },
    { id: 2, name: 'Kante', club: 'Chelsea', img: 'assets/images/kante.jpg' },
    { id: 3, name: 'Messi', club: 'PSG', img: 'assets/images/messi.jpg' },
    { id: 4, name: 'Neymar', club: 'PSG', img: 'assets/images/neymar.jpg' },
    { id: 5, name: 'Kane', club: 'Tottenham', img: 'assets/images/kane.jpg' },
    { id: 6, name: 'Haaland', club: 'Manchester City', img: 'assets/images/haaland.jpg' }
];
export default class Player extends Component {
    render() {
        return (
            <div className='container player' style={{marginTop: '58px'}}>
                <div className='row row-content grid row-gap-2 '>
                    {Players.map((player) => (
                        <div className='col col-sm-4  ' key={player.id}>
                            <div className='card rounded'>
                                <img src={player.img} className='rounded'/>
                                <h3>{player.name}</h3>
                                <p className='title '>{player.club}</p>
                                <p><button className='rounded bg-dark text-white'>Detail</button></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}