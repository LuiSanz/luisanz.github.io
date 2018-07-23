import Bio from "./bio";
import Pic from "./pic";
const Profile = () => (
    <React.Fragment>
        <div className="wrapper">
            <Pic />
            <Bio />
        </div>
        <style jsx>{`
            .wrapper {
              display:flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              align-content: center;
              font-family: 'Special Elite','Press Start 2P','Cabin sketch';
              height: 70vh;
              width: auto;
              font-size: 12px;
            }
        `}
        </style>
            
        <style jsx global>{`
          body { 
            background: #000;
            color: #fff;
          }
          `}
        </style>
    </React.Fragment>
);

export default Profile;