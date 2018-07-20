const Bio = () => (
<React.Fragment>
  <div className="bioContainer">
        <p className="item">Welcome! my name is Luis and I am a handcrated software artisan (fancy for I write code), based in the Dominican Republic 🇩🇴, 
                            primarily working with full stack web development 👨‍💻. Sports fan, specially Basketball 🏀.</p>
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
        padding: 0 10px;
      
      }
      .bioContainer {
        padding: 0 235px;
        margin: 0 50px;
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