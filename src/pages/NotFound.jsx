import { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    window.location.href = '/';
  }, []);
  return null;
}

export default NotFound;
