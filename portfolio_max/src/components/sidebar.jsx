/* eslint-disable react/prop-types */

import "./sidebar.css";

function Sidebar({ data, activeId = 0, onChange }) {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list">
        {data.map((item) => {
          return (
            <li
              className="sidebar-list-item"
              key={"sidebar-list-item-" + item.id}
            >
              <button
                className={
                  activeId !== item.id
                    ? "sidebar-button-item "
                    : "sidebar-button-item highlight"
                }
                onClick={() => onChange(item.id)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
