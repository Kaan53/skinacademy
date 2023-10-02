import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Soin de visage<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      💆🏻‍♀️Soin de visage professionnel , en 12 étapes . 🧚🏻‍♀️Esthétique médical pour chaque problème une solution 👌.
      Nous avons une large gamme de soin.
      Seulement à 250 Dh 😍 au lieu de 500 Dh..
🌟Rotary brush :premièrement on nettoie la peau et on toutes les impuretés .(avec THALION)
🌟Peeling:on utilise le peeling pour renouveler les cellules et lisser la peau. (avec THALION)
🌟Vapeur d’ozone:c’est l’étape de la vapeur qui va rendre les points noirs faciles à enlever .
🌟Épurateur ultrasonique : on pele avec ce nettoyeur doucement  les cornées de la peau et  on stimule les cellules .
🌟Vacuum:on utilise vacum pour retirer  les points noirs avec un système d’aspiration. .
🌟Spray:on met le spray pour donner un effet raffraichissant et un teint lumineux .
🌟High fréquence pour resserrer les pores et stimuler la production de nouveau collagène .
🌟La radiofréquence stimule la croissance du collagène à long terme et resserre les fibres do collagène existant elle donnent aussi à la peau une apparence plus ferme.
🌟Et enfin on utilise le lifting pour  améliorer curtains effets du vieillissement et créer un rajeunissement du visage
. 🎁🎁🎁led thérapie cadeau
      </p>
      {/* <Button styles="mt-10" /> */}
    </div>    
    <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative rounded-[10px] `}>
        <img src={card} alt="card" className="w-[100%] h-[100%] rounded-[10px]" />
    </div>
  </section>
)

export default CardDeal