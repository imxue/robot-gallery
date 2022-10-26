import style from './Robot.module.css';

interface RobotProps {
  name: string;
  id: string;
}

const Robot: React.FC<RobotProps> = ({ id, name }) => {
  return (
    <div className={style.box}>
      <img
        className={style.imgSize}
        src={`https://robohash.org/${id}`}
        alt=""
      />
      <span>{name}</span>
    </div>
  );
};

export default Robot;
