import React, { useState } from "react";
import "./App.css";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];

export default function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleDropdown = () => setOpen(!open);

  const handleAllChange = (e) => {
    if (e.target.checked) {
      setSelected(pages);
    } else {
      setSelected([]);
    }
  };

  const handlePageChange = (page) => {
    if (selected.includes(page)) {
      setSelected(selected.filter((p) => p !== page));
    } else {
      setSelected([...selected, page]);
    }
  };

  const isAllChecked = selected.length === pages.length;

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>
          {isAllChecked
            ? "All pages"
            : selected.length > 0
            ? selected.join(", ")
            : "Select pages"}
        </span>
        <span className="arrow">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-content-wrapper">
            <div className="dropdown-content">
              {/* All Pages */}
              <label className="label-with-checkbox all-pages-label">
                <span>All pages</span>
                <input
                  type="checkbox"
                  checked={isAllChecked}
                  onChange={handleAllChange}
                />
              </label>
              <div className="divider" />

              {/* Page list */}
              <div className="pages-list">
                {pages.map((page) => (
                  <label key={page} className="label-with-checkbox">
                    <span>{page}</span>
                    <input
                      type="checkbox"
                      checked={selected.includes(page)}
                      onChange={() => handlePageChange(page)}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          <div className="divider" />
          
          <div className="done-btn-container">
            <button className="done-btn" onClick={() => setOpen(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}