import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

export default function CardDeal() {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, ea quo? Omnis excepturi placeat provident nihil veritatis porro vero? Quia ex consequuntur obcaecati illum voluptatem! Nesciunt libero nemo dolor tempora.</p>
            <Button styles="mt-10"/>
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="w-full h-full"/>
        </div>
    </section>
  )
}

