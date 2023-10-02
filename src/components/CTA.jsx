import styles from '../style';
import Iframe from 'react-iframe';
import { socialMedia } from "../constants";
const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Communication</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Phone = +212 663 628626 <br/> 
      Gmail = skinacademy.ma@gmail.com <br/>
      Address = 49 avenue 2 mars,boulevard victor hugo résidence roseaux, 5ème étage, porte 27, Casablanca, Morocco <br/>
      </p>
      <br/>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <Iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.015714612429!2d-7.617570322858456!3d33.57894124257137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3885c6778ed%3A0xe08125192f797340!2sSkin%20Academy!5e0!3m2!1str!2str!4v1695506152031!5m2!1str!2str" 
    width="600" height="300" style="border:0;" allowfullscreen="" 
    loading="lazy" referrerpolicy="no-referrer-when-downgrade" border-radius="10px 10px 10px 10px" />
    </div>
    </section>
  )

export default CTA