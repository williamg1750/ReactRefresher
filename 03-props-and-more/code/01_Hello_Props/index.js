class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello to="Ringo" from="Paul" />
        <Hello to="Cher" from="Sonny" /> */}
        <div>
          <Hello to='ben' from='William' />
          <Hello to='emily' from='William' />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
