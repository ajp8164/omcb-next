import { ReactNode, useEffect, useState } from 'react';

const NoSSR = ({children, loading}: {children: ReactNode, loading?: ReactNode}) => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  return canRender ? children : loading;
}

export default NoSSR;
