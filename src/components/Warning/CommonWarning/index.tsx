import React, { useEffect, useMemo, useState } from 'react';

import { P } from './style';

interface Props {
  // eslint-disable-next-line no-unused-vars
  validator: (value: string) => number;
  value: string;
  target: number;
  text: string;
  isDisappear?: boolean;
}

const DURATION = 3000;

function CommonWarning({ validator, value, target, text, isDisappear }: Props) {
  const [isExist, setIsExist] = useState(false);
  const warningText = useMemo(() => {
    return (validator(value) & target) === 0 ? '' : text;
  }, [value]);

  useEffect(() => {
    if (value) {
      if (!isExist) {
        setIsExist(true);
      }
      if (isDisappear) {
        // eslint-disable-next-line no-undef
        setTimeout(() => {
          setIsExist(false);
        }, DURATION);
      }
    }
  }, [value]);

  return <>{isExist && <P>{warningText}</P>}</>;
}

CommonWarning.defaultProps = {
  isDisappear: false,
};

export default CommonWarning;
