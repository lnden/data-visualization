/* eslint-disable */
export const printANSI = () => {
  const text = `
████████╗ ██████╗  ███████╗  ██████╗
╚══██╔══╝ ██╔══██╗ ██╔════╝ ██╔════╝
   ██║    ██║  ██║ ███████╗ ██║     
   ██║    ██║  ██║ ╚════██║ ██║    
███████╗  ██████╔╝ ███████║ ╚██████╗
╚══════╝  ╚═════╝  ╚══════╝  ╚═════╝ 
\t\t\t\t\tPublished ${APP_VERSION}-${GIT_HASH}
\t\t\t\t\tBuild date: ${BUILD_DATE}`;
  console.log(`%c${text}`, 'color: #fc4d50');
  console.log('%c感谢您使用 XXXX 管理平台', 'color: #444; font-size: 14px;');
  console.log('%cThank you for using the XXXX management platform', 'color: #444; font-size: 14px;');
};
