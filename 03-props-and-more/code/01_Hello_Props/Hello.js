class Hello extends React.Component {
  render() {
    // return <p>Hi {this.props.to} from {this.props.from}</p>;
    console.log(this.props);
    const name = this.props.to;
    const sender = this.props.from;
    return (
      <p>
        HI {name} from {sender}
      </p>
    );
  }
}
