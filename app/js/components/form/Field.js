import  React, { Component } from 'react';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: true
        }
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

        if (data.type === 'area') {
            return (
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
            )
        } else {
            return (
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
            )
        }
    }
}

export default Field;
