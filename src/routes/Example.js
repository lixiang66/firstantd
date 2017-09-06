import React from 'react';
import { connect } from 'dva';

const Example = ({ dispatch, example }) => {
  return (
    <div>
      {example}
    </div>
  );
};

// export default Example;
export default connect(({example})=>({example,}))(Example);