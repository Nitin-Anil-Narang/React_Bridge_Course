import data from './user.json'
import UserCard from './components/UserCard'

function App() {
  return (
    <div >
      <UserCard
      name={data.name}
      address={data.address}
      age={data.age}
      number={data.phoneNumber} />
    </div>
  );
}

export default App;
