import React from 'react';
// import { useContext } from 'react';
import './MiddleNav.css';

const MiddleNav = ({ currentDish, setCurrentDish,searchField }) => {


    const handleNav = (e) => {
        if (e.target.name === 'breakfast') {

            setCurrentDish('breakfast')

        }
        if (e.target.name === 'lunch') {

            setCurrentDish('lunch')
        }
        if (e.target.name === 'dinner') {
            setCurrentDish('dinner')
        }

    }
    return (
        <div className="header">
            <div >
                <button name='breakfast' onClick={handleNav}>Breakfast

                    {currentDish === 'breakfast' && searchField===''  && <hr />}</button>
                <button onClick={handleNav} name='lunch' >Lunch
                    {currentDish === 'lunch' && searchField===''   && <hr />}
                </button>
                <button onClick={handleNav} name='dinner' >Dinner

                    {currentDish === 'dinner' && searchField==='' && <hr />}
                </button>
            </div>
        </div>
    );
};

export default MiddleNav;