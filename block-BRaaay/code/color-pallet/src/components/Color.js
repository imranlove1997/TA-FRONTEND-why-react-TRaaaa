import data from './colors.json';

function Colors() {
    return (
        Object.keys(data).map((key) => (
            <Color color = {key} colors = {data[key]}/>
        ))
    )
}

function Color(props) {
    console.log(props);
    return (
        <section className="flex">
            
            <div className="flex-80">
                <ul className="flex"> 
                    {
                        props.colors.map((color, i) => (
                            <li key={i} className="flex-18">
                                <div className="box1 w-full" style = {{backgroundColor: color}}></div>
                                <div className="flex jcb box2">
                                    <span>{i === 0 ? 50 : i * 100}</span>
                                    <span>{color}</span>
                                </div>
                            </li>
                        ))  
                    }
                </ul>
            </div>
            <aside className="flex-15">
                <h3>{props.color}</h3>
                <h5>{"Colors." + props.color}</h5>
            </aside>
        </section>
    )
}


export default Colors;