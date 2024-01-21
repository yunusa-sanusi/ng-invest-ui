const ChooseUsCard = ({ title, body }) => {
  return (
    <article>
      <h4 className="py-3 font-semibold text-xl">{title}</h4>
      <p>{body}</p>
    </article>
  );
};
export default ChooseUsCard;
