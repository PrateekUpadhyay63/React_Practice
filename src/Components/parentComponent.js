import React from "react";

class ParentComponent extends React.Component {
  render() {
    const { heading, text, imgName } = this.props;
    return (
      <div className={"itemContainer"}>
        <h3 className={"headingClass"}>{this.props.heading}</h3>
        <p className={"textClass"}>{this.props.text}</p>
        <img className={"imgClass"} src={this.props.imgName} alt={"img"} />
      </div>
    );
  }
}
export default ParentComponent;
