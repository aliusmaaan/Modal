import React from 'react';
import ReactDOM from 'react-dom';

require('./Modal.scss');

class Modal extends React.PureComponent {

    componentDidMount() {
        document.body.classList.add('oh');
    }

    componentWillUnmount() {
        document.body.classList.remove('oh');
    }

    render() {
        const { children, light, customClassName } = this.props;
        const modal = (
            <div className={`overlay ${light ? 'overlay-light':'overlay-dark'}`}>
                <div className={`modalPopup ${customClassName}`}>
                    {children}                   
                </div>
            </div>
        );

        return ReactDOM.createPortal(modal, document.body);
    };
};



export const Body = ({children}) => {
    return(
        <div className='modalPopup__body'>
            {children}
        </div>
    )
}

export const Button = ({text, cancel, clickHandler}) => {
    return(
        <button className={`modalPopup-${cancel?'cancel':'save'}`} onClick={clickHandler}>
                   {text}
        </button>
    )
}



export const Header = ({title, subTitle, cancelClickHandler}) => {
    return(
        <div className='modalPopup__header'>
            <div>
                <h1 className='modalPopup__header__title'>{title}</h1>
                <p className='modalPopup__header__subTitle'>{subTitle}</p>
            </div>
            <a className='modalPopup__header-close' onClick={cancelClickHandler}>
                ✖
            </a>
        </div>
    )
}

export const Footer = ({saveText='Save',saveClickHandler,cancelText='Cancel',cancelClickHandler}) => {
    return(
        <div className='modalPopup__footer'>
               <Button text={saveText} clickHandler={saveClickHandler} />
               <Button cancel text={cancelText}clickHandler={cancelClickHandler} />
        </div>
    )
}

Modal.Body = Body;
Modal.Header = Header;
Modal.Footer = Footer;
Modal.Button = Button;

export default Modal;

Modal.defaultProps = {
    light: false,
    customClassName: ''
}
Modal.Header.defaultProps = {
    customWrapperClass: '',
    title: 'Cutom Modal Header Title',
    subTitle: 'Cutom Modal Header subTitle',
    cancelClickHandler: ()=>{}
}
Modal.Header.defaultProps = {
    text: 'Save',
    cancel: false,
    clickHandler: ()=>{}
}