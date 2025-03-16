import PropTypes from "prop-types";

const RenderName = (props) => {
    return <div>{props.name}</div>;
};

RenderName.propTypes = {
    name: PropTypes.string,     //If this prop is not a string, a warning will be displayed
};


//If you want to make sure a prop is being passed in, use isRequired like so:
// RenderName.propTypes = {
//     name: PropTypes.string.isRequired,
// }


//another cool thing we can do in combination with PropTypes is passing in default props:
// RenderName.defaultProps = {
//     name: 'Zach',
// };

export default RenderName;