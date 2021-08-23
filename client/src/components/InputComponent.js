import './InputComponent.css'

const InputComponent = ({type, placeHolder, value, isRequired, onChangeFunction}) => {
    return <div className="input-field">
        <input
            type={type}
            placeholder={placeHolder}
            value={value}
            required={isRequired}
            onChange={(e) => onChangeFunction(e.target.value)}
        />
    </div>
}

export default InputComponent
