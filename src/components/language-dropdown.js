
import "/node_modules/flag-icons/css/flag-icons.min.css";
const Languageoption = (props) => {
    return (
        <div style={{}}>

            <select onChange={props.onChange} className="selectpicker" data-width="fit">
                <option value={'sw'} data-content='<span className="flag-icon flag-icon-us"></span>'>Swedish</option>
                <option value={'en'} data-content=''><span class="fi fi-gr fis"></span>English</option>
               
            </select>
           
        </div>

    )
}
export default Languageoption;