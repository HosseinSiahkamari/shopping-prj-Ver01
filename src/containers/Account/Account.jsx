import './Account.css'
import Input from '../../components/UI-element/Input/Input';
import { useState } from 'react';
import axios from 'axios';

const Account = (props) => {

    const [form, setForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name...'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            used: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Email...'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            used: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'password...'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            used: false
        },
    })
    const inputChangehandler = (event, inputElement) => {
        const updatedForm = { ...form }
        const updatedElement = { ...updatedForm[inputElement] }
        updatedElement.value = event.target.value
        updatedElement.valid = checkValidation(
            updatedElement.value,
            updatedElement.validation)
        updatedElement.used = true
        updatedForm[inputElement] = updatedElement
        setForm(updatedForm)

        console.log(updatedElement);
    }
    const checkValidation = (value, rules) => {
        let isValid = false
        if (rules.required) {
            isValid = value.trim() !== ''
        }
        return isValid
    }
    const elementArray = []

    for (let item in form) {
        elementArray.push({
            id: item,
            config: form[item]
        })

    }
    const formSubmitHandler = (event) => {
        event.preventDefault()
        const formData = {}
        for (let item in form) {
            formData[item] = form[item].value
            axios
                .post('https://shopping-prj-default-rtdb.firebaseio.com/orders/-NaOcuGPa-5d2q4cbYk0.json', formData)
                .then((response) => {
                    console.log(response);
                })
        }
    }



    return (
        <div className='account'>
            <h2>Account</h2>
            <form onSubmit={formSubmitHandler}>
                {elementArray.map((item) => {
                    return (<Input
                        key={item.id}
                        invalid={!item.config.valid}
                        used={item.config.used}
                        elementType={item.config.elementType}
                        elementConfig={item.config.elementConfig}
                        value={item.config.value}
                        change={(event) => inputChangehandler(event, item.id)}
                    />)
                })
                }
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
}

export default Account;