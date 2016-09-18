import React from 'react';
import LeftIcon from 'react-icons/lib/fa/angle-left';
import RightIcon from 'react-icons/lib/fa/angle-right';

const Info = ({ data, labels, onNext, onPrev, showArrows }) => (
    <div className="block-grey">
        <table className="table no-borders">
            <tbody>
                <tr>
                    <td><strong>{ labels.name }</strong></td>
                    <td className="col1">{ data.name }</td>
                </tr>
                <tr>
                    <td><strong>{ labels.address }</strong></td>
                    <td>{ data.address }</td>
                </tr>
                <tr>
                    <td><strong>{ labels.period }</strong></td>
                    <td>{ data.period }</td>
                </tr>
                <tr>
                    <td><strong>{ labels.position }</strong></td>
                    <td>{ data.position }</td>
                </tr>
            </tbody>
        </table>
        <div className="desc">
            <p>{ data.desc }</p>
        </div>
        {
           showArrows &&
           (
               <div className="controls">
                   <div className="control hover-animate" onClick={ onPrev }><LeftIcon /></div>
                   <div className="control hover-animate" onClick={ onNext }><RightIcon /></div>
               </div>
           )
        }
    </div>
);

Info.propTypes = {
    data: React.PropTypes.object.isRequired,
    labels: React.PropTypes.object.isRequired,
    onNext: React.PropTypes.func.isRequired,
    onPrev: React.PropTypes.func.isRequired,
    showArrows: React.PropTypes.bool.isRequired,
};

export default Info;
