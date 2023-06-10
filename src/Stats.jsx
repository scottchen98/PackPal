import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

export default function Stats({ items }) {
  const numOfPackedItems = items.reduce(
    (acc, curr) => (curr.packed ? acc + 1 : acc),
    0
  );
  const packedPercentage = Math.round((numOfPackedItems / items.length) * 100);

  return (
    <footer className="stats">
      <div className="statsBox">
        <div className="statsTotalItems">
          <p>Total Items</p>
          <em>{items.length}</em>
        </div>
        <div className="verticalLine"></div>
        <div className="statsPackedItems">
          <ProgressBar
            bgcolor="#FF5F9E"
            completed={!packedPercentage ? 0 : packedPercentage}
          />
          <p>
            {numOfPackedItems && numOfPackedItems === items.length ? (
              "All packed ✈️"
            ) : (
              <>
                <em>{numOfPackedItems}</em> items packed
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
