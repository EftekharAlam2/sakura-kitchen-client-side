import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex justify-center">
              <a
                // href="/pdf/faq.pdf"
                // download
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Download PDF
              </a>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Question 1: Tell us the differences between uncontrolled and
                  controlled components.
                </h3>
                <p>
                  <span className="font-semibold">Ans: </span>
                  In React, controlled components refer to components that have
                  their state and behavior controlled by the parent component.
                  Uncontrolled components refer to components that manage their
                  own state internally. <br /> The main differences between them
                  is direct DOM manipulations. Since uncontrolled components
                  manage their own state, they directly manipulate the DOM to
                  update their values, without involving the application's state
                  management. Controlled components can not do it. Also, as the
                  name suggests, uncontrolled components provide less control to
                  the developer. On the other hand, controlled components offer
                  more control to the developer. They allow for validation and
                  modification of the input before updating the application's
                  state. <br />
                  So, this is the differences between uncontrolled and
                  controlled components.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Question 2: How to validate React props using PropTypes
                </h3>
                <p>
                  <span className="font-semibold">Ans: </span>
                  To validate React props using PropTypes, we first need to
                  install PropTypes using "npm install prop-types" command and
                  then import PropTypes like import PropTypes from 'prop-types'.
                  After that need to define PropTypes. Finally, use the
                  Component with Validated Props. <br /> <br />
                  That's how we validate React props using PropTypes.
                  <br />
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Question 3: Tell us the difference between nodejs and express
                  js.
                </h3>
                <p>
                  <span className="font-semibold">Ans: </span>
                  Node.js and Express.js are both popular technologies used in
                  web development. Node.js is a server-side JavaScript runtime
                  environment, while Express.js is a web application framework
                  built on top of Node.js. <br />
                  The main difference between them is, Node.js is a server-side
                  JavaScript runtime environment that allows developers to build
                  server-side applications in JavaScript. It provides an
                  event-driven, non-blocking I/O model that makes it efficient
                  and scalable. While, Express.js is a web application framework
                  built on top of Node.js. It provides a set of tools and
                  libraries for building web applications, including middleware,
                  routing, and templating.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Question 4: What is a custom hook, and why will you create a
                  custom hook?
                </h3>
                <p>
                  <span className="font-semibold">Ans: </span>A custom Hook is a
                  JavaScript function whose name starts with 'use' and that may
                  call other Hooks. <br />
                  Custom Hooks offer the flexibility of sharing logic that
                  wasn't possible in React components before. That's why most
                  people nowadays use custom hook. It also enhances the
                  rendering speed of the code as a custom hook does not need to
                  be rendered again and again while rendering the whole code.
                  This is the reason, I will create a custom hook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
