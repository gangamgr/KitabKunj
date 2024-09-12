import React, { useState, useEffect } from "react";
// import One from '../Others/one'
// import Two from '../Others/two';
// import One from '../Others/one';

function New() {
  const [contactdata, setContactData] = useState<any>([]);

  const [activePage, setActivePage] = useState("one");
  console.log("acctive", activePage);

  const getContact = () => {
    setContactData([
      {
        // image
      },
    ]);
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      <div className="h-96 w-screen bg-red-300">New</div>
      <div className="flex flex-row gap-5">
        <button
          className="border px-4 py-2 bg-red-400"
          onClick={() => setActivePage("one")}
        >
          One
        </button>
        <button
          className="border px-4 py-2 bg-red-400"
          onClick={() => setActivePage("two")}
        >
          Two
        </button>
        <button
          className="border px-4 py-2 bg-red-400"
          onClick={() => setActivePage("three")}
        >
          Three
        </button>
        <button className="border px-4 py-2 bg-red-400">four</button>
      </div>
      {
        <>
          {/* activePage==="one"?<One contactdata={contactdata}/> */}
          {/* <Two getContact={getContact}/> */}
        </>
      }
    </div>
  );
}

export default New;
