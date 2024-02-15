import React, { useState } from 'react';
import { ActivityCard } from './Card';
import CardList from '../Data/CardData';
import '../App.css';

const ActCards = () => {


    const [ListOfCards, setListOfCards] = useState(CardList);

    // useEffect(
    //     () => {
    //         fetchData();
    //     }, []);

    // const fetchData = async () => {
    //     const data = await fetch("https://catfact.ninja/fact");
    
    // const json = await data.json();
    // console.log(json);
    // setListOfCards = (json.fact);
    // console.log(ListOfCards);
    // };

    if (ListOfCards === 0) {
        return <h1> Loading....</h1>
    }

    return (

        <>
            <button className='bg-bluebtn ms-5 filter'
                onClick={() => {
                    const filteredList = ListOfCards.filter(
                        (card) => card.session > 5
                    );

                    setListOfCards(filteredList);
                }
                }
            >Filter</button>
            <div className="container-fluid act-cards">
                <div className="row">
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {
                        ListOfCards.map((val, ind) => {
                            return <ActivityCard key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                loc={val.loc}
                                session={val.session}
                                availability={val.avalability}
                                course={val.course}

                            ></ActivityCard>
                        })
                    }
                </div>
            </div>

        </>

    );
};

export default ActCards;
