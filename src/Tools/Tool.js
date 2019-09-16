import React, { Component } from 'react';

export default class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleBlock: false,
            show: '',
            bgcolors: this.props.bgcolors, 
            frames: this.props.frames,
            fonts: this.props.fonts,
            active: this.props.title.toLowerCase(),
            colors: this.props.colors,
            openProp: this.props.openProp
        }
    }

    on_Click() {
        this.setState({
            visibleBlock: !this.state.visibleBlock,
            show: 'active',
            openProp: !this.props.openProp
        })
    }


    render() {
        return (
            <>
                <div className="accordion__section">
                    <button className="accordion" onClick={() => this.on_Click()}>
                        <p className="accordion__title">{this.props.name}</p>
                    </button>
                    {this.state[this.state.active].map(value => (
                        <div key={value} className={`showText ${this.state.visibleBlock ? "" : " hidden"}`}>
                            <div className='accordion__text' value={value}
                                onClick={() => this.props.changeProperty(this.state.active, value)}>{value}</div>
                        </div>
                        )
                    )}
                </div>
            </>
        );
    }
}