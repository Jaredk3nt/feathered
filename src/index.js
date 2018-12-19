import PropTypes from 'prop-types';
import feather from 'feather-icons';
import Parser from 'html-react-parser';

function Feather({
    icon,
    className,
    color,
    width,
    height,
    strokeWidth,
    linecap,
    linejoin,
    ...rest
}) {
    if (feather.icons[icon]) {
        return Parser(feather.icons[icon].toSvg({
            ...className && { class: className },
            ...color && { color },
            ...width && { width },
            ...height && { height },
            ...strokeWidth && { "stroke-width": strokeWidth },
            ...linecap && { "stroke-linecap": linecap },
            ...linejoin && { "stroke-linejoin": linejoin },
            ...rest
        }));
    }
    return null;
}

Feather.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number,
    linecap: PropTypes.string,
    linejoin: PropTypes.string,
}

export default Feather;