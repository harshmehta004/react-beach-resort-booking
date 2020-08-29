import React,{Component} from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
// import { icons } from 'react-icons';

export default class Services extends Component{
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"free cocktail",
                info:"free cocktail chahiye to is service ke bare mein jaane"
            },
            {
                icon:<FaHiking />,
                title:"free Hiking",
                info:"Hiking ka maza uthaein"
            },
            {
                icon:<FaShuttleVan />,
                title:"free Van",
                info:"free Van ka Laabh uthaein"
            },
            {
                icon:<FaBeer />,
                title:"free Beer",
                info:"free me beer peeni h to idhar aayein"
            }
        ]
    }
    
    render(){
         
        return(
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>                                       
                    })}
                </div>
            </section >
        )
    }
}