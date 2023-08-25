import Cookies from "universal-cookie";

export const cookies = new Cookies()

const getDomain = () => {
  if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
    return '';
  } else {
    return '.your-domain.com';
  }
};
export type setCookieProps = {
  access_token: string;
};

export const setAccessToken = ({ access_token }: setCookieProps) => {
  cookies.set('access_token', access_token, {
    path: '/',
    domain: getDomain(),
    secure: true,
    sameSite: 'strict',
  });
};

export const getAccessToken = () => {
  return cookies.get('access_token');
};

export const removeAccessToken = () => {
  return cookies.remove('access_token', {
    path: '/',
    domain: getDomain(),
    secure: true,
    sameSite: 'strict',
  });
};
