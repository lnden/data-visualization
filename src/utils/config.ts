const config: any = {
  dev: {
    baseURL: 'http://knowledge.leonp.club:8181/',
  },
  prod: {
    baseURL: 'http://bpo.gcheck.com.cn:7067/',
  },
  test: {
    baseURL: 'http://knowledge.leonp.club:8181/',
  },
};


let env = '';
switch (process.env.NODE_ENV) {
  case 'test':
    env = 'test'; break;
  case 'prod':
    env = 'prod'; break;
  default:
    env = 'dev';
}

export default Object.freeze(config[env]);
