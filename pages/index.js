import React from 'react';
import Head from 'next/head';


const Index = () => (
  <React.Fragment>
    <Head>
    <meta name="theme-color" content="#000" />
      <title>Lui.do - Software developer</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P|Special+Elite|Cabin+Sketch" rel="stylesheet"/> 
      <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
      <link rel="shortcut icon" type="image/png" href="https://avatars1.githubusercontent.com/u/26881706?s=460&v=4"/>
    </Head>
    
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
      }
    `}</style>
    <style jsx>{`
      .flex-item {
        padding: 5px;
        margin: 10px;
        font-family: 'Special Elite','Press Start 2P','Cabin sketch';
        font-size: 20px;
        text-align: center;
      }
      .img-wrapper{
        display: inline-block;
        overflow: hidden;
        border-radius: 50%;
        border: 7.5px solid white;
      }
      .outterContainer {
        display:flex;
        flex-direction: column;
        font-family: 'Special Elite','Press Start 2P','Cabin sketch';
        font-size: 20px;
        text-align: center;
      }
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
      .imgContainer {
        margin-top: 3em;
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
    <div className="outterContainer">
      <div className="imgContainer">
        <div className="item" >
          <div className="img-wrapper" >
            <img className="profilePic" width="90"
              src="https://instagram.fsdq1-2.fna.fbcdn.net/vp/8e27bbf7247e47aaae69e4145bc55b15/5BE7D801/t51.2885-15/e15/11374549_908588665865963_517032158_n.jpg" />
          </div>
        
        </div>
      </div>
      <div className="bioContainer">
        <p className="item">Welcome! my name is Luis and I am a handcrated software artisan (fancy for I write code), based in the Dominican Republic 🇩🇴, 
                            primarily working with full stack web development 👨‍💻. Sports fan, specially Basketball 🏀.</p>
        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/luisanz/" title="LinkedIn" target="_blank" className="icons">
            <i class="fa fa-linkedin-square"></i>
          </a>
          <a href="https://twitter.com/luisanz_" title="Twitter" target="_blank" className="icons">
            <i class="fa fa-twitter-square"></i>
          </a>
          <a href="https://github.com/LuiSanz" title="Github" target="_blank" className="icons">
            <i class="fa fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
  
  export default Index