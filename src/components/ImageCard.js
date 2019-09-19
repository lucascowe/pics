import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { span: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 2 + 1);
        console.log("setSPan called height is " + height + " giving " + span + " spans");
        this.setState({ span });
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRow: `span ${this.state.span}`}}>
                <img 
                    alt={description} 
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;