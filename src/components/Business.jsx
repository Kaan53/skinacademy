import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       À propos de nous <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      CENTRE DE BEAUTÉ À CASABLANCA
Doté d'une expérience de plusieurs années dans le domaine de l'esthétique , le centre de beauté SKIN ACADEMY met votre beauté à l'honneur à Casablanca. Des pieds à la tête, nous assurons des soins de grande qualité avec les meilleurs produits et une équipe d'esthéticiennes professionnelles à l'écoute de vos besoins.

Vous cherchez un centre de beauté proche de chez vous où vous trouverez des spécialistes de la beauté, une ambiance agréable et des soins haut de gamme ? Pour valoriser votre beauté au quotidien ou pour un évènement spécial, nous vous proposons une large gamme de prestations au juste prix.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;