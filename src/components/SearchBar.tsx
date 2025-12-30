import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  size?: 'default' | 'large';
}

const SearchBar = ({ 
  placeholder = 'Search schemes, services...', 
  className = '',
  size = 'default'
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const sizeClasses = {
    default: 'h-12',
    large: 'h-14 md:h-16'
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground ${
          size === 'large' ? 'w-6 h-6' : 'w-5 h-5'
        }`} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${sizeClasses[size]} pl-12 pr-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
            size === 'large' ? 'text-lg' : 'text-base'
          }`}
        />
      </div>
      <button
        type="submit"
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity ${
          size === 'large' ? 'px-6 py-2 text-base' : 'px-4 py-1.5 text-sm'
        }`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
