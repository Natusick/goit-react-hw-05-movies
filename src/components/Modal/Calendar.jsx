import React, { Component } from "react";
import Datetime from 'react-datetime';



export class Calendar extends React.Component {
    render(){
        return <Datetime renderInput={ this.renderInput } />;
    }
    renderInput( props){
   
    return (
        <div>
            <input {...props} />            
        </div>
    );
}
    //     const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//       <button onClick={onClick} ref={ref}>
//         <RiCalendar2Line 
//          sx={{
//             width: 44,
//             height: 44,
//           }}
//         />
//     </button>
//   ));

//   return (
//     <div>
//       <Datetime
//         dateFormat="dd.MM.yyyy"
//         selected={startDate}
//         onChange={date => {
//           setStartDate(date);
//         }}
//         customInput={<ExampleCustomInput />}
//       />
//     </div>
//   );
};

export default Calendar;
