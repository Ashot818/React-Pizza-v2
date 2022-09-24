import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://62ffa0219350a1e548e311d0.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("error");
        navigate("/");
      }
    }
    fetchPizza();
  }, [id, navigate]);
  if (!pizza) {
    return <>Loading...</>;
  } 
 
  return (
    <div className="container">
      <img alt="full-pizza" src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>

      <h4>{pizza.price} ₽ </h4>
      <Link to={"/"}>
        <button className="button button--outline button--add">
          <span>назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
