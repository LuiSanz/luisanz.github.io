const Bio = () => (
<React.Fragment>
  <div className="bioContainer">
        <p className="item">Welcome! My name is Luis and I am a handcrated software artisan (fancy for I write code), based in the Dominican Republic 🇩🇴. 
                            Full stack web developer 👨‍💻, primarily using JS in it's different flavors. Sports fan🏀.</p>
        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/luisanz/" title="LinkedIn" target="_blank" className="icons">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://twitter.com/luisanz_" title="Twitter" target="_blank" className="icons">
            <i className="fa fa-twitter-square"></i>
          </a>
          <a href="https://github.com/LuiSanz" title="Github" target="_blank" className="icons">
            <i className="fa fa-github-square"></i>
          </a>
        </div>
</div> 
    <style jsx>{`
      .item {
        color: white;
        font-size: 20px;
        text-align: center;
      
      }
      .bioContainer {
        padding: 0 235px;
      }
      .socialLinks{
        display: flex;
        justify-content: center;
        text-align: center;
      }
      .icons {        
        font-size: 40px;
        color: white;
        padding: 15px;
      }

    `}
    </style> 
</React.Fragment>

);

export default Bio;