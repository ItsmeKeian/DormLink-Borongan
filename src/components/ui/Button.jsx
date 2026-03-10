// components/ui/Button.jsx
export default function Button({ children, variant = "primary", className="", ...props }) {
    const base = "px-5 py-2 rounded-xl font-semibold transition duration-200";
    
    const styles = {
      primary: "bg-blue-900 text-white hover:bg-blue-800",
      secondary: "bg-blue-600 text-white hover:bg-blue-500",
      danger: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-gray-300 text-gray-800 hover:bg-gray-100"
    };
  
    return (
      <button className={`${base} ${styles[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  }