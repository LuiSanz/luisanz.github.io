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
        transform: scale(1.5);
      }
      .img-wrapper{
        display: inline-block;
        overflow: hidden;
        border-radius: 50%;
        border: 7.5px solid white;
      }

    `
    }
      
    </style>
    <div className="flex-container">
      <div className="row">
          <div className="img-wrapper">
            <img className="profilePic" width="200"
            src="https://instagram.fhex1-1.fna.fbcdn.net/vp/1350b4424560805a92e2da714fb6552f/5BED4315/t51.2885-15/e35/19436792_1562299597147742_2782724382118641664_n.jpg?_nc_eui2=AeEI93ZsMlQsJzK10XBlEndENbfx3Djrq2YGRwS1z5c0_CSnduPih6J1tGUxDiHJkxnmJsCdhYy7WdC21FKwU-iISHcKbA0f4G6w16T9V9cCxA" />
          </div>
        <p className="flex-item">Software developer based in the Dominican Republic 🇩🇴, 
                                primarily working on Web development 👨‍💻 using JavaScript and React. Basketball fan 🏀.</p>
      </div>
    </div>

  </React.Fragment>
  )
  
  export default Index