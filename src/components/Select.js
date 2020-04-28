import React from 'react';

const Select = ({value, handleChange, options}) => (
        <div className="form-group">
            <label htmlFor='country'> Country </label>
            <select
              name='country'
              value={value}
              onChange={handleChange}
              >
              <option value="" disabled>Select Country</option>
              {options.map(option => (
                  <option
                    key={option}
                    value={option}
                    label={option}>{option}
                  </option>
                ))}         
            </select>
      </div>
)


export default Select;