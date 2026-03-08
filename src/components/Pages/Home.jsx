import React from 'react';
import Hero from '../Hero';
import Problem from '../Problem';
import Process from '../Process';
import Work from '../Work';
import TrustedBy from '../TrustedBy';
import Pricing from '../Pricing';
import Blogs from '../Blogs';

const Home = () => {
    return (
        <div> 
           <Hero />
           <Work />
<Problem />
<Process />
<TrustedBy />
<Blogs></Blogs>

        </div>
    );
};

export default Home;