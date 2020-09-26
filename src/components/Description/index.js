import React from 'react';

import './styles.css'

const Description = () => {
  return (
    <div className="infos" >
      <div >
        <h1>Character Facts</h1>
        <table>
          <tr>
            <th>Powers</th>
            <td>super strength, flight, invulnerability, super speed, heat vision, freeze breath, x-ray vision, superhuman hearing, healing factor</td>
          </tr>
          <tr>
            <th>First Appearance</th>
            <td>DETECTIVE COMICS #27 (1939)</td>
          </tr>
          <tr>
            <th>Alias/Alter Ego</th>
            <td>Clark Kent, Kal-El</td>
          </tr>
          <tr>
            <th>Occupation</th>
            <td>Reporter</td>
          </tr>
          <tr>
            <th>First Appearance</th>
            <td>ACTION COMICS #1 (1938)</td>
          </tr>
        </table>
      </div>

    </div >
  );
}
export default Description;