export type ColorsType = {
  variant_1: string;
  variant_2: string;
  variant_3: string;
  variant_4: string;
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
  sidebar: {
    text: string;
    highlight_color: string;
  }
};

export type ThemeType = {
  id: string;
  name: string;
  colors: ColorsType;
};

export type ThemesType = {
  light: ThemeType;
  dark: ThemeType;
};

const themes: ThemesType = {
  light: {
    id: "T_001",
    name: "Light",
    colors: {
      variant_1: "#FFFFFF",
      variant_2: "#144272",
      variant_3: "#eaeaea",
      variant_4: "#9fa7ae",
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
      sidebar: {
        text: "#666666",
        highlight_color: "#000000",
      },
    },
  },
  dark: {
    id: "T_002",
    name: "Dark",
    colors: {
      variant_1: "#0A2647",
      variant_2: "#144272",
      variant_3: "##143157",
      variant_4: "#1e2328",
      body: "#1d2656",
      text: "#ffffff",
      button: {
        text: "#ffffff",
        background: "#143157",
      },
      link: {
        text: "#ffffff",
        opacity: 0.8,
      },
      sidebar: {
        text: "#e5c6c6",
        highlight_color: "#ffffff"
      }
    },
  },
};

export default themes;
