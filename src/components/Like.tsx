import { useState } from "react";
import { AiFillLike, AiTwotoneLike } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <AiFillLike color="#4287f5" onClick={toggle} />;
  return <AiTwotoneLike onClick={toggle} />;
};

export default Like;
