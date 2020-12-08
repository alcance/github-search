import React from 'react';

const styles = {
  background: '#f1fffd',
  padding: '15px',
  margin: '15px',
  border: '4px solid #afd9ff',
}

const ListItem = ({ issue }) => {
  return (
    <>
      <li style={styles} key={issue.id}>{issue.title}</li>
    </>
  )
}

export default ListItem;
