import React from 'react';
import Navbar from './Navbar';
import background from '../images/bg.jpg';
import hero from '../images/hero.png';

const Header = () => {
    var style = {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <section style={style}>
            <Navbar />
            <div className='content'>
                <div className='info'>
                    <h1>Our Tasty Foods</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab, reiciendis minus a recusandae molestiae esse?
                    </p>
                    <button>DISCOVER</button>
                </div>
                <div className='hero'>
                    <img src={hero} alt='hero' />
                </div>
            </div>
        </section>
    );
};

export default Header;
