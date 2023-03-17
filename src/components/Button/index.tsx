import {Text, Pressable} from 'react-native';
import React from 'react';
import styles, {colors} from './styles';
import {SvgProps} from 'react-native-svg';

type Props = {
  btnIcon?: React.FC<SvgProps>;
  variant?: 'primary' | 'secondary' | 'form';
  type?: 'fill' | 'outline';
  size?: 'small' | 'default' | 'large';
};

const Button = ({
  variant = 'primary',
  type = 'fill',
  size = 'large',
  btnIcon: Icon,
  ...props
}: Props) => {
  const style = styles(variant);
  const btnStyles = [style.btn];
  const textStyle = [style.btnText];

  if (size) {
    btnStyles.push(style[size]);
  }
  if (type) {
    btnStyles.push(style[type]);
    textStyle.push(style[`text_${type}`]);
  }

  return (
    <Pressable style={btnStyles} {...props}>
      {Icon && <Icon height={24} width={32} fill={colors[variant]} />}
      <Text style={textStyle}>Button</Text>
    </Pressable>
  );
};

export default Button;
