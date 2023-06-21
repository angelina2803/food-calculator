import React from 'react';
import '../styles/CalculateForm.css';
import "../styles/App.css";
import Card from '@mui/material/Card';


const CalculateForm = () => {
    return (
      <div className="conteinerCard">
      <h1>Caterogie</h1>
        <div className="cardGrid">
      <Card sx={{ maxWidth: 345 }}>
      <img src="./img/ovoce/photo1.jpg" alt="Cherry" />
        <p>Cherry</p>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <img src="./img/ovoce/photo2.jpg" alt="Banan" />
      <p>Banan</p>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <img src="./img/ovoce/photo3.jpg" alt="Banan" />
      <p>Banan</p>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <img src="src/img/ovoce/photo3.jpg" alt="Banan" />
      <p>Banan</p>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <img src="src/img/ovoce/photo3.jpg" alt="Banan" />
      <p>Banan</p>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <img src="./img/ovoce/photo3.jpg" alt="Banan" />
      <p>Banan</p>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <img src="./img/ovoce/photo3.jpg" alt="Banan" />
      <p>Banan</p>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <img src="./img/ovoce/photo3.jpg" alt="Banan" />
      <p>Banan</p>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <img src="./img/ovoce/photo3.jpg" alt="Banan" />
      <p>Banan</p>
      </Card>
    </div>
    </div>
    );
};

export default CalculateForm;