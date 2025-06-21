type Props = {
    
    title: string;
    description: string;
    onClick: () => void;
  };
  
  export default function ServiceCard({  title, description, onClick }: Props) {
    return (
      <div className="border border-gray-300 rounded-xl p-2 shadow-md hover:shadow-lg transition-shadow duration-300">
        
        <h3 className="text-2xl font-bold mb-1 text-center">{title}</h3>
        <p className="mb-3 text-white-700">{description}</p>
        <button
          onClick={onClick}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all"
        >
          See More
        </button>
      </div>
    );
  }