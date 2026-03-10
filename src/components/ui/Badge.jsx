// components/ui/Badge.jsx
export default function Badge({ type, children }) {
    const styles = {
      available: "bg-green-500 text-white",
      occupied: "bg-red-500 text-white",
      pending: "bg-yellow-500 text-white"
    };
  
    return (
      <span className={`px-3 py-1 text-xs rounded-full ${styles[type]}`}>
        {children}
      </span>
    );
  }