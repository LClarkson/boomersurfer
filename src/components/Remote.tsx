import '../styles/Remote.css';

interface RemoteProps {
    changeChannel: () => void;
  }

  const Remote: React.FC<RemoteProps> = ({ changeChannel }) => {
  return (
    <div className="remote-control">
      <div className="controls-cluster">
        <button className="controls">VOLUME UP</button>
        <button className="controls" onClick={changeChannel}>CHANNEL UP</button>
        <button className="controls">VOLUME DOWN</button>
        <button className="controls">CHANNEL DOWN</button>
      </div>   
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