import React from 'react';

export const About = () => {
  const styles = {
    container: {
      width: '100%',
      padding: '78px 0px',
      backgroundColor: '#ddd',
    },
    main: {
      width: '1130px',
      maxWidth: '95%',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    aboutText: {
      width: '550px',
    },
    heading: {
      color: 'rgb(0, 0, 0)',
      fontSize: '80px',
      textTransform: 'capitalize',
      marginBottom: '20px',
    },
    subheading: {
      color: 'rgb(0, 0, 0)',
      fontSize: '25px',
      textTransform: 'capitalize',
      marginBottom: '25px',
      letterSpacing: '2px',
    },
    span: {
      color: 'crimson',
    },
    paragraph: {
      color: 'rgba(35, 28, 35, 0.8)',
      letterSpacing: '1px',
      lineHeight: '28px',
      fontSize: '18px',
      marginBottom: '45px',
    },
    button: {
      background: 'crimson',
      color: 'rgb(0, 0, 0)',
      textDecoration: 'none',
      width: '175px',
      height: '20px', 
      border: '2px solid transparent',
      fontWeight: 'bold',
      padding: '13px 30px',
      borderRadius: '30px',
      transition: '0.4s',
    },
    buttonLink: {
      textDecoration: 'none',
      color: '#000000',
    },
    buttonHover: {
      background: 'transparent',
      border: '2px solid crimson',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <section style={styles.main}>
        <div style={styles.aboutText}>
          <h1 style={styles.heading}>
            About <span style={styles.span}>AdVintage</span>
          </h1>
          <h5 style={styles.subheading}>
            Your Destination for Timeless Treasures
          </h5>
          <p style={styles.paragraph}>
            Welcome to AdVintage, where the past meets the present in a
            celebration of history and craftsmanship. Nestled in the heart of
            Coimbatore, AdVintage is more than just an antique shop; it's
            an enchanting journey through eras and styles.
          </p>
          <p style={styles.paragraph}>
            Our carefully curated collection of antique furniture, vintage
            decor, and unique artifacts invites you to explore and rediscover
            the beauty of bygone days. Each piece in our store tells a story,
            and we take pride in preserving the charm and character of these
            timeless treasures.
          </p>
          <p style={styles.paragraph}>
            Whether you are a seasoned collector, a history enthusiast, or
            someone looking to add a touch of nostalgia to your home, AdVintage
            offers a diverse range of items that captivate and inspire. Our
            knowledgeable staff is passionate about antiques and is here to
            assist you in finding the perfect piece to complement your style.
          </p>
          <div className='button' style={styles.button}>
              <a href='/shop' style={styles.buttonLink}>
                Explore Our Collection</a>
          </div>
        </div>
      </section>
    </div>
  );
};
