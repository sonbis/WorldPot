export default function Card({ children }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      {children}
    </div>
  );
} 