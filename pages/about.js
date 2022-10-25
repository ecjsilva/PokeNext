import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <p>
        PokeNext é um App construído em Next.js para consultar Pokémons.
      </p>
      <Image
        src="/images/charizard.png"
        height="300"
        width="300"
        alt="Charizard-img"
      />
    </div>
  );
}
