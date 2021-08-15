import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageForm from './components/MessageForm';
import  Messages  from './components/Messages';
function App() {
  return (
    <div className='my-container'>
      <div className='chat-area'>
        <Messages/>
      </div>
      <div className="type-area">
        <MessageForm/>
      </div>
    </div>
  );
}

export default App;
