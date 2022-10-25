import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores labore
        ex magni excepturi reprehenderit sunt dolores soluta culpa asperiores?
        Quisquam fugit totam dolor possimus non vero accusantium beatae velit
        voluptatibus. Repellendus cumque sint, quisquam delectus odit aliquid
        voluptate incidunt laudantium magnam earum suscipit animi accusantium
        modi sapiente voluptatem magni eligendi. Deserunt animi dolorem cum
        similique commodi aspernatur ullam, odit adipisci. Provident, tempore a
        quas sapiente mnostrum, voluptatibus eligendi odio reprehenderit
        quisquam ea neque.
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
