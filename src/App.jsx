import './App.css'
import MusicPlayer from './audio/MusicPlayer';
import GenCanvas from './canvas/GenCanvas';
import MainContents from './contents/MainContents';

function App() {

  return (
    <>
      <GenCanvas />
      <MusicPlayer />
      <MainContents />
    </>
  )
}

export default App;
