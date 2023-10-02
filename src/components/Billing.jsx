import {apple, bill, google} from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-[20px]" />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Épilation définitive <br className="sm:block hidden" /></h2>
      <p className={`${styles.paragraph} nax-w-[470px] mt-5`}>
      💖Épilation définitive pour une peau lisse, zéro poils définitivement 💕Chaque séance, des poils vont mourir jusqu’à disparition totale de tous les poils. 💓Technique sûre, efficace et indolore et sans effet secondaire 💫
      </p>
      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
       <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
       <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
      </div> */}
    </div>

  </section>
)

export default Billing