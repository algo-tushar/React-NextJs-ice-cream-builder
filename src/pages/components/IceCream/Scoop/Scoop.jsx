import classes from './Scoop.module.css'

const Scoop = ({scoop}) => {
  return (
    <div className={[classes.scoop, classes[scoop]].join(' ')}></div>
  )
}

export default Scoop
