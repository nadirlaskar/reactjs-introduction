import Clock from "./components/clock";

function App() {
  return (
    <div>
      React App
      <Clock timeZone="Asia/Kolkata" />
      <Clock timeZone="Asia/Kabul" />
      <Clock timeZone="Africa/Lagos" />
    </div>
  );
}

export default App;
