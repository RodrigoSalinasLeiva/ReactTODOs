import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }){
    return(
        <button className="CreateTodoButton"
            onClick={
                () => {
                    setOpenModal(state => !state); //función arraw
                }
            }
        
        >+</button>
    );
}

export { CreateTodoButton };