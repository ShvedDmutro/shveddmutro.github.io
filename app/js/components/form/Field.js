import React, { Component } from 'react';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: true,
        };
    }

    onBlur(index) {
        this.props.onBlur(index);
    }

    onChange(index, event) {
        this.props.onChange(index, event.currentTarget.value);
    }

    render() {
        const data = this.props.data;
        const errorClass = data.valid ? '' : 'has-error';
        const className = `form-group ${errorClass}`;
        let field;
        if (data.type === 'area') {
            field = (
                <div className={ className }>
                    <textarea
                        className="form-control"
                        rows="7"
                        placeholder={ data.placeholder }
                        value={ data.value }
                        onBlur={ this.onBlur.bind(this, this.props.index) }
                        onChange={ this.onChange.bind(this, this.props.index) }
                    />
                </div>
            );
        } else {
            field = (
                <div className={ className }>
                    <input
                        type={ data.type }
                        className="form-control"
                        placeholder={ data.placeholder }
                        value={ data.value }
                        onBlur={ this.onBlur.bind(this, this.props.index) }
                        onChange={ this.onChange.bind(this, this.props.index) }
                    />
                </div>
            );
        }
        return field;
    }
}

Field.propTypes = {
    data: React.PropTypes.object,
    index: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func.isRequired,
};

export default Field;
