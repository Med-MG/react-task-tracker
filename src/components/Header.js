
import propTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log("Clicked");
    }
    return (
        <header>
            <h1>{title}</h1>
            <Button  onClick={onClick} color="green" text="add" />
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
