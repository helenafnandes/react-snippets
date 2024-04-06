import { useState } from 'react';
import data from './data';
import './Accordion.css';

export default function Accordion() {
  // single selection
  const [selectedItem, setSelectedItem] = useState(null);

  // multiple selection
  const [multiSelection, setMultiSelection] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  function handleSingleSelection(currentId) {
    setSelectedItem(currentId === selectedItem ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    if (selectedItems.includes(currentId)) {
      // If currentId is already in selectedItems, remove it
      setSelectedItems(selectedItems.filter((id) => id !== currentId));
    } else {
      // If currentId is not in selectedItems, add it
      setSelectedItems([...selectedItems, currentId]);
    }
  }

  function clearSelectedItems() {
    setSelectedItem(null);
    setSelectedItems([]);
  }

  return (
    <div className="wrapper">
      <div>
        {multiSelection ? (
          <button
            onClick={() => {
              setMultiSelection(false);
              clearSelectedItems();
            }}
          >
            Turn on Single Selection
          </button>
        ) : (
          <button
            onClick={() => {
              setMultiSelection(true);
              clearSelectedItems();
            }}
          >
            Turn on MultiSelection
          </button>
        )}
      </div>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="Item"
              onClick={
                multiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              key={dataItem.id}
            >
              <div className="topic">
                <h3>{dataItem.topic}</h3>
                {selectedItem !== dataItem.id &&
                !selectedItems.includes(dataItem.id) ? (
                  <span>+</span>
                ) : null}
              </div>
              {selectedItem === dataItem.id ||
              selectedItems.includes(dataItem.id) ? (
                <div className="content">{dataItem.content}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
