const Select = ({datas,label,fn}) => {
    return (
        <div>
            <h3>Seleccione {label}</h3>
            <select onChange={fn}>
                <option value="">Seleccione {label}</option>
                {
                    
                    datas.map((data) => {
                        return(
                            <option key={data.id+data.name} value={data.id}>{data.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select