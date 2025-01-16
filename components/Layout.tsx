export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="text-gray-900 dark:text-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
} 