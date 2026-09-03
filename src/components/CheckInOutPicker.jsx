function CheckInOutPicker(){
    return(
 <>
 
       <div className="campo">
          <label htmlFor="checkin">Check-in:</label>
          <input type="date" id="checkin" />
        </div>

        <div className="campo">
          <label htmlFor="checkout">Check-out:</label>
          <input type="date" id="checkout" />
        </div>
       
       
 </>
    )
}

export default CheckInOutPicker