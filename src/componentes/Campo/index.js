import './Campo.css'

const CampoTexto = ({ type='text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    
    const placeholderModificado = `${placeholder}...`

    const aoDigitar = (e) => {
        aoAlterado(e.target.value)
    }   

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitar} 
                required={obrigatorio} 
                placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto