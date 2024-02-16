import '../styles/Remote.css';

interface RemoteProps {
    changeChannel: () => void;
  }

  const Remote: React.FC<RemoteProps> = ({ changeChannel }) => {
  return (
    <div className="remote-control">
      <button className="volume-up">VOLUME UP</button>
      <button className="channel-up" onClick={changeChannel}>CHANNEL UP</button>
      <button className="volume-down">VOLUME DOWN</button>
      <button className="channel-down">CHANNEL DOWN</button>
      <div className="separator"></div>
      <div className="navigation-cluster">
        <button className="navigation-button up">UP</button>
        <button className="navigation-button down">DOWN</button>
        <button className="navigation-button left">LEFT</button>
        <button className="navigation-button right">RIGHT</button>
        <button className="navigation-button enter">ENTER</button>
      </div>
    </div>
  );
};

export default Remote;