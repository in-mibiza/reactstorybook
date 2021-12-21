import React from 'react';
import styles from './Sliderhome.module.scss';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `https://dev2.sklum.com/img/core/skl/promos/home/${src}?w=${width}`;
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="211216-SK-BANNER-save-the-children-Desktop_es.jpg"
      alt="Kids"
      width={789}
      height={597}
    />
  )
}

const Sliderhome = () => (
  <div className={styles.Sliderhome}>
    <div className={styles.Sliderhome__wrapper}>

      <MyImage></MyImage>

    </div>
  </div>
);

export default Sliderhome;