import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <>
      <div className="container mx-auto mb-4">
        <h1 className="text-primary text-4xl font-bold m-4">
          Questions and Answers
        </h1>
        <hr />
        <div className="border-solid border-2 border-primary rounded-xl p-5 m-4">
          <h3 className="text-2xl font-semibold">
            1. What are the different ways to manage a state in a React
            application?
          </h3>
          <p>
            When we talk about state in our applications, it’s important to be
            clear about what types of state actually matter. There are four main
            types of state you need to properly manage in your React apps:
          </p>
          <p>Four Kinds of React State to Manage:</p>
          <ul>
            <li>1. Local state</li>
            <li>2. Global state</li>
            <li>3. Server state</li>
            <li>4. URL state</li>
          </ul>
        </div>
        <div className="border-solid border-2 border-primary rounded-xl p-5 m-4">
          <h3 className="text-2xl font-semibold">
            2. How does prototypical inheritance work?
          </h3>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object. JavaScript is a
            prototype-based, Object Oriented programming language. After the ES6
            updates, JavaScript allowed for “prototypal inheritance”, meaning
            that objects and methods can be shared, extended, and copied.
            Sharing amid objects makes for easy inheritance of structure (data
            fields), behavior (functions / methods), and state (data values).
            JavaScript is the most common of the prototype-capable languages,
            and its capabilities are relatively unique. When used appropriately,
            prototypical inheritance in JavaScript is a powerful tool that can
            save hours of coding.
          </p>
        </div>
        <div className="border-solid border-2 border-primary rounded-xl p-5 m-4">
          <h3 className="text-2xl font-semibold">
            3. What is a unit test? Why should we write unit tests?
          </h3>
          <p>
            By TechTarget Contributor Unit testing is a software development
            process in which the smallest testable parts of an application,
            called units, are individually and independently scrutinized for
            proper operation. This testing methodology is done during the
            development process by the software developers and sometimes QA
            staff. The main objective of unit testing is to isolate written code
            to test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages. Unit testing is a
            component of test-driven development (TDD), a pragmatic methodology
            that takes a meticulous approach to building a product by means of
            continual testing and revision. This testing method is also the
            first level of software testing, which is performed before other
            testing methods such as integration testing. Unit tests are
            typically isolated to ensure a unit does not rely on any external
            code or functions. Testing can be done manually but is often
            automated.
          </p>
        </div>
        <div className="border-solid border-2 border-primary rounded-xl p-5 m-4">
          <h3 className="text-2xl font-semibold">
            4. React vs. Angular vs. Vue?
          </h3>
          <p>
            <ul>
              <li>
                <span className="text-xl font-bold">Angular vs React</span>{" "}
                <br />
                If the choice you’re making is based on Angular vs React alone,
                then you’ll simply need to consider the pros and cons discussed
                for those libraries in this post. But overall, keep in mind that
                both libraries can be used for mobile and web apps, while
                Angular is generally better for more complex apps that are
                enterprise-ready. React often requires extra modules and
                components, which keeps the core library small, but means
                there’s extra work involved when incorporating outside tools.
                Angular, on the other hand, is more of a full-fledged solution
                that doesn’t require extras like React often does, though it
                does have a steeper learning curve for its core compared to
                React. React is more suitable for intermediate to advanced
                JavaScript developers who are familiar with concepts from ES6
                and up, whilewhile Angular favors those same developers who are
                also familiar with TypeScript.
              </li>
              <li>
                <span className="text-xl font-bold">React vs Vue</span> <br />
                The choice between React vs Vue is often debated and it’s not an
                easy one. Vue has a vibrant and ever-growing community and has
                taken over popularity vs. React in many respects. React
                developers are still churning out lots of new components and
                extras, so there’s no sign that React is on the decline either.
                Vue is generally more suited to smaller, less complex apps and
                is easier to learn from scratch compared to React. Vue can be
                easier to integrate into new or existing projects and many feel
                its use of HTML templates along with JSX is an advantage.
                Overall, Vue might be the best choice if you’re a newer
                developer and not as familiar with advanced JavaScript concepts,
                while React is quite well suited for experienced programmers and
                developers who have worked with object-oriented JavaScript,
                functional JavaScript, and similar concepts.
              </li>
              <li>
                <span className="text-xl font-bold">Angular vs Vue</span> <br />
                In most cases, you probably wouldn’t be deciding between only
                Angular and Vue. They are vastly different libraries with very
                different feature sets and learning curves. Vue is the clear
                choice for less experienced developers, and Angular would be
                preferred for those working on larger apps. A large library like
                Angular would require more diligence in keeping up with what’s
                new, while Vue would be less demanding in this regard and the
                fact that the two most recent major releases of Vue are in
                separate repositories helps. It should also be noted that Vue
                was created by a developer who formerly worked on Angular for
                Google, so that’s another thing to keep in mind, though that
                wouldn’t have a huge impact on your decision.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
