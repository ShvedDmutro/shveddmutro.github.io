import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '../components/nav/NavItem';
import Header from '../components/header/Header';
import Info from '../components/resume/Info';
import Skills from '../components/resume/Skills';
import OtherSkills from '../components/resume/OtherSkills';

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workIndex: 0,
            educationIndex: 0,
        };
    }

    onNext(type) {
        const data = this.props.data.resume[type];
        const state = this.state;
        const prop = `${type}Index`;
        let index = this.state[prop] + 1;

        index = data[index] ? index : 0;
        state[prop] = index;
        this.setState(state);
    }

    onPrev(type) {
        const data = this.props.data.resume[type];
        const state = this.state;
        const prop = `${type}Index`;
        let index = this.state[prop] - 1;

        index = data[index] ? index : data.length - 1;
        state[prop] = index;
        this.setState(state);
    }

    render() {
        const icon = <Icon type="resume" />;
        const resumeData = this.props.data.resume;
        const labels = this.props.data.labels;
        const labelsWork = {
            name: labels.company,
            address: labels.address,
            period: labels.period,
            position: labels.position,
        };
        const labelsEducation = {
            name: labels.name,
            address: labels.address,
            period: labels.period,
            position: labels.level,
        };
        return (
            <div>
                <Header icon={ icon } title={ resumeData.title } subTitle={ resumeData.subTitle } />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-6">
                                <h3 className="title">{ labels.work }</h3>
                                <Info
                                    data={ resumeData.work[this.state.workIndex] }
                                    labels={ labelsWork }
                                    onNext={ this.onNext.bind(this, 'work') }
                                    onPrev={ this.onPrev.bind(this, 'work') }
                                    showArrows={ resumeData.work.length > 1 }
                                />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-6">
                                <br className="visible-sm visible-xs" />
                                <h3 className="title">{ labels.education }</h3>
                                <Info
                                    data={ resumeData.education[this.state.educationIndex] }
                                    labels={ labelsEducation }
                                    onNext={ this.onNext.bind(this, 'education') }
                                    onPrev={ this.onPrev.bind(this, 'education') }
                                    showArrows={ resumeData.education.length > 1 }
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="skills">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <h3 className="title">{ labels.professionalSkills }</h3>
                                <Skills data={ resumeData.skills } />
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <br className="visible-xs" />
                                <h3 className="title">{ labels.additionalSkills }</h3>
                                <div className="other-skills">
                                    <OtherSkills data={ resumeData.additionalSkills } />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

Resume.propTypes = {
    data: React.PropTypes.object,
};

export default connect(state => state)(Resume);
