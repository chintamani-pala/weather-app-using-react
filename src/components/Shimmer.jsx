const Shimmer = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-white/18 p-5 w-96 relative z-10">
          <header className="h-8 bg-gray-300 dark:bg-gray-600 mb-4 rounded"></header>
          <section className="flex flex-col items-center mt-7">
            <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mb-4"></div>
            <div className="h-16 w-full bg-gray-300 dark:bg-gray-600 mb-4 rounded"></div>
            <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-600 mb-4 rounded"></div>
            <div className="h-8 w-1/2 bg-gray-300 dark:bg-gray-600 mb-7 rounded"></div>
            <div className="flex w-full justify-between border-t border-gray-300 dark:border-gray-600 pt-4">
              <div className="flex flex-col items-center justify-center w-full py-4">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
              <div className="flex flex-col items-center justify-center w-full py-4 border-l border-gray-300 dark:border-gray-600">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  