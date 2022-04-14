import axios from 'axios';

function App() {
  axios
    .post('http://localhost:3000/getCookie', { id: 'whkwon' })
    .then(res => console.log(res))
    .catch(err => console.error(err));

  return (
    <>
      문제 4
    </>
  );
}

export default App;
