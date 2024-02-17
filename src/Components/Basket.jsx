import React, { useState } from 'react'
import "./Basket.css";
import { NavLink } from 'react-router-dom';

const Basket = ({totalAmounts}) => {
  const [showChangeAddress,setShowChangeAddress]=useState(false);
  const [selectedCountry,setSelectedCountry]=useState('India');
  const [selectedState,setSelectedState]=useState('Uttar Pradesh');
  const [city,setCity]=useState('');
  const [PinCode,setPinCode]=useState('');
  
  
  const handleCountryChange=(event)=>{
    setSelectedCountry(event.target.value);
    setSelectedState('');
    setCity('');
    setPinCode('');
  }
  const handleStateChange=(event)=>{
    setSelectedState(event.target.value);
  }
  const handleCityChange=(event)=>{
    setCity(event.target.value);
  }
  const  handlePinCodeChange=(event)=>{
    setPinCode(event.target.value);
  }
  const handleToggleChnageAddress=()=>{
    setShowChangeAddress(!showChangeAddress);
  }
    const totalFlatRate=totalAmounts-40;
  
  
  return (
    <>
    <div className='card'>
    <div className='card-title'>
        <h2 className='title'>Basket totals</h2>
        <div className='subtotal-div'>
        <h1 className='subtotal-h1'>Subtotal</h1>
        <span className='subtotal-span'>RS:{totalAmounts}</span>
        </div>
        
    </div>
    <hr className='line-hr'/>
    <div className='card-body'>
    <h2 className='shipping-h2'>
    Shipping
    </h2>
    <p className='Rate'>Flat Rate:<samp className='color-samp'>₹40.00</samp> </p>
    <p className='Rate'>Shipping to <samp className='state'>{selectedState}</samp></p>
    <div className='btn-add' onClick={handleToggleChnageAddress}>
     {showChangeAddress ? 'Change address' : 'Change address'}</div>
    {showChangeAddress &&(
      <>
      <div className='countryselect'>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="selectcountry">Select a country/region...</option>
        <option value="Afghanistan">Afghanistan</option>
        <option value="Aland Island">Aland Island</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="American Samoa">American Samoa</option>
        <option value="Anorra">Anorra</option>
        <option value="Angola">Angola</option>
        <option value="Anguilla">Anguilla</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
        <option value="Argentina">Argentina</option>
        <option value="Armenia">Armenia</option>
        <option value="Aruba">Aruba</option>
        <option value="Australia">Australia</option>
        <option value="Austria">Austria</option>
        <option value="Azerbaijan">Azerbaijan</option>
        <option value="Bahamas">Bahamas</option>
        <option value="Bahrain">Bahrain</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Barbados">Barbados</option>
        <option value="Belarus">Belarus</option>
        <option value="Belau">Belau</option>
        <option value="Belgium">Belgium</option>
        <option value="Belize">Beliza</option>
        <option value="Benin">Benin</option>
        <option value="Bermuda">BErmuda</option>
        <option value="Bhutan">Bhutan</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Bonaire,Saint Eustaitun and Saba">Bonaire,Saint Eustaitun and Saba</option>
        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
        <option value="Botswana">Botswana</option>
        <option value="Brazil">Brazil</option>
        <option value="British India Ocean Territory">British India Ocean Territory</option>
        <option value="Brunei">Brunei</option>
        <option value="Bulgaria">Bulgaria</option>
        <option value="Burkina Faso">Burkina Faso</option>
        <option value="Burundi">Burundi</option>
        <otpion value="Cambodia">Cambodia</otpion>
        <otpion value="Cameroon">Cameroon</otpion>
        <option value="Canada">Canada</option>
        <option value="Cape Verde">Cape Verde</option>
        <option value="Cayman Island">Cayman Island</option>
        <option value="Central African Republic">Central African Republic</option>
        <option value="Chad">Chad</option>
        <option vlaue="Chile">Chile</option>
        <option value="China">China</option>
        <option value="Christmas Island">Christmas Island</option>
        <option value="Cocos (Keeling) island">Cocos (Keeling) Island</option>
        <otpion value="Colombia">Colombia</otpion>
        <option value="Comoros">Comoros</option>
        <option value="Congo(Brazzaville)">Congo (Brazzaville)</option>
        <option value="Congo (Kinshasa)">Congo (Kinshasa)</option>
        <option value="Cook Island">Cook Island</option>
        <option value="Costa Rica">Costa Rica</option>
        <option value="Croatia">Croatia</option>
        <option value="Cuba">Cuba</option>
        <option value="Curacao">Curacao</option>
        <option value="Cyprus">Cyprus</option>
        <option value="Czech Republic">Czech Republic</option>
        <option value="Denmark">Denmark</option>
        <option value="Djibouti">Djibouti</option>
        <option value="Dominica">Dominica</option>
        <option value="Dominican Republic">Dominican Republic</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Egypt">Egypt</option>
        <option value="El Salvadoe">El Salvadoe</option>
        <option value="Equatorial Guinea">Equatorial Guinea</option>
        <option value="Eritrea">Eritrea</option>
        <option vvalue="Estonia">Estonia</option>
        <option value="Eswatini">Eswatini</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="Falkland Island">Falkland Island</option>
        <option value="Faroe Island">Faroe Island</option>
        <option value="Fiji">Fiji</option>
        <option value="Finland">Finland</option>
        <option value="France">France</option>
        <option value="French Guiana">Franch Guiana</option>
        <option value="French Ploynesia">French Ploynesia</option>
        <option value="French Southern Territories">French Southern Territories</option>
        <option value="Gabon">Gabon</option>
        <option value="Gambia">Gambia</option>
        <option value="Georgia">Georgia</option>
        <option value="Germany">Germany</option>
        <option value="Ghana">Ghana</option>
        <option value="Gibraltar">Gibraltar</option>
        <option value="Greece">Greece</option>
        <option value="Greenland">Greenland</option>
        <option value="Grenada">Grenada</option>
        <option value="Guadeloupe">Guadeloupe</option>
        <option value="Guam">Guam</option>
        <option value="Guatemala">Guatemala</option>
        <option value="Guernsey">Guernsey</option>
        <option value="Guinea">Guinea</option>
        <option value="Guinea-Bissau">Guinea-Bissau</option>
        <option value="Guyana">Guyana</option>
        <option value="Haiti">Haiti</option>
        <option value="Heard Island and McDonald Islands">Heard Islands and McDonald Islands</option>
        <option value="Honduras">Honduras</option>
        <option value="Hong kong">Hong kong</option>
        <option value="Hungary">Hungary</option>
        <option value="Iceland">Iceland</option>
        <option value="India">India</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Iran">Iran</option>
        <option value="Iraq">Iraq</option>
        <option value="Ireland">Ireland</option>
        <option value="isle of Men">Isle of Men</option>
        <option value="Israel">Israel</option>
        <option value="Italy">Italy</option>
        <option value="Ivory Coast">Ivory Coast</option>
        <option value="Jamaica">Jamaica</option>
        <option value="Japan">Japan</option>
        <option value="Jersey">Jersey</option>
        <option value="Jordan">Jordan</option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Kenya">Kenya</option>
        <option value="kiribati">Kiribati</option>
        <option value="Kuwait">Kuwait</option>
        <option value="Kyrgyzstan">Kyrgyzstan</option>
        <option value="Laos">Laos</option>
        <option value="Latvia">Latvia</option>
        <option value="Lebanon">Lebanon</option>
        <option value="Lesotho">Lesotho</option>
        <option value="Liberia">Liberia</option>
        <option value="Libya">Libya</option>
        <option value=" Liechtenstein">Liechtenstein</option>
        <option value="Lithuania">Lithuania</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Macao">Macao</option>
        <option value="Madagascar">Madagascar</option>
        <option value="Malawi">Malawi</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Maldives">Maldives</option>
        <option value="Mali">Mali</option>
        <option value="Malta">Malta</option>
        <option value="Marshall Island">Marshall Island</option>
        <option value="Martnique">Martnique</option>
        <option value="Maurtinque">Martnique</option>
        <option value="Mauritius">Mauritius</option>
        <option value="Mayotte">Mayotte</option>
        <option value="Mexico">Mexico</option>
        <option value="Micronesia">Micronesia</option>
        <option value="Moldova">Moldova</option>
        <option value="Monaco">Monaco</option>
        <option value="Mongolia">Mongolia</option>
        <option value="Montenegro">Montenegro</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Morocco">Morocco</option>
        <option value="Mozamibique">Mozamibique</option>
        <option value="Myanmar">Myanmar</option>
        <option value="Namibia">Namibia</option>
        <option value="Nauru">Nauru</option>
        <option value="Nepal">Nepal</option>
        <option value="Netherlands">Netherlands</option>
        <option value="New Caledonia">New Caledonia</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Nicaragua">Nicaragua</option>
        <option value="Niger">Niger</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Niue">Niue</option>
        <option value="Norfolk Island">Norfolk Island</option>
        <option value="North Korea">North Korea</option>
        <option value="North Macedonia">North Macedonia</option>
        <option value="Northern Mariana Island ">Northern Mariana Island</option>
        <option value="Norway">Norway</option>
        <option value="Oman">Oman</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Palestinian Territory">Palestinian Territory</option>
        <option value="Panama">Panama</option>
        <option value="Papua New Guinea">Papua New Guinea</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Philippines">Philippines</option>
        <option value="Pitcairn">Pitcairn</option>
        <option value="Pitcairn">Pitcairn</option>
        <option value="Poland">Poland</option>
        <option value="Portugal">Portugal</option>
        <option value="Puerto Rico">Puerto Rice</option>
        <option value="Qatar">Qatar</option>
        <option value="Reunion">Reunion</option>
        <option value="Romania">Romania</option>
        <option value="Russia">Russia</option>
        <option value="Rwanda">Rwanda</option>
        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
        <option value="Saint Barthelemy">Saint Barthelemy</option>
        <option value="Saint Helena">Saint Helena</option>
        <option value="Saint kittis and Nevis">Saint Kittis and Nevis</option>
        <option value="Saint Lucia">Sant Lucia</option>
        <option value="Saint Martin(Dutch part)">Saint Martin(Dutch part)</option>
        <option value="Saint Martin(French Part)">Saint Martin(French Part)</option>
        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
        <option value="Samoa">Samoa</option>
        <option value="San Marino">San Marino</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="Senegal ">Senegal</option>
        <option value="Serbia">Serbia</option>
        <option value="Seychelles">Seychelles</option>
        <option value="Sierra Leone">Sierra Leone</option>
        <option value="Singapore">Singapore</option>
        <option value="Slovakia">Slovakia</option>
        <option value="Slovenia">Slovenia</option>
        <option value="Solomon Island">Solomon Island</option>
        <option value="Somalia Island">Somalia Island</option>
        <option value="South Africa">South Africa</option>
        <option value="South Georgia/SandWich Island">South Georgia/SandWich Island</option>
        <option value="South Korea">South Korea</option>
        <option value="South Sudan">South Sudan</option>
        <option value="Spain">Spain</option>
        <option value="Sri Lanka">Sri Lanka</option>
        <option value="Sudan">Sudan</option>
        <option value="Suriname">Suriname</option>
        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
        <option value="Sweden"> Sweden</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Syria">Syria</option>
        <option value="Taiwan">Taiwan</option>
        <option value="Tajikistan">Tajikistan</option>
        <option value="Tanzania">Tanzania</option>
        <option value="Thailand">Thailand</option>
        <option value="Timor-Leste">Timor-Leste</option>
        <option value="Togo">Togo</option>
        <option value="Tokelau">Tokelau</option>
        <option value="Tonga">Tonga</option>
        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
        <option value="Tunisia">Tunisia</option>
        <option value="Turkey">Turkey</option>
        <option value="Turkmenistan">Turkmenistan</option>
        <option value="Turks and Caicos island">Turks and Caicos Island</option>
        <option value="Tuvalu">Tuvalu</option>
        <option value="Uganda">Uganda</option>
        <option value="Ukraine">Ukraine</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="United Kingdom(UK)">United Kingdom(UK)</option>
        <option value="United State(US)">United State(US)</option>
        <option value="United State(US)Minor Outlying Island">United State(US)Minor Outlying Island</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Uzbekistan">Uzbekistan</option>
        <option value="Vanuatu">Vanuatu</option>
        <option value="Vatican">Vatican</option>
        <option value="Venezuela">Venezuela</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Virgin Islands(British)">Virgin Islands(British)</option>
        <option value="Virgin Islands(US)">Virgin Island(US)</option>
        <option value="Wallis and Futuna">Wallis and Futuna</option>
        <option value="Western Sahara">Western Sahara</option>
        <option value="Yemen">Yemen</option>
        <option value="Zambia">Zambia</option>
        <option value="Zimbabwe">Zimbabwe</option>
      </select></div>
     <div className='stateselect'>
      <select id='state' value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value=" Arunachal Pradesh">Arunachal Pradesh</option>
      <option value=" Assam">Assam</option>
      <option value="Bihar">Bihar</option>
      <option value="Chhattisgarh">Chhattisgarh</option>
      <option value="Goa">Goa</option>
      <option value="Haryana">Haryana</option>
      <option value="Himachal Pradesh">Himachal Pradesh</option>
      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
      <option value="Jharkhand">Jharkhand</option>
      <option value="Karnatka">Karnatka</option>
      <option value="Kerala">Kerala</option>
      <option value="Ladakh">Ladakh</option>
      <option value="Madhya Pradesh">Madhya Pradesh</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Manipur">Mainpur</option>
      <option value="Meghalaya">Meghalaya</option>
      <option value="Mizoram">Mizoram</option>
      <option value="Nagaland">Nagaland</option>
      <option value="Odisha">Odisha</option>
      <option value="Punjab">Punjab</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Sikkim">Sikkim</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Telangana">Telangana</option>
      <option value="Tripura">Tripura</option>
      <option value="Uttarakhand">Uttarakhand</option>
      <option value="Uttar Pradesh">Uttar Pradesh</option>
      <option value="West Bengal">West Bengal</option>
      <option value="Andaman and Nicobar Island">Andaman and Nicobar Island</option>
      <option value="Chandigarh">Chandigarh</option>
      <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
      <option value="Daman and Diu">Daman and Diu</option>
      <option value="Delhi">Delhi</option>
      <option value="Lakshadeep">Lakshadeep</option>
      <option value="Pondicherry(Puducherry)">Pondicherry(Puducherry)</option> 
      </select>
     </div>
      <div className='txtcity'>
      <input type="text" id='city' placeholder='city' value={city} onChange={handleCityChange} disabled={!selectedState}/>

      </div>
      <div className='txtpincode'>
      <input type="text" placeholder='pinCode' id="pinCode" value={PinCode} onChange={handlePinCodeChange} disabled={!selectedState}/>
      </div>
      <button className='btn-update'>Update</button>
      </>
    )}
    </div>
    <hr className='line-hr'/>
    <div className='card-footer'>
    <div className='footer-total'>
    <h1 className='total-h1'>Total:</h1> <span className='total-price-after-FlatRate'>RS:{totalFlatRate}</span>
    </div>
    <div>
     <NavLink to="/Paymentform"><button className='btn-proceed-to-checkout'>PROCEED TO CHECKOUT</button></NavLink> 
    </div>
    </div>

    </div>
    
      
    </>
  )
}

export default Basket;