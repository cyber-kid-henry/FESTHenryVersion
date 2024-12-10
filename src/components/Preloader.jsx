
export default function Preloader() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <img 
          src="/loading.gif" 
          alt="Loading..." 
          className="w-300 h-200" // Adjusted size to make the GIF larger
        />
      </div>
    );
  }