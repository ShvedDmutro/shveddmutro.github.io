import React from 'react';

const ContactInfo = ({ labels, data }) => (
    <div className="block-grey">
        <table className="table no-borders">
            <tbody>
                <tr>
                    <td><strong>{ labels.name }</strong></td>
                    <td className="text-right">{ data.name }</td>
                </tr>
                <tr>
                    <td><strong>{ labels.dob }</strong></td>
                    <td className="text-right">{ data.dob }</td>
                </tr>
                <tr>
                    <td><strong>{ labels.email }</strong></td>
                    <td className="text-right"><a href={ `mailto:${data.email}` }>
                        { data.email }
                    </a>
                    </td>
                </tr>
                <tr>
                    <td><strong>{ labels.phone }</strong></td>
                    <td className="text-right">
                        <a href={ `tel:${data.phone}` }>{ data.phone }</a>
                    </td>
                </tr>
                <tr>
                    <td><strong>{ labels.website }</strong></td>
                    <td className="text-right">
                        <a href={ `http://${data.website}` } target="_blank" rel="noopener noreferrer">
                            { data.website }
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

ContactInfo.propTypes = {
    data: React.PropTypes.object.isRequired,
    labels: React.PropTypes.object.isRequired,
};

export default ContactInfo;
