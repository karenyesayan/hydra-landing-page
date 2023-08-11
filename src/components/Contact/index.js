const Contact = () => {
  return (
    <section>
      <div className="container mt-[-159px] sm:mt-[-128px]">
        <div className="isolate rounded-[40px] bg-[radial-gradient(50%_50.00%_at_50%_50.00%,_#403A5F_0%,_#211E2E_100%)] px-6 pb-[65px] pt-[45px] shadow-white-aluminium sm:rounded-[100px] sm:pb-[84px] sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-2xl sm:text-4xl">
            <h2 className="font-bold">JOIN HYDRA</h2>
            <hr className="via-34.8% via-68.7% mx-auto mt-[21px] h-px w-[116.5px] rounded border-0 bg-gradient-to-r from-[#343045] via-[#8176AF] via-[#C0B7E8] to-[#343045] to-100% max-[539px]:bg-[#8176AF] min-[540px]:mt-[30px] min-[540px]:w-[414px]"></hr>
            <p className="mt-[19px] font-light leading-8 sm:mt-[21px]">
              Let’s Build Your VR Experience
            </p>
          </div>
          <form
            action="#"
            method="POST"
            className="mx-auto mt-9 max-w-[1058px] sm:mt-[65px]"
          >
            <div
              className="grid grid-cols-1 gap-x-[11px] gap-y-[12px] sm:grid-cols-2 sm:gap-y-[23px]"
              id="contact-us"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="sr-only block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    pattern="^[\p{Letter}\p{Mark}]+$"
                    minLength="2"
                    autoComplete="given-name"
                    placeholder="First Name"
                    required
                    onInput={(event) =>
                      event.target.validity.patternMismatch
                        ? event.target.setCustomValidity(
                            `This field can only contain letters`
                          )
                        : event.target.setCustomValidity("")
                    }
                    className="block w-full rounded-[40px] border-2 border-white bg-transparent px-3.5 py-[0.932rem] indent-3.5 text-sm font-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:border-[#8176AF] focus:ring-2 focus:ring-inset focus:ring-[#8176AF] sm:py-[1.4rem] sm:indent-7 sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="sr-only block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    pattern="^[\p{Letter}\p{Mark}]+$"
                    minLength="2"
                    autoComplete="family-name"
                    placeholder="Last Name"
                    onInput={(event) =>
                      event.target.validity.patternMismatch
                        ? event.target.setCustomValidity(
                            `This field can only contain letters`
                          )
                        : event.target.setCustomValidity("")
                    }
                    className="block w-full rounded-[40px] border-2 border-white bg-transparent px-3.5 py-[0.932rem] indent-3.5 text-sm font-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:border-[#8176AF] focus:ring-2 focus:ring-inset focus:ring-[#8176AF] sm:py-[1.4rem] sm:indent-7 sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="sr-only block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    className="font-normalshadow-sm block w-full rounded-[40px] border-2 border-white bg-transparent px-3.5 py-[0.932rem] indent-3.5 text-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:border-[#8176AF] focus:ring-2 focus:ring-inset focus:ring-[#8176AF] sm:py-[1.4rem] sm:indent-7 sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone-number"
                  className="sr-only block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    pattern="^(?:[+\d].*\d|\d)$"
                    autoComplete="tel"
                    placeholder="Phone Number"
                    onInput={(event) =>
                      event.target.validity.patternMismatch
                        ? event.target.setCustomValidity(
                            `Field Phone Number must be Numeric`
                          )
                        : event.target.setCustomValidity("")
                    }
                    className="block w-full rounded-[40px] border-2 border-white bg-transparent px-3.5 py-[0.932rem] indent-3.5 text-sm font-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:border-[#8176AF] focus:ring-2 focus:ring-inset focus:ring-[#8176AF] sm:py-[1.4rem] sm:indent-7 sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="sr-only block text-sm font-semibold leading-6 text-gray-900"
                >
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="off"
                    placeholder="Subject"
                    className="block w-full rounded-[40px] border-2 border-white bg-transparent px-3.5 py-[0.932rem] indent-3.5 text-sm font-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:border-[#8176AF] focus:ring-2 focus:ring-inset focus:ring-[#8176AF] sm:py-[1.4rem] sm:indent-7 sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="sr-only block text-sm font-semibold leading-6 text-gray-900"
                >
                  Tell Us Something...
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-[40px] border-2 border-white bg-transparent px-3.5 py-[4.244rem] indent-3.5 text-sm font-normal text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:border-[#8176AF] focus:ring-2 focus:ring-inset focus:ring-[#8176AF] sm:py-[3.463rem] sm:indent-7 sm:leading-6"
                    defaultValue={"Tell Us Something..."}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[51px]">
              <button
                type="submit"
                className="btn-primary mx-auto h-12 w-full min-[540px]:w-[214px]"
              >
                SEND TO HYDRA
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
