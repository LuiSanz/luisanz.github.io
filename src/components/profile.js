import Bio from "./bio";
import Pic from "./pic";
const Profile = () => (
    <React.Fragment>
        <div className="outterContainer">
            <Pic />
            <Bio />
        </div>
        <style jsx>{`
            .outterContainer {
              display:flex;
              flex-direction: column;
              font-family: 'Special Elite','Press Start 2P','Cabin sketch';
              font-size: 20px;
              text-align: center;
            }
        `}
        </style>
            
        <style jsx global>{`
          body { 
            background: #000;
            color: #fff;
          }
          html, body {
            height: 100%;
          }
          body {
            margin: 0;
          }`}
        </style>
    </React.Fragment>
);

export default Profile;