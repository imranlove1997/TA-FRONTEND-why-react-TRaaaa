function App(props) {
    function handleClick() {
      alert('To learn React use https://reactjs.org');
      alert('React and ReactDOM works together');
      alert('Babel helps in writing JSX');
    }
    return (
      <>
          <button className='btn' onClick={() => handleClick()}>
            Help
          </button>
      </>
    );
  }
  
  export default App;