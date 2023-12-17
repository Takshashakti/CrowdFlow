interface ListIemProps {
    children: String;
  }
  
  const Label: React.FC<ListIemProps> = ({children}) => {
    return <div className='items-start font-bold truncate pb-3 pt-3'>{children}</div>;
  };
  
  export default Label;