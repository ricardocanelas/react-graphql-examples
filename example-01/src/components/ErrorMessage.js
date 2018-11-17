import React from 'react'

const ErrorMessage = ({ error }) => (
   <div className="ErrorMessage">
      {error.toString()}
   </div>
)

export default ErrorMessage;
