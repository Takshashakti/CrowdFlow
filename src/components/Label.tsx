interface ListIemProps {
    children: String;
  }
  
  const Label: React.FC<ListIemProps> = ({children}) => {
    return <span className='items-start font-bold truncate '>{children}</span>;
  };
  
  export default Label;