import React from 'react';

export const getStaticProps = async () => {
    const res = await fetch('https://api.punkapi.com/v2/beers')
    const beers = await res.json()
    console.log('111')
    return {
        props: {
            beers
        }
    }
}

const Index = (props: any) => {
    console.log(props.beers)
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {props.beers.map((beer: any) => <span key={beer.id}>{beer.name}</span>)}
        </div>
    );
};
export default Index