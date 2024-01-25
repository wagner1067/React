import styles from './Button.module.css';

function Button(props) {
   return (
    <div className= {styles.btn} >
        <button>{props.text}</button>
    </div>
   )
}

export default Button