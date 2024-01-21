const SubscribeSection = () => {
  return (
    <section id="subscribe" className="py-16">
      <div className="container bg-blue text-white rounded-lg p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-x-3">
        <div>
          <small className="text-sm md:text-md">
            Learn more about investment strategies
          </small>
          <h2 className="text-2xl md:text-3xl pb-3 font-semibold capitalize mb-3">
            Subscribe to our newsletter
          </h2>
        </div>

        <div>
          <form className="bg-white rounded-full px-1 flex gap-x-2 items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-3 px-2 outline-none border-none text-blue rounded-full"
            />
            <button
              type="submit"
              className="bg-blue rounded-full px-3 py-2 hover:opacity-80 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SubscribeSection;
