import { useState } from "react";
import question from "../static/svg/question.svg";
import first from "../static/img/2.jpg";
import arrow from "../static/svg/arrow-right.svg";
import second from "../static/img/5.jpg";
import third from "../static/img/6.jpg";
import pic from "../static/img/7.jpg";
import data from "../data.json";
import Star from "./components/Star";
import heart from "../static/svg/heart.svg";
import next from "../static/svg/arrow-next.svg";
function App() {
  const [count, setCount] = useState(0);
  console.log(data);
  return (
    <div className="App">
      <div className="container flex flex-col gap-14 p-4">
        <div className="header">
          <h1 className="text-[55px] leading-none font-bold text-black">
            {data.courses[0].title}
          </h1>
          <div>
            <span className="flex p-2 font-bold gap-2 items-center text-black25">
              {data.courses[0].type}{" "}
              <img
                className="w-4 h-4 stroke-black25"
                src={question}
                alt="que"
              />
            </span>
          </div>
        </div>
        <div className="main flex gap-10">
          <div className="leftside flex flex-col gap-10 w-2/5">
            <span className="text-black75 text-[19px] font-medium">
              {data.courses[0].discription}
            </span>
            <div className="about flex gap-4 flex-col">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-[50px]"
                  src={pic}
                  alt=""
                  srcset=""
                />
                <p className="px-4 font-bold text-lg text-blue-text">
                  {data.teacher_name}
                </p>
              </div>
              <div className="review text-black25 ">
                <div className="flex items-center gap-2">
                  <Star />
                  <span>
                    {data.total_reviews} total reeviews for tis teacher
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star />
                  <span>
                    {data.courses[0].course_reviews.length} reviews for this
                    class
                  </span>
                </div>
              </div>
              <div className="text-black75 text-[19px] font-semibold">
                Completed by {data.courses[0].completed_by} learners
              </div>
            </div>
            <div className="bottom flex gap-9 items-center">
              <div className="btn flex items-center gap-1 rounded-[50px] justify-center text-light-blue-text bg-blue-btn w-[250px] h-12">
                <span className="text-lg font-semibold">
                  See Class Schedule
                </span>
                <img className="w-4" src={arrow} alt="" srcset="" />
              </div>
              <div className="flex  items-center gap-1">
                <img className="w-5 h-5" src={heart} alt="" srcset="" />
                <p className="text-darkblue text-[18px] font-bold">Save</p>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-5 h-5" src={next} alt="" srcset="" />
                <p className="text-darkblue text-[18px] font-bold">Share</p>
              </div>
            </div>
          </div>
          <div className="rightside rounded-t-2xl px-0 py-0 my-2 flex gap-1 w-3/5">
            <div className="">
              <img
                className="h-96 w-[1700px] rounded-tl-2xl"
                src={first}
                alt=""
                srcset=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <img
                className="w-[1700px] h-[190px] rounded-tr-2xl"
                src={second}
                alt=""
                srcset=""
              />
              <img
                className="w-[1700px] h-[190px]"
                src={third}
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
