import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AnimatedCursor from 'react-animated-cursor';

const Home = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={10}
                outerSize={20}
                color='201,243,29'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default Home;