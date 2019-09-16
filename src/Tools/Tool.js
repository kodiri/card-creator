import React, { Component } from 'react';

export default class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleBlock: false,
            show: '',
            colors: this.props.colors, 
            frames: this.props.frames,
            fonts: this.props.fonts,
            active: this.props.title.toLowerCase()
        }
    }

    on_Click() {
        this.setState({
            visibleBlock: !this.state.visibleBlock,
            show: 'active'
        })
    }


    render() {
        // console.log(this.state[this.state.active], 'render')
        
        return (
            <>
                <div className="accordion__section">
                    <button className="accordion" onClick={() => this.on_Click()}>
                        <p className="accordion__title">{this.props.title}</p>
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