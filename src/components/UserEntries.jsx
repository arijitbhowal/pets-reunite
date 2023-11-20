import React, { useEffect, useState } from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'; // Import Bootstrap icons
import './UserEntries.css'; // Import the CSS file
import { BsChevronUp, BsChevronDown, BsPencilFill, BsTrashFill } from 'react-icons/bs'; // Import Bootstrap icons

const UserEntries = ({ userId }) => {
  const [allUserEntries, setAllUserEntries] = useState([]);
  const [userEntries, setUserEntries] = useState([]);
  const [activeButton, setActiveButton] = useState('lost');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchUserEntries = async () => {
      try {
        const response = await fetch("/api/pets/maps");
        const allEntries = await response.json();

        const entries = allEntries.filter((entry) => entry.userId === userId);
        setAllUserEntries(entries);
        setUserEntries(entries.map((entry) => ({ ...entry, showMoreInfo: false })));
      } catch (error) {
        console.error('Error fetching user entries:', error);
      }
    };

    fetchUserEntries();
  }, [userId]);

  const toggleMoreInfo = (index) => {
    setUserEntries((prevEntries) =>
      prevEntries.map((entry, i) =>
        i === index ? { ...entry, showMoreInfo: !entry.showMoreInfo } : entry
      )
    );
  };

  const handleUpdate = (entryId) => {
    console.log(`Update entry with ID ${entryId}`);
  };

  const handleDelete = (entryId) => {
    console.log(`Delete entry with ID ${entryId}`);
  };

  const filterEntries = (status) => {
    setActiveButton(status);
    const filteredEntries = allUserEntries.filter((entry) => entry.petStatus.toLowerCase() === status);
    setUserEntries(filteredEntries);
  };

  const toggleExpand = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={`user-entries ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <h2 className='user-entries-toggle' onClick={toggleExpand}>
        My Entries {isExpanded ? <BsChevronUp /> : <BsChevronDown />}
      </h2>
      {isExpanded && (
        <div className="user-entries-container">
          <button
            className={`toggle-column ${activeButton === 'lost' ? 'active' : ''}`}
            onClick={() => filterEntries('lost')}
            disabled={activeButton === 'lost'}
          >
            Lost Pets
          </button>
          <button
            className={`toggle-column ${activeButton === 'found' ? 'active' : ''}`}
            onClick={() => filterEntries('found')}
            disabled={activeButton === 'found'}
          >
            Found Pets
          </button>
          <ul className="user-entries-list">
  {userEntries.length === 0 ? (
    <li>No entries found</li>
  ) : (
    userEntries.map((entry, index) => (
      <li key={index} className="user-entry-item">
        <p><strong>Pet Name:</strong> {entry.petName}</p>
        <p><strong>Type:</strong> {entry.type}</p>
        <button className="more-info-btn" onClick={() => toggleMoreInfo(index)}>
              {entry.showMoreInfo ? <BsArrowUp /> : <BsArrowDown />} {entry.showMoreInfo ? 'Less Info' : 'More Info'}
            </button>
            {entry.showMoreInfo && (
              <div className="more-info">
                <p><strong>Sex:</strong> {entry.sex}</p>
                <p><strong>Last Seen:</strong> {entry.lastSeenAdd}</p>
                <p><strong>Last Seen On:</strong> {entry.lastSeenDate.split('T')[0]}</p>
                <p><strong>Description:</strong> {entry.description}</p>
              </div>
            )}
  <div className="update-delete-btns">
    <button className="transparent-btn" onClick={() => handleUpdate(entry.id)}>
      <BsPencilFill />
    </button>
    <button className="danger-btn" onClick={() => handleDelete(entry.id)}>
      <BsTrashFill />
    </button>
  </div>
      </li>
    ))
  )}
</ul>
        </div>
      )}
    </div>
  );
};

export default UserEntries;
