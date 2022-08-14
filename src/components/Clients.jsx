import { clients } from "../constants/index";
import styles from "../style";
import syles from "../style";

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {
        clients.map((client) => (
          <div key={client?.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]  `}>
              <img src={client?.logo} alt="logo"  className="sm:w-[192px] w-[100px] object-contain hover:bg-gray-900 cursor-pointer "/>
          </div>
        ))
      }
      </div>
    </section>
  )


export default Clients