import styles from './twitter.module.css';

const URL = 'https://res.cloudinary.com/dsxv50ox4/image/upload';

export const SliderContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '27px',
        alignItems: 'center',
      }}
      className={styles.__mar}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <img
          src={`${URL}/v1698012633/devfest-2023/olaide_dprudg.svg`}
          alt="Olaide"
        />
        <img
          src={`${URL}/v1698012682/devfest-2023/stont-tweet_yyaw0e.svg`}
          alt="Stont"
        />
      </div>
      <img
        src={`${URL}/v1698012547/devfest-2023/aynerd-tweet_mbqmws.svg`}
        alt="Aynerd"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <img
          src={`${URL}/v1698012566/devfest-2023/joy-tweet_b5ziqe.svg`}
          alt="Joy"
        />
        <img
          src={`${URL}/v1698012553/devfest-2023/daniel-tweet_ye0shy.svg`}
          alt="Daniel"
        />
      </div>
      <img
        src={`${URL}/v1698012673/devfest-2023/seun-tweet_untsnj.svg`}
        alt="Seun"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <img
          src={`${URL}/v1698012633/devfest-2023/olaide_dprudg.svg`}
          alt="Olaide"
        />
        <img
          src={`${URL}/v1698012682/devfest-2023/stont-tweet_yyaw0e.svg`}
          alt="Stont"
        />
      </div>
      <img
        src={`${URL}/v1698012547/devfest-2023/aynerd-tweet_mbqmws.svg`}
        alt="Aynerd"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <img
          src={`${URL}/v1698012688/devfest-2023/sunkanmi-tweet_guflhm.svg`}
          alt="Sukanmi"
        />
        <img
          src={`${URL}/v1698012589/devfest-2023/lewis-tweet_tgcvwd.svg`}
          alt="Lewis"
        />
      </div>
    </div>
  );
};
