const ServiceCard = ({ icon, title, body }) => {
  return (
    <article className="bg-blue text-white px-6 py-4 text-center rounded-lg">
      {icon}
      <h4 className="py-3 font-semibold text-xl">{title}</h4>
      <p>{body}</p>
    </article>
  );
};
export default ServiceCard;
