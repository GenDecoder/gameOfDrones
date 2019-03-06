import React, { useState } from 'react';

const FloatingsContext = React.createContext({});

// const useToggleFloating = () => {
//    const [isVisible, setIsVisible] = useState(false);
//    const toggle = () => setIsVisible(!isVisible);
//    return [isVisible, toggle];
// };
function Backdrop() {
   return <div key="floating-backdrop" />;
}
function Box({ children }) {
   return <div key="floating-box">{children}</div>;
}

function FloatingsProvider({ children }) {
   const [uiContent, setContent] = useState(null);
   const [uiBackdrop, setBackdrop] = useState(false);
   const [uiCloseOnBackdropClicked, setCloseOnBackDropClicked] = useState(false);
   // const [content, setContent] = useState(null);
   const [uiTargetRef, setTargetRef] = useState(null);
   const [uiPosition, setPosition] = useState('');

   console.log(uiCloseOnBackdropClicked, uiTargetRef, uiPosition);

   // const [showMenu, toggleMenu] = useToggleFloating();
   // const [showDropDown, toggleDropDown] = useToggleFloating();
   // const [showModal, toggleModal] = useToggleFloating();
   const open = ({ backdrop, closeOnBackdropClicked, content, targetRef, position }) => {
      console.log(closeOnBackdropClicked, targetRef, position);
      setBackdrop(backdrop);
      setContent(content);
   };
   const close = () => {
      setBackdrop(false);
      setCloseOnBackDropClicked(true);
      setContent(null);
      setTargetRef(null);
      setPosition('');
   };
   return (
      <FloatingsContext.Provider
         value={{
            close,
            open
         }}
      >
         {children}
         {uiContent && [
            uiBackdrop && <Backdrop uiCloseOnBackdropClicked />,
            <Box>{uiContent}</Box>
         ]}
      </FloatingsContext.Provider>
   );
}

export { FloatingsContext, FloatingsProvider };
