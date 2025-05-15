export const Button = ({
    disabled,
    children,
    onClick,type,
    placeholder,
    
}) => {
    return (
        <div 
            onClick={onClick} 
        
            className={`px-32 ronded-2xl py-8 text-white rounded cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`}>
                <input type={type} placeholder={placeholder}></input>
            {children}
        </div>
    )
}