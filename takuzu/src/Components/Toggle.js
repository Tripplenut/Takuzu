import "./Toggle.css"

const Toggle = ({ label, onToggle }) => {
    const handleToggle = () => {
        // Call the onToggle function if it exists
        if (onToggle) {
          onToggle();
        }
      };

    return (
        <div className="container">
            {label}{""}
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox" name={label} id={label} onChange={handleToggle}/>
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default Toggle;