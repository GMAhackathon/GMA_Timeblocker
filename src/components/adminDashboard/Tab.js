import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { resetForm } from '../../../../actions/adminDashboardActions/students/studentsActions';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserGraduate, faMap, faUserFriends} from '@fortawesome/free-solid-svg-icons';

const TabWrap = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  vertical-alignment: center; 
  // color: #269FB0;
  // color: #B4B1B5;
  color: #89878a;
  margin: 0 0 20px 0;
  font-size: 18px;
`

function Tab(props) {
  // const [icon, setIcon] = useState(faUserGraduate)

  useEffect(() => {
    // if (props.tab.key === 'Students') {
    //   setIcon(faUserGraduate);
    // } else if (props.tab.key === 'Courses') {
    //   setIcon(faMap);
    // } else if (props.tab.key === 'Staff') {
    //   setIcon(faUserFriends);
    // }
  }, [])

  const handleClick = (tab) => {
    props.setSelected(tab)
    props.setNavigation(tab)
    // props.resetForm();
  }
  return (
    <div style={{cursor: "pointer"}} onClick={() => handleClick(props.tab.key)}>
    <TabWrap style={{backgroundColor: `${props.tab.key === props.selected ? "#027B2B" : "transparent"}`, 
                     color: `${props.tab.key === props.selected ? "white" : "#89878a"}`,
                     display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {/* <FontAwesomeIcon icon={icon} size='lg' color='gray' style={{marginRight: '10px', 
                       color: `${props.tab.key.toLowerCase() === props.selected ? "#269FB0" : "#89878a"}`,
                       height: '15px', width: '15px'}}/> */}
      {props.tab.key}
    </TabWrap>
    </div>
  )
}

export default Tab;