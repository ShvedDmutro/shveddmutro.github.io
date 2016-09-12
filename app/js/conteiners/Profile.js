import React from 'react';
import { connect } from 'react-redux';
import MarkdownIt from 'markdown-it';
import Icon from '../components/nav/NavItem';
import Header from '../components/header/Header';
import Brief from '../components/profile/Brief';
import ContactInfo from '../components/profile/ContactInfo';

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

const Profile = ({ data }) => {
    const icon = <Icon type="profile" />;
    const profileData = data.profile;
    const personData = data.person;
    const labels = data.labels;

    return (
        <div>
            <Header icon={ icon } title={ profileData.title } subTitle={ profileData.subTitle } />

            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-7">
                            <Brief
                                title={ profileData.content.title }
                                content={ md.render(profileData.content.txt) }
                                cvLabel={ labels.downloadCv }
                                cvLink={ personData.cv }
                            />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-5">
                            <ContactInfo
                                data={ personData }
                                labels={ labels }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

Profile.propTypes = {
    data: React.PropTypes.object.isRequired,
};

export default connect(state => state)(Profile);
