// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="blue-text" style={{ marginBottom: '20px' }}>
        <i className="material-icons" style={{ marginRight: '5px', marginTop: '5px'}} >
        {(touched && error) ? 'error_outline' : touched  ? (error ? 'error_outline' : 'check') :''}
        
        </i>{touched && error}
      </div>
    </div>
  );
};
