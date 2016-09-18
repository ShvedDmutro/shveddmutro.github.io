import React from 'react';
import SocialIcons from '../SocialIcons';

const ContactInfo = ({ labels, data, social }) => (
    <div className="block-grey block-grey-b">
        <table className="table no-borders">
            <tbody>
                <tr>
                    <td><strong>{ labels.address }</strong></td>
                    <td className="col2">{ data.address }</td>
                </tr>
                <tr>
                    <td><strong>{ labels.email }</strong></td>
                    <td><a href={ `mailto:${data.email}` }>
                        { data.email }
                    </a>
                    </td>
                </tr>
                <tr>
                    <td><strong>{ labels.phone }</strong></td>
                    <td>
                        <a href={ `tel:${data.phone}` }>{ data.phone }</a>
                    </td>
                </tr>
                <tr>
                    <td><strong>{ labels.skype }</strong></td>
                    <td><a href={ `skype:${data.skype}` }>{ data.skype }</a></td>
                </tr>
                <tr>
                    <td><strong>{ labels.website }</strong></td>
                    <td>
                        <a href={ `http://${data.website}` } target="_blank" rel="noopener noreferrer">
                            { data.website }
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <SocialIcons data={ social } />
    </div>
);

ContactInfo.propTypes = {
    data: React.PropTypes.object.isRequired,
    labels: React.PropTypes.object.isRequired,
    social: React.PropTypes.object.isRequired,
};

export default ContactInfo;
