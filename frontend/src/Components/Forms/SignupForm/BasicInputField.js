import React, { useState } from 'react'
import { InputGroup, Button } from "react-bootstrap";
import FieldError from '../Units/FieldError';
import Icon from '../../UI/Icon';
import Input from '../Units/Input';
import { useSignupContext } from '../../../context/SignupContext';
import { userTypeOptions } from '../../Services/appdata';


const BasicInputField = () => {

    const { name, email, password, confirmPassword, userType, onBlurHandler, onFocusHandler, valueChangeHandler, userTypeHandler } = useSignupContext();

    const [seePassword, setSeePassword] = useState("password");

    const togglePasswordVisibility = (e) => {
        if (seePassword === "password") {
            setSeePassword("text");
        } else {
            setSeePassword("password");
        }
    }

    const inputFields = [
        {
            label: "Name",
            type: "text",
            name: "name",
            value: name.value,
            placeholder: 'Name',
            handler: valueChangeHandler,
            touched: name.touched,
            hasError: name.hasError,
            error: name.error,
            msgType: name.msgType
        },
        {
            label: "Email",
            type: "email",
            name: "email",
            value: email.value,
            placeholder: 'Email',
            handler: valueChangeHandler,
            touched: email.touched,
            hasError: email.hasError,
            error: email.error,
            msgType: email.msgType
        },
        {
            label: "Password",
            type: seePassword,
            name: "password",
            value: password.value,
            placeholder: 'Password',
            handler: valueChangeHandler,
            touched: password.touched,
            hasError: password.hasError,
            error: password.error,
            msgType: password.msgType,
            className: 'rounded-start-4 rounded-end-0 outline-end-0 border-end-0',
            ariaDescribedBy: 'basic-addon1',
            togglePasswordVisibility: togglePasswordVisibility
        },
        {
            label: "Confirm Password",
            type: seePassword,
            name: "confirmPassword",
            value: confirmPassword.value,
            placeholder: 'Confirm Password',
            handler: valueChangeHandler,
            touched: confirmPassword.touched,
            hasError: confirmPassword.hasError,
            error: confirmPassword.error,
            msgType: confirmPassword.msgType,
        },
    ]

    return (
        <>
            {inputFields.map(field => (
                <div key={field.name} className="mb-2">
                    <InputGroup>
                        <Input
                            as={field.as}
                            label={field.label}
                            type={field.type}
                            name={field.name}
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={field.handler || valueChangeHandler}
                            onFocus={onFocusHandler}
                            onBlur={onBlurHandler}
                            className={field.className}
                            aria-describedby={field.ariaDescribedBy}
                        />
                        {
                            field.name === "password" && (
                                <Button
                                    className={`rounded-end-4 bg-white border-start-0`}
                                    style={{ borderColor: 'lightgrey' }}
                                    id="button-addon1"
                                    onClick={field.togglePasswordVisibility}
                                >
                                    {seePassword === 'password' ? (
                                        <Icon name="EyeOff" color="#1c1c1c" size="18" />
                                    ) : (
                                        <Icon name="Eye" color="#1c1c1c" size="18" />
                                    )}
                                </Button>
                            )
                        }
                    </InputGroup>
                    <FieldError
                        touched={field.touched}
                        hasError={field.hasError}
                        error={field.error}
                        msgType={field.msgType}
                    />
                </div>
            ))}

            <select
                className="custom-select"
                id="userType"
                name="userType"
                value={userType.value}
                onChange={userTypeHandler}
            >
                <option value="" >Select Account Type</option>
                {userTypeOptions.map(option => (
                    <option key={option.value} value={option.value} className="custom-option">
                        {option.label}
                    </option>
                ))}
            </select>
            {/* 
            
            if userType selected as teacher 2 & student 3 then
                show select field and select organizations (only show verified organizations)
            after selecting organization
                show select field and select departments
            
            SEND Only Department in form data

             */}
        </>
    )
}

export default BasicInputField