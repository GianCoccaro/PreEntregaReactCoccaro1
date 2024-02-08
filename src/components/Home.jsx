import imgBanner from '../../public/img/banner.jpg';
import '../App.css';

const Home = () => {
  return (
    <div className='banner'>
        <img src={imgBanner} alt="imagen banner" />
        <div className="bannerContent">
            <h1>WELCOME TO HUGUITO'S WEBSITE</h1>
        </div>
    </div>
  )
}

export default Home;