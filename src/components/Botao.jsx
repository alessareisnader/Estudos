
import './botao.css';


function Botao({ type, legenda }) {
  return (
    <button className='button'
      style={
        type === "habilitado"
          ? { backgroundColor: "green",
           
           }
          : { backgroundColor: "gray" }
      }
      
    >
      {legenda}
    </button>
  );
}


export default Botao;