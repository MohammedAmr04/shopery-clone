import React from "react";
import "./Faq.css";
const Faq: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div>
          <h2>Welcome, Let’s Talk About Our Ecobazar</h2>
          <div className="opened-item">
            <div>
                <h4>In elementum est a ante sodales iaculis.</h4>
                <div className="bg-gray-50 rounded"> + </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </>
  );
};

export default Faq;
