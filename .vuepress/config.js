module.exports = {
    title: 'VuePressThemeCustom',
    description: '테마 커스텀하기',
    themeConfig: {
      search: false, // 검색은 사용하지 않는다.
      logo: 'https://avatars0.githubusercontent.com/u/18749057?s=120&v=4', // logo 이미지
      nav: [
        { text: 'Home', link: '/' }, // 상단 메뉴
      ],
      sidebar: 'auto', // 사이드바 사용 여부. auto로 하면 content의 내용이 반영된다.
      smoothScroll: true // 부드러운 스크롤 사용 여부
    }
  }