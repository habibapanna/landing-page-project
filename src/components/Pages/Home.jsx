import React from 'react';
import Hero from '../Hero';
import Problem from '../Problem';
import Process from '../Process';
import Work from '../Work';
import TrustedBy from '../TrustedBy';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'> 
           <Hero />
<Problem />
<Process />
<Work />
<TrustedBy />
        </div>
    );
};

export default Home;