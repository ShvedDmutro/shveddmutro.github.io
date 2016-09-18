import React from 'react';

const Skills = ({ data }) => (
    <div>
        {
            data.map((item, index) => (
                <div key={ index }>
                    <label>{ item.name }</label>
                    <div className="progress">
                        <div className="progress-bar" style={ { width: `${item.level}%` } }>
                            <span>{ item.level }%</span>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
);

Skills.propTypes = {
    data: React.PropTypes.array.isRequired,
};

export default Skills;
