export const proyectos = [
  {
    id: 1,
    name: "Refugio Gym",
    tecnologias: "JavaScript",
    link: "https://gym-refugio.vercel.app/",
    img: "/img/gym.jpg",
  },

  {
    id: 2,
    name: "Portafolio Coach Oncologico",
    tecnologias: "JavaScript",
    link: "https://portafolio-coaching.vercel.app/",
    img: "/img/coach.jpg",
  },

  {
    id: 3,
    name: "Venta Cuadros",
    tecnologias: "React.js",
    link: "https://cuadros.vercel.app/",
    img: "/img/cuadros.jpg",
  },
  {
    id: 4,
    name: "Invitación Boda",
    tecnologias: "Javascript",
    link: "https://floryfran.vercel.app/",
    img: "/img/casorio.png",
  },
];

export const Pages = proyectos.reduce((res, page) => {
  if (!res[page.section]) {
    res[page.section] = [];
  }
  res[page.section] = [...res[page.section], page];

  return res;
}, {});
