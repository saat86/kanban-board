import React from 'react';
import Column from './Column';

export default function Body({ tickets, users, grouping, ordering }) {
  const groupingOption = grouping;
  const sortOption = ordering;


  const getPriorityWord = (priority) => {
    if (priority === 4) {
      return 'Urgent';
    } else if (priority === 3) {
      return 'High';
    } else if (priority === 2) {
      return 'Medium';
    } else if (priority === 1) {
      return 'Low';
    } else if (priority === 0) {
      return 'No priority';
    } else {
      return 'Unknown priority';
    }
  };
  const groupTickets = () => {
    if (groupingOption === 'Status') {
      // Group by status
      return tickets.reduce((grouped, ticket) => {
        const status = ticket.status;
        grouped[status] = grouped[status] || [];
        grouped[status].push(ticket);
        return grouped;
      }, {});
    } else if (groupingOption === 'User') {
      // Group by user
      return tickets.reduce((grouped, ticket) => {
        const userId = ticket.userId;
        const user = users.find((user) => user.id === userId);
        const userName = user ? user.name : 'Unassigned';
        grouped[userName] = grouped[userName] || [];
        grouped[userName].push(ticket);
        return grouped;
      }, {});
    } else if (groupingOption === 'Priority') {
      // Group by priority
      return tickets.reduce((grouped, ticket) => {
        const priority = getPriorityWord(ticket.priority);
        grouped[priority] = grouped[priority] || [];
        grouped[priority].push(ticket);
        return grouped;
      }, {});
    } else {
      // Default case
      return { defaultGroup: tickets };
    }
    
  };

  const groupedTickets = groupTickets();
  console.log( groupedTickets);
  const sortTickets = () => {
    // Sort the tickets within the selected group
    return Object.entries(groupedTickets).reduce((sortedGroups, [groupName, groupTickets]) => {
      // Sort each group individually
      const sortedGroup = groupTickets.sort((a, b) => {
        if (sortOption === 'Priority') {
          return b.priority - a.priority;
        } else if (sortOption === 'Title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  
      // Add the sorted group to the result
      sortedGroups[groupName] = sortedGroup;
      return sortedGroups;
    }, {});
  };
  
  const sortedTickets = sortTickets();



  return (
    <div className='body-container'>
     {Object.entries(sortedTickets).map(([group, sortedGroupTickets]) => (
  <Column key={group} title={group} tickets={sortedGroupTickets} />
))}
    </div>
  );
}
