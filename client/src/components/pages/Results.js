import React, { Component } from "react";
import "./Pages.css";
import "./Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    console.log("Loaded dashboard")
    return (
      <div className = "content-container">
        <h1 className="Title">Results</h1>
        <h2 className="event-name">2021 CSOP Results</h2>
        <div className="rankings">
        <table>
          <tr>
            <th>Place</th>
            <th>Pokerstars</th>
            <th>Name</th>
            <th>Equity</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Arham Baid</td>
            <td>arhambaid</td>
            <td>2850.0</td>
          </tr>


         <tr>
            <td>2</td>
            <td>Benjamin Urquhart</td>
            <td>benumit</td>
            <td>2062.5</td>
          </tr>


         <tr>
            <td>3</td>
            <td>Chase Heyman</td>
            <td>CheyHey1</td>
            <td>1387.5</td>
          </tr>


         <tr>
            <td>4</td>
            <td>Qiuyang Yin</td>
            <td>DavidYQY</td>
            <td>1125.0</td>
          </tr>


         <tr>
            <td>5</td>
            <td>David Cao</td>
            <td>astralele</td>
            <td>900.0</td>
          </tr>


         <tr>
            <td>6</td>
            <td>Brett Allen</td>
            <td>brettallenyo</td>
            <td>750.0</td>
          </tr>


         <tr>
            <td>7</td>
            <td>Caleb He</td>
            <td>cabletele</td>
            <td>600.0</td>
          </tr>


         <tr>
            <td>8</td>
            <td>Alexander Dang</td>
            <td>bradygoat21</td>
            <td>450.0</td>
          </tr>


         <tr>
            <td>9</td>
            <td>Dominic de Bettencourt</td>
            <td>ddebettencourt</td>
            <td>330.0</td>
          </tr>


         <tr>
            <td>10</td>
            <td>Gopaal Aggarwal</td>
            <td>guccigops</td>
            <td>255.0</td>
          </tr>


         <tr>
            <td>11</td>
            <td>Wilson Xu</td>
            <td>megadevwhaler</td>
            <td>255.0</td>
          </tr>


         <tr>
            <td>12</td>
            <td>Victoria Ge</td>
            <td>milo&tock</td>
            <td>255.0</td>
          </tr>


         <tr>
            <td>13</td>
            <td>Harry Heiberger</td>
            <td>hgheiberger</td>
            <td>187.5</td>
          </tr>


         <tr>
            <td>14</td>
            <td>Kuan Wei Huang</td>
            <td>kwhuang</td>
            <td>187.5</td>
          </tr>


         <tr>
            <td>15</td>
            <td>Casey Bussone</td>
            <td>CaseyBuss1</td>
            <td>187.5</td>
          </tr>


         <tr>
            <td>16</td>
            <td>Murad Avliyakulov</td>
            <td>crypticm</td>
            <td>165.0</td>
          </tr>


         <tr>
            <td>17</td>
            <td>Zaid Fattah</td>
            <td>swaggiez123</td>
            <td>165.0</td>
          </tr>


         <tr>
            <td>18</td>
            <td>Kevin Xu</td>
            <td>kxu12</td>
            <td>165.0</td>
          </tr>


         <tr>
            <td>19</td>
            <td>Jack Robinson</td>
            <td>jtrobinsonhb</td>
            <td>142.5</td>
          </tr>


         <tr>
            <td>20</td>
            <td>Joy Ma</td>
            <td>joyispokergod</td>
            <td>142.5</td>
          </tr>


         <tr>
            <td>21</td>
            <td>Edgar Wang</td>
            <td>uncertainedgar</td>
            <td>142.5</td>
          </tr>


         <tr>
            <td>22</td>
            <td>Jeremy Waldman</td>
            <td>jawaldman</td>
            <td>127.5</td>
          </tr>


         <tr>
            <td>23</td>
            <td>Daniel Wang</td>
            <td>dnlwng</td>
            <td>127.5</td>
          </tr>


         <tr>
            <td>24</td>
            <td>James Jiao</td>
            <td>bulletsjj</td>
            <td>127.5</td>
          </tr>


         <tr>
            <td>25</td>
            <td>Jeffrey Liu</td>
            <td>jacks0njack</td>
            <td>112.5</td>
          </tr>


         <tr>
            <td>26</td>
            <td>Nika Belova</td>
            <td>nn2257</td>
            <td>112.5</td>
          </tr>


         <tr>
            <td>27</td>
            <td>Etzio Rovello</td>
            <td>Etzio1209</td>
            <td>112.5</td>
          </tr>


         <tr>
            <td>28</td>
            <td>Howard Zhong</td>
            <td>libratusfan</td>
            <td>97.5</td>
          </tr>


         <tr>
            <td>29</td>
            <td>Caleb Robbins</td>
            <td>Mystic694</td>
            <td>97.5</td>
          </tr>


         <tr>
            <td>30</td>
            <td>Rahul Jagetia</td>
            <td>rjag15</td>
            <td>97.5</td>
          </tr>


         <tr>
            <td>31</td>
            <td>Kevin Jiang</td>
            <td>tiltpoker07</td>
            <td>90.0</td>
          </tr>


         <tr>
            <td>32</td>
            <td>Blake Woodford</td>
            <td>buhlak3</td>
            <td>90.0</td>
          </tr>


         <tr>
            <td>33</td>
            <td>Jay Leeds</td>
            <td>GeothermalMC</td>
            <td>90.0</td>
          </tr>


         <tr>
            <td>34</td>
            <td>Keming Zhang</td>
            <td>keming96822</td>
            <td>90.0</td>
          </tr>


         <tr>
            <td>35</td>
            <td>Jacob Zhang</td>
            <td>erg0d1c</td>
            <td>90.0</td>
          </tr>


         <tr>
            <td>36</td>
            <td>Michael Zeng</td>
            <td>NotOptimal</td>
            <td>90.0</td>
          </tr>


         <tr>
            <td>37</td>
            <td>Brendan Yap</td>
            <td>TheBSwizzle</td>
            <td>82.5</td>
          </tr>


         <tr>
            <td>38</td>
            <td>Jefferson Lee</td>
            <td>saltyJeff2468</td>
            <td>82.5</td>
          </tr>


         <tr>
            <td>39</td>
            <td>Rocco Costanzo</td>
            <td>rockstanzo</td>
            <td>82.5</td>
          </tr>


         <tr>
            <td>40</td>
            <td>Andy Zhu</td>
            <td>sdgwip</td>
            <td>82.5</td>
          </tr>


         <tr>
            <td>41</td>
            <td>William Wu</td>
            <td>billywu123</td>
            <td>82.5</td>
          </tr>


         <tr>
            <td>42</td>
            <td>Sun Yul Kim</td>
            <td>27offjam</td>
            <td>82.5</td>
          </tr>


         <tr>
            <td>43</td>
            <td>Anka Hu</td>
            <td>topanisto</td>
            <td>82.5</td>
          </tr>


         <tr>
            <td>44</td>
            <td>Colin Weaver</td>
            <td>Cweava</td>
            <td>82.5</td>
          </tr>


         <tr>
            <td>45</td>
            <td>Max Miller</td>
            <td>maxmiller0107</td>
            <td>82.5</td>
          </tr>
        </table>
        </div>
      </div>
    );
  }
}

export default Results;
