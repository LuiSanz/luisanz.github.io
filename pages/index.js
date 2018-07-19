import React from 'react'
import Head from 'next/head'

const Index = () => (
  <React.Fragment>
    <Head>
      <title>Lui.do - Software developer</title>
      <link href="https://fonts.googleapis.com/css?family=Cabin+Sketch" rel="stylesheet" /> 
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P|Special+Elite" rel="stylesheet"/> 
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
      .flex-container {
        height: 100%;
        padding: 0;
        margin: 0;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .row {
        width: 30%;
        margin-top: 10%
       
      }
      .flex-item {
        padding: 5px;
        margin: 10px;
        font-family: 'Special Elite','Press Start 2P','Cabin sketch';
        font-size: 20px;
        text-align: center;
      }
      .profilePic {
      }
      .img-wrapper{
        display: inline-block;
        overflow: hidden;
        border-radius: 50%;
        border: 7.5px solid white;
      }
      .outterContainer{
        display:flex;
        flex-direction: column;
        font-family: 'Special Elite','Press Start 2P','Cabin sketch';
        font-size: 20px;
        text-align: center;
      }
      .item{
        color: white;
        font-size: 30px;
        text-align: center;
        padding:10px;
      
      }
      .bioContainer{
        
        padding: 5px 35px;
        margin: 5px 50px;
      }

    `
    }
      
    </style>
    <div className="outterContainer">
      <div className="imgContainer">
        <div className="item" >
          <div className="img-wrapper" >
          <img className="profilePic" width="250"
            src="https://instagram.fsdq1-2.fna.fbcdn.net/vp/8e27bbf7247e47aaae69e4145bc55b15/5BE7D801/t51.2885-15/e15/11374549_908588665865963_517032158_n.jpg" />
          </div>
        
        </div>
      </div>
      <div className="bioContainer">
        <p className="item">Software developer based in the Dominican Republic 🇩🇴, 
                                primarily working on Web development 👨‍💻 using JavaScript and React. Basketball fan 🏀.</p>
      </div>
    </div>




  </React.Fragment>
  )
  
  export default Index