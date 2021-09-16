import React, {useState, useEffect} from 'react';
import QAListEntry from './QAListEntry.jsx';

const QAList = (props) => {
  const sortByHelpfulness = (questions) => {

  };

  return (
    <div>
      {props.questions.results.map((question, index) => (<QAListEntry question={question} key={index} />))}
    </div>
  );
};

export default QAList;