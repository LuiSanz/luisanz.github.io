const Pic = () => (
    <React.Fragment>
        <div className="imgContainer">
            <div className="item" >
              <div className="img-wrapper" >
                <img className="profilePic" width="90"
                  src="https://instagram.fsdq1-2.fna.fbcdn.net/vp/8e27bbf7247e47aaae69e4145bc55b15/5BE7D801/t51.2885-15/e15/11374549_908588665865963_517032158_n.jpg" />
              </div>
            </div>
        </div>
    <style jsx>{`
      .img-wrapper{
        display: inline-block;
        overflow: hidden;
        border-radius: 50%;
        border: 4.5px solid white;
      }
      .item {
        color: white;
        font-size: 20px;
        text-align: center;
      
      }
      .imgContainer {
      }
      .profilePic{
        transform: scale(1.08)
      }
    `}
    </style>
    </React.Fragment>
);

export default Pic;