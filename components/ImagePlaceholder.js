export default function ImagePlaceholder({ number, text, className = '' }) {
  return (
    <div className={`bg-dark-card border-2 border-dashed border-dark-border flex flex-col items-center justify-center ${className}`}>
      <div className="text-center p-4">
        <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-3xl font-bold">{number}</span>
        </div>
        <p className="text-gray-400 text-sm">{text}</p>
      </div>
    </div>
  );
}
