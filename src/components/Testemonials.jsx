import { testimonials } from "../constants";

const Testemonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:6xl text-center my-10 lg:my-20 ">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testemonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testemonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 rounded-full border border-neutral-300"
                  src={testemonial.image}
                  alt={testemonial.user}
                />
                <div>
                  <h6>{testemonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testemonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testemonials;
