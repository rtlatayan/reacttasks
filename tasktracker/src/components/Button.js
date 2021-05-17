import PropTypes from 'prop-types'

const Button = (props) => {

    return (
        <button
            onClick={props.onClick}
            style={{backgroundColor: props.color}}
            className='btn'>{props.text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'button'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
