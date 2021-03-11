
import propTypes from 'prop-types'
import Button from './Button'

const Header = ({title, ShowTaskForm, ShowAdd}) => {
    // const onClick = () => {
    //     console.log("Clicked");
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button  onClick={ShowTaskForm} color={!ShowAdd ? 'green' : 'red'}  text={!ShowAdd ? 'Add' : 'Close'} />
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
