import React from 'react';
import Star from 'react-icons/lib/fa/star';
import StarEmpty from 'react-icons/lib/fa/star-o';

const OtherSkills = ({ data }) => (
    <div>
        {
            data.map((item, index) => (
                <div key={ index } className="progress hover-animate">
                    <label className="progress-bar-label">{ item.name }</label>
                    <span className="stars">
                        {
                            [...Array(parseInt(item.level))].map((el, i) => (
                                <span className="star full" key={ i }><Star /></span>
                            ))
                        }

                        {
                            [...Array(5 - parseInt(item.level))].map((el, i) => (
                                <span className="star empty" key={ i }><StarEmpty /></span>
                            ))
                        }
                    </span>
                </div>
            ))
        }
    </div>
);

OtherSkills.propTypes = {
    data: React.PropTypes.array.isRequired,
};

export default OtherSkills;
