import React from 'react'
import Select from "react-select";
import { FloatingLabel, Form } from "react-bootstrap";
import Input from './Input';
import FieldError from './FieldError';

const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
];

const ContactInputField = ({ state, onBlurHandler, onFocusHandler, valueChangeHandler, genderHandler, capitaliseDataHandler }) => {

    const { phoneNumber, dateOfBirth, address, stateNew, pincode, gender, city } = state

    const customStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: '1rem',
            paddingLeft: '0.625rem',
            paddingBottom: '0.625rem',
            paddingTop: '0.625rem',
            width: '100%',
            color: '#1C1C1C',
            appearance: 'none',
            outline: 'none',
            boxShadow: 'none',
        })
    };

    return (
        <>
            <div className="mb-2">
                <Input
                    label="Phone Number"
                    type="number"
                    name="phoneNumber"
                    value={phoneNumber.value}
                    placeholder="Phone Number"
                    onChange={valueChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                />
                <FieldError touched={phoneNumber.touched} hasError={phoneNumber.hasError} error={phoneNumber.error} msgType={phoneNumber.msgType} />
            </div>

            <div className="mb-2">
                <Input
                    label="Date Of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={dateOfBirth.value}
                    placeholder="Date Of Birth"
                    onChange={valueChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                />
                <FieldError touched={dateOfBirth.touched} hasError={dateOfBirth.hasError} error={dateOfBirth.error} msgType={dateOfBirth.msgType} />
            </div>

            <FloatingLabel label="Address" className="mb-2">
                <Form.Control
                    as="textarea"
                    name="address"
                    value={address.value}
                    placeholder="Address"
                    onChange={valueChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    className="rounded-4"
                />
                <FieldError touched={address.touched} hasError={address.hasError} error={address.error} msgType={address.msgType} />
            </FloatingLabel>

            <div className="mb-2">
                <Input
                    label="State"
                    type="text"
                    name="stateNew"
                    value={stateNew.value}
                    placeholder="State"
                    onChange={capitaliseDataHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                />
                <FieldError touched={stateNew.touched} hasError={stateNew.hasError} error={stateNew.error} msgType={stateNew.msgType} />
            </div>

            <div className="mb-2">
                <Input
                    label="City"
                    type="text"
                    name="city"
                    value={city.value}
                    placeholder="City"
                    onChange={capitaliseDataHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                />
                <FieldError touched={city.touched} hasError={city.hasError} error={city.error} msgType={city.msgType} />
            </div>

            <div className="mb-2">
                <Input
                    label="Pincode"
                    type="number"
                    name="pincode"
                    value={pincode.value}
                    placeholder="Pincode"
                    onChange={valueChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                />
                <FieldError touched={pincode.touched} hasError={pincode.hasError} error={pincode.error} msgType={pincode.msgType} />
            </div>

            <Select
                styles={customStyles}
                placeholder="Select Gender"
                name="gender"
                options={genderOptions}
                value={genderOptions.find(option => option.value === gender)}
                onChange={genderHandler}
            />
        </>
    )
}

export default ContactInputField