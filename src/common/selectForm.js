import React from 'react'
import ReactTooltip from 'react-tooltip';
const SelectForm = (
    {
        className,
        labelText,
        labelclassName,
        dataTip,
        inputclassName,
        labeltext,
        labelRequired,
        iconClassName,
        id = "",
        placeholder = "",
        name,
        value,
        optionValue,
        optionName,
        maxLength,
        required = false,
        readOnly = false,
        disabled = false,
        errorMessage = "",
        onChange,
        icon,
        selected,
        src,
        onClick,
        options
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
                <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-2 py-2 rounded-md w-full"
                    name={name}
                    // value={optionValue}
                >
                    {options && options.length
                        ? options.map((item, index) => (
                        <option value={`${item.optionValue}`} key={index}>
                            {item.label}
                        </option>
                        ))
                        : []}
                </select>
                </div>

                <span className='error text-red-500 text-sm font-medium'>
                    {errorMessage}
                </span>
            </div>
        </>
    )
}
export default SelectForm