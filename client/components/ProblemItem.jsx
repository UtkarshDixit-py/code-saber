import PropTypes from 'prop-types'
function ProblemItem({id,title,level,acceptanceRate}) {
  return (
    <li>
        <h3>{id}{title}</h3>
        <p>{level}</p>
        <p>{acceptanceRate}</p>
    </li>
  )
}

ProblemItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    acceptanceRate: PropTypes.string.isRequired
}


export default ProblemItem