import React from 'react'

const Card = ({ title, description }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      width: "220px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      justifyContent:"center"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card