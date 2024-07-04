"use client";

import CountUp from "react-countup";

export default function Countup() {
  return (
    <div className="h-full w-full">
      <div className="">
        <div className="lg-gap-8 flex flex-col items-center gap-12 md:flex-row">
          <div className="w-full text-center md:w-2/5">
            <h3 className="text-2xl font-medium">
              <span className="text-blue-600">Join</span> in on something{" "}
              <span className="text-blue-600">big</span>.
            </h3>
          </div>
          <div className="grid w-full grid-cols-3">
            <div className="flex w-full flex-col items-center justify-between gap-2 text-center">
              <h3 className="text-4xl font-medium md:text-5xl text-blue-600">
                <CountUp
                  start={0}
                  end={1000}
                  duration={3}
                  enableScrollSpy={true}
                  scrollSpyDelay={2}
                  scrollSpyOnce={false}
                  suffix="+"
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h3>
              <h5 className="text-base font-medium">Students</h5>
              {/* <p>Over 5000 Jobs available</p> */}
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-2 text-center">
              <h3 className="text-4xl font-medium md:text-5xl text-blue-600">
                <CountUp
                  start={0}
                  end={10}
                  duration={3}
                  enableScrollSpy={true}
                  scrollSpyDelay={2}
                  scrollSpyOnce={false}
                  suffix="+"
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h3>
              <h5 className="text-base font-medium">Courses</h5>
              {/* <p>We have over 4m corp members actively serving</p> */}
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-2 text-center">
              <h3 className="text-4xl font-medium md:text-5xl text-blue-600">
                <CountUp
                  start={0}
                  end={20}
                  duration={3}
                  enableScrollSpy={true}
                  scrollSpyDelay={2}
                  scrollSpyOnce={false}
                  suffix="+"
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h3>
              <h5 className="text-base font-medium">Instructors</h5>
              {/* <p>More than 900 PPAs looking for corp members</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
