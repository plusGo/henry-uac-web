import React, { useEffect } from 'react';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

const PageProgress = () => {
  NProgress.start();
  useEffect(() => {
    return () => NProgress.done();
  });
  return <></>;
};

export default PageProgress;
