import React from 'react';
import KBTitle from "./KBTitle";
import {translated} from "../Utils/Localization";

function Top10(props) {
  return (
    <KBTitle style={{}}>
      {translated("PersonalPage.Top10")}
    </KBTitle>
  )
}

export default Top10;