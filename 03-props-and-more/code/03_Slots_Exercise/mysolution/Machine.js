class Machine extends React.Component {
  render() {
    const first = Math.floor(Math.random() * 3) + 1;
    const secound = Math.floor(Math.random() * 3) + 1;
    const third = Math.floor(Math.random() * 3) + 1;
    let msg;
    if (first === secound && first === third) {
      msg = 'congrats';
    } else {
      msg = 'sorry try agian';
    }
    return (
      <div>
        <h1>
          {first}
          {secound}
          {third}
        </h1>
        <h2>{msg}</h2>
      </div>
    );
  }
}
