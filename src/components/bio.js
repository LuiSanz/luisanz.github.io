const Bio = () => (
<React.Fragment>
  <div className="bioContainer">
        <h1 className="item name">Luis Sánchez</h1>
        <p className="item details">JavaScript | React | Node</p>
        <p className="item">Full stack web developer, based in the Dominican Republic,  primarily using JavaScript in different flavors. Sports fan.</p>
        <p className="item">More about me</p> 
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
          <a href="mailto:sanz.luis0@gmail.com" title="E-mail me" target="_blank" className="icons">
            <i className="fa fa-envelope-square"></i>
          </a>
        </div>
</div> 
    <style jsx>{`
      .item {
        color: white;
        font-size: 17px;
        text-align: center;
        margin: 10px;
      }
      .details{

        font-family: 'Signika Negative', serif;
        font-weight: normal;
      }
      .name{
        font-family: 'Signika Negative', serif;
        font-weight: bold;
      }
      .bioContainer {
        display: flex;
        justify-content: center;
        align-content:center;
        flex-direction: column;
        width:100%

      }
      .socialLinks{
        display: flex;
        justify-content: center;
        align-content:center;
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