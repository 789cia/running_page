interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '跑步记录',
  siteUrl: 'https://yihong.run',
  logo: 'https://',
  description: '个人跑步热力图',
  navLinks: [
    {
      name: '',
      url: 'https://',
    },
    {
      name: '',
      url: 'https://',
    },
  ],
};

export default data;
