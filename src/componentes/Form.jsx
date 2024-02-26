import '../assets/Form.css'

export default function Form() {
    return (
        <div className="container">
        <form className="form">
          <div className="descr">Contactanos!</div>
          
          <div className="input">
              <input required="" autoComplete="off" type="text" />
              <label htmlFor="name">Nombre</label>
          </div>
    
          <div className="input">
              <input required="" autoComplete="off" name="email" type="text" />
              <label htmlFor="email">E-mail</label>
          </div>
    
          <div className="input">
              <textarea required="" cols="30" rows="1" id="message"></textarea>
              <label htmlFor="message">Mensaje</label>
          </div>
          <button>Enviar mensaje →</button>
        </form>
    </div>
    )
}