import PropTypes from "prop-types";
export function ListRendering(props: any) {
  const listItems = props.items.map((fruit: any) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}

ListRendering.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

ListRendering.defaultProps = {
  items: [],
};
