import React from 'react'
export const TabularData = () => <div>
  <h1>Tabular data</h1>

  <table>
    <caption>Jimi Hendrix - albums</caption>
    <thead>
      <tr>
        <th>Album</th>
        <th>Year</th>
        <th>Price</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Album</th>
        <th>Year</th>
        <th>Price</th>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>Are You Experienced</td>
        <td>1967</td>
        <td>$10.00</td>
      </tr>
      <tr>
        <td>Axis: Bold as Love</td>
        <td>1967</td>
        <td>$12.00</td>
      </tr>
      <tr>
        <td>Electric Ladyland</td>
        <td>1968</td>
        <td>$10.00</td>
      </tr>
      <tr>
        <td>Band of Gypsys</td>
        <td>1970</td>
        <td>$12.00</td>
      </tr>
    </tbody>
  </table>
</div>
