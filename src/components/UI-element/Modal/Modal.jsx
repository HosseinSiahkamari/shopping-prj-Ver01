
import './Modal.css'
import Wrapper from '../../../hoc/wrapper';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {

    return (
        <Wrapper>
            <Backdrop click={props.click} show={props.show} />
            <div className="modal"
                style={{
                    transform: props.purchase ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.purchase ? '1' : '0',
                }}
            >{props.children} </div>

        </Wrapper>
    )

}

export default Modal;
