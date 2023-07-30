import './Input.css'

const Input = (props) => {

    let inputElement = null

    const inputClass = ['input-element']

    if (props.invalid && props.used) {
        inputClass.push('invalid')
    }

    switch (props.inputType) {
        case 'input':
            inputElement = <input
                className={inputClass.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.change}
            />
            break;

        default:
            inputElement = <input
                className={inputClass.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.change}
            />
            break;
    }
    return (
        <div>{inputElement} </div>
    );
}

export default Input;