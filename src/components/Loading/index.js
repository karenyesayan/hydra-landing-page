const Loading = () => {
  return (
    <section className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-[#282c34]">
      <div className="flex justify-center">
        <div className="mx-[0.2rem] my-12 h-6 w-6 animate-[loader-bounce_0.6s_infinite_alternate] rounded-[50%] bg-[#8385aa]"></div>
        <div className="mx-[0.2rem] my-12 h-6 w-6 animate-[loader-bounce_0.6s_0.2s_infinite_alternate] rounded-[50%] bg-[#8385aa]"></div>
        <div className="mx-[0.2rem] my-12 h-6 w-6 animate-[loader-bounce_0.6s_0.4s_infinite_alternate] rounded-[50%] bg-[#8385aa]"></div>
      </div>
    </section>
  );
};

export default Loading;
