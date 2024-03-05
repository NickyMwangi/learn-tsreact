import PropTypes from "prop-types";

export const Student = (std: any) => (
  <div className="student">
    <p>Name : {std.name}</p>
    <p>Age : {std.age}</p>
    <p>IsStudent : {std.isStudent ? "Yes" : "No"}</p>
  </div>
);

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Rose Muthoni",
  age: 23,
  isStudent: true,
};
