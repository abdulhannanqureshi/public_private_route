import React from 'react'
import ReactTooltip from 'react-tooltip';
const InputForms = (
    {
        className,
        onBlur,
        labelText,
        labelclassName,
        dataTip,
        inputclassName,
        labeltext,
        labelRequired,
        iconClassName,
        type = "text",
        id = "",
        placeholder = "",
        name,
        value,
        maxLength,
        required = false,
        readOnly = false,
        disabled = false,
        errorMessage = "",
        onChange,
        icon,
        selected,
        src,
        onClick
    }
) => {
    return (
        <>
            <div className='form-group w-full'>
            {
                labelText && labelText.length ? 
                <label className={labelclassName}>{labelText}<span className='required'>{labelRequired}</span></label>
                : null
            }
            <div className="input_group relative flex items-center modified w-full">
            <input type={type} name={name}
                value={value }
                onChange={onChange}
                onBlur={onBlur ? onBlur : ""}
                className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded w-full"
                placeholder={placeholder} />
                
                {
                    iconClassName ?
                        <span className='form-icon absolute right-2'>
                            <i className={iconClassName} onClick={onClick} data-tip={dataTip ? dataTip : null}></i>
                            <ReactTooltip />
                        </span>
                        : null
                }
                {
                    src ?
                        <span className='form-icon absolute right-2'>
                            <img src={src} />
                        </span>
                        : null
                }
            </div>
            
            <span className='error text-red-500 text-sm font-medium'>
                {errorMessage}
            </span>
            </div>

        </>
    )
}
export default InputForms