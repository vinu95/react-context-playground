type ColorsType = {
  primary_variant_1: string;
  primary_variant_2: string;
  primary_variant_3: string;
  primary_variant_4: string;
  body: string;
  text: string;
  button: {
    text: string;
    background: string;
  };
  link: {
    text: string;
    opacity: number;
  };
};

type ThemeType = {
  id: string;
  name: string;
  colors: ColorsType;
};

type ThemesType = {
  light: ThemeType;
  dark: ThemeType;
};

const themes: ThemesType = {
  light: {
    id: "T_001",
    name: "Light",
    colors: {
      primary_variant_1: "#FFFFFF",
      primary_variant_2: "#144272",
      primary_variant_3: "#eaeaea",
      primary_variant_4: "#9fa7ae",
      body: "#FFFFFF",
      text: "#000000",
      button: {
        text: "#000000",
        background: "#eaeaea",
      },
      link: {
        text: "#000000",
        opacity: 1,
      },
    },
  },
  dark: {
    id: "T_002",
    name: "Dark",
    colors: {
      primary_variant_1: "#0A2647",
      primary_variant_2: "#144272",
      primary_variant_3: "#205295",
      primary_variant_4: "#1e2328",
      body: "#1d2656",
      text: "#ffffff",
      button: {
        text: "#ffffff",
        background: "#205295",
      },
      link: {
        text: "#ffffff",
        opacity: 0.8,
      },
    },
  },
};

export default themes;
