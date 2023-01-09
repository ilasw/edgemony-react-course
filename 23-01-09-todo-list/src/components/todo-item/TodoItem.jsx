export function TodoItem(props){
    const {children, isDone, changeStatus, index} = props;
  
    const clickHandler = () => {
        changeStatus(index, isDone)
    }
  
    return <li>
      { isDone ? '✅' : '❌' } - 
      <span>{children}</span>
      <button onClick={clickHandler}>{ isDone ? 'Un-Done': 'Done'}</button>
    </li>
  }