import React from 'react';
import classes from './Loader.module.less';

const Loader = () => {
  return (
    <div className={classes.loader__wrapper}>
      <div className={classes.loader}>Загрузка</div>
    </div>
  );
};

export default Loader;