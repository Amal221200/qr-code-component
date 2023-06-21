import './App.css'
import image from './assets/images/image-qr-code.png'
function App() {

  return (
    <div className='container'>
      <div className="box">
        <div className="image">
          <img src={image} alt="This is a qr code to Frontend Mentor.io"  />
        </div>
        <div className="content">
          <h2>Improve your frontend <br /> skills by building projects</h2>
          <p>Scan the QR code to visit Frontend <br />Mentor and take your skills to <br /> the next level</p>
        </div>
      </div>
    </div>
  )
}

export default App
