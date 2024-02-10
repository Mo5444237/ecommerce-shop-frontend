import { Link, useNavigate, useSearchParams } from "react-router-dom";

const PaginationButton = ({ moveTo, text, ...props }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const moveToHandler = (moveTo) => {
    params.set("page", moveTo);
    navigate(`/shop?${params.toString()}`);
  };

  return (
    <button className={props.className}>
      <Link onClick={moveToHandler.bind(null, moveTo)}>
        {text}
      </Link>
    </button>
  );
};

export default PaginationButton;
