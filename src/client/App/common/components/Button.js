import { css, StyleSheet } from 'aphrodite';
import Proptypes from 'prop-types';
import React from 'react';

const TYPES = {
   LINK: 'link',
   FILL: 'fill',
   NORMAL: 'normal'
};

function Button({ disabled, type, onClick, children, style }) {
   const commonAttr = {
      role: 'presentation'
   };
   if (!disabled) {
      commonAttr.onClick = onClick;
   }
   switch (type) {
      case TYPES.LINK:
         return (
            <div
               style={style}
               className={`${css(Styles.linkContainer)} ${disabled && css(Styles.disabled)}`}
            >
               <span className={css(Styles.linkText)} {...commonAttr}>
                  {children}
               </span>
            </div>
         );
      case TYPES.FILL:
         return (
            <div
               style={style}
               className={`${css(Styles.fillContainer)} ${disabled && css(Styles.disabled)}`}
               {...commonAttr}
            >
               <span className={css(Styles.fillText)}>{children}</span>
            </div>
         );
      default:
         return (
            <div
               style={style}
               className={`${css(Styles.normalContainer)} ${disabled && css(Styles.disabled)}`}
               {...commonAttr}
            >
               <span className={css(Styles.normalText)}>{children}</span>
            </div>
         );
   }
}

Button.propTypes = {
   disabled: Proptypes.bool,
   type: Proptypes.oneOf([TYPES.LINK, TYPES.FILL, TYPES.NORMAL]),
   onClick: Proptypes.func.isRequired,
   style: Proptypes.object
};
Button.defaultProps = {
   disabled: false,
   type: TYPES.NORMAL,
   style: {}
};

const Styles = StyleSheet.create({
   linkContainer: {
      padding: '5px 10px'
   },
   linkText: {
      color: '#3A6F8F',
      cursor: 'pointer',
      fontSize: '1em',
      fontWeight: 'bold'
   },
   fillContainer: {
      backgroundColor: '#3A6F8F',
      cursor: 'pointer',
      padding: '5px 10px'
   },
   fillText: {
      color: 'white',
      fontSize: '1em',
      fontWeight: 'bold'
   },
   normalContainer: {
      borderColor: '#3A6F8F',
      borderStyle: 'solid',
      borderWidth: 1,
      cursor: 'pointer',
      padding: '4px 5px'
   },
   normalText: {
      color: '#3A6F8F',
      fontSize: '1em',
      fontWeight: 'bold'
   },
   disabled: {
      cursor: 'default',
      opacity: 0.8,
      ':hover': 'none'
   }
});

export default Button;
