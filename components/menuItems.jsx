export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Products',
    url: '/purches',
    submenu: [
      {
        title: 'New',
        url: 'New',
      },
      {
        title: 'Rutine Care',
        url: '/RutineCare',
        submenu: [
          {
            title: 'Skin Care',
            url: '/skinCare',
          },
          {
            title: 'Hair Care',
            url:'/Hair'
            // submenu: [
            //   {
            //     title: 'EXO',
            //     url: '/EXO',
            //   },
            //   {
            //     title: 'Ateez',
            //     url: '/Ateez',
            //   },
            // ],
          },
        ],
      },
      {
        title: 'Blue Only',
        url: '/BlueOnly',
      },
    ],
  },
  {
    title: 'Limited Addition',
    url: '/LimitedAddition',
  },

  { title: "Sale & Offers",
   url: "/sale",
  },

  {
    title: 'About',
    url: '/about',
  },
];