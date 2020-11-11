const config = {
  dev: {
    baseURL: '',
  },
  prod: {
    baseURL: '',
  },
  test: {
    baseURL: '',
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
