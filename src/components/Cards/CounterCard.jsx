import CountUp from "react-countup";

const Counter = ({ value, title, suffix }) => {
  return (
    <div className="flex flex-col gap-20 group">
      <div className="border-r border-white/20 flex flex-col items-center gap-1 group-last:border-0">
        <span className="mt-2 text-4xl lg:text-7xl font-semibold tracking-tight text-pretty text-accent-800 sm:text-5xl">
          <span className="sr-only">{value}</span>
          <CountUp
            end={value}
            enableScrollSpy
            scrollSpyDelay={100}
            scrollSpyOnce
          />
          <span className="text-main-blue">{suffix}</span>
        </span>
        <h2 className="mt-6 font-semibold text-xl/8 text-balance text-gray-900 text-main-black/80 text-center whitespace-nowrap uppercase">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Counter;
