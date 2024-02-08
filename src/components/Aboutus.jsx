import { useEffect } from 'react';
import '../App.css';

const Aboutus = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("click")
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }
  }, [])
 
  return (
    <div className="about-us">
      <h1>ABOUT US</h1>
      <p>
      Welcome to Hugo's Fan Page, the home of adorable Chihuahua charm! 🐾
      </p>
      <p>
      Meet Hugo, the pint-sized bundle of joy who stole our hearts and inspired this fan page. From his quirky antics to his heart-melting expressions, Hugo is more than a pet—he's family. Our journey began when Hugo came into our lives, bringing endless laughter and love.
      </p>
      <p>
      At Hugo's Fan Page, our mission is simple: to spread happiness and celebrate the joy that pets bring into our lives. Through whimsical products featuring Hugo's charming face, we aim to brighten your day and create a community that shares in the love for our furry friend.
      </p>
      <p>
      Discover a range of products adorned with Hugo's adorable face. From stylish backpacks to cozy tees and charming mugs, each item is designed with love and a touch of Hugo's irresistible charm. Every purchase brings a piece of Hugo's joy into your daily life.
      </p>
      <p>
      We are committed to delivering products of the highest quality. Behind each design is a dedication to capturing the essence of Hugo's personality. From concept to creation, we ensure that every product meets the paw-some standards set by our lovable mascot.
      </p>
      <p>
      A big, heartfelt thank you to our incredible community of followers and customers. Your support has made Hugo's Fan Page a place filled with smiles and wagging tails. We love seeing photos of your Hugo-inspired moments, so keep sharing the joy with us!
      </p>
      <p>
      Join the paw-ty and stay connected with us! Follow us on social media for the latest updates, adorable Hugo pics, and exclusive offers. Your journey with Hugo's Fan Page is just beginning, and we're thrilled to have you along for the ride.
      </p>
        <p> 
            🐾 Thank you for being a part of our Hugo-loving family! 🐾
        </p>
    </div>
  )
}

export default Aboutus;