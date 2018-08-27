// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  if (getcookie('accessToken')) {
    if (!localStorage.getItem('accessToken')) {
      localStorage.setItem('accessToken', getcookie('accessToken'));
    }
    return 'admin';
  } else {
    location.href = 'http://passport.aiblogs.cn/';
  }
}

export function setAuthority(authority) {
  return localStorage.setItem('antd-pro-authority', authority);
}

/**
 * 设置cookie
 * @param {*} name 
 * @param {*} value 
 * @param {*} date 
 */
export function setCookie(name, value, date)
{
    const exp = new Date(date);    // new Date("December 31, 9998");
    exp.setTime(exp.getTime());
    document.cookie = `${name}=${value};expires=${exp.toGMTString()}`;
    // 
}

export function getcookie(name){
  const strcookie = document.cookie;
  const arrcookie = strcookie.split(';');
  for(let i = 0; i < arrcookie.length; i += 1){
    const arr = arrcookie[i].split('=');
    if(arr[0] === name)
    return arr[1];
  }
  return "";
}