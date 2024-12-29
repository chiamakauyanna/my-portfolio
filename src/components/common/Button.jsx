const Button = ({text, ...attributes}) => {
  return (
    <div>
      <button {...attributes} >
        {text}
      </button>
    </div>
  )
}

export default Button