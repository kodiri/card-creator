import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleBlock: false,
            show: '',
            bgcolors: this.props.bgcolors, 
            frames: this.props.frames,
            fonts: this.props.fonts,
            bgimages: this.props.bgImages,
            active: this.props.title.toLowerCase(),
            colors: this.props.colors,
            enabled: this.props.enabled,
            propertyName: this.props.propertyName
        }
    }

    getValue(property, value) {
        return property === "backgroundImage" ? `url(${value})` : value;
    }

    on_Click() {
        this.setState({
            visibleBlock: !this.state.visibleBlock,
            show: 'active'
        })
    }

    render() {
        return (
            <div className="accordion-wrap">
                <div className="accordion__section">
                    <button className="accordion" onClick={this.props.f}>
                        <p className="accordion__title"><FontAwesomeIcon icon={['fas', this.props.icon]} /> {this.props.name}</p>
                    </button>
                    <div className={`accordion__inner ${this.props.enabled ? 'show' : ''}`}>
                        {this.props.enabled &&
                            this.state[this.state.active].map((value, index) => (
                                <div key={value} style={{height: 50}}>
                                    <div className='accordion__text' value={value} style={{[this.props.propertyName]: this.getValue(this.props.propertyName, value)}}
                                        onClick={() => this.props.changeProperty(this.state.active, value)}>{this.props.names ? this.props.names[index] : value}</div>
                                </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}