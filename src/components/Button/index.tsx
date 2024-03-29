import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{
  children: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}> {
  render() {
    const { type = 'button', onClick } = this.props;

    return <button className={style.button} onClick={onClick}>{this.props.children}</button>;
  }
}

export default Button;
