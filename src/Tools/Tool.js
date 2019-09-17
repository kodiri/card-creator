<<<<<<< HEAD
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
=======
import React, { Component } from 'react';

export default class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleBlock: false,
            show: '',
            frames: this.props.frames,
            fonts: this.props.fonts,
            active: this.props.title.toLowerCase(),
            colors: this.props.colors,
            open: true,
            class: "accordion__section"
        }
    }

    on_Click() {
        this.setState({
            open:  !this.state.open,
            class: "accordion__section",
            visibleBlock: !this.state.visibleBlock,
            show: 'active'
        })
    }
    render() {
        console.log(this.state.open)
        // console.log(this.state[this.state.active], 'render')
        
        return (
            <>
                <div className={this.state.class}>
                    <button className="accordion" onClick={() => this.on_Click()}>
                        <p className="accordion__title">{this.props.title}</p>
                    </button>
                    {this.state[this.state.active].map(value => (
                        <div key={value}>
                            <div className='accordion__text' value={value}
                                onClick={() => this.props.changeProperty(this.state.active, value)}>{value}</div>
                        </div>
                        )
                    )}
                </div>
            </>
        );
    } 
>>>>>>> 648b2cca48d4521d7d8d8a4bbc4c781d128ef056
}