
import propTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
Header.defaultProps = {
    title: 'Task tracker',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

//css in js
// const headingStyling = {
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header
