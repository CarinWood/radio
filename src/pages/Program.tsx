import { FC } from "react";
import "../styles/program.css";
import { programProps } from "../types/Types";

const Program: FC<programProps> = ({ p1 }) => {
  async function getPrograms(id: number) {
    try {
      const response = await fetch(
        `http://api.sr.se/api/v2/programs/index?programcategoryid=${id}&&format=json&&page=1&&size=10`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }


  const showCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = parseInt(event.target.value)
    getPrograms(selectedCategoryId)
  }

  return (
    <div className="program-contianer">
      <div className="categories">
        <p className="category-p">Välj kategori:</p>
        <select onChange={showCategory}>
          <option value={2}>Barn 3 - 8 år</option>
          <option value={132}>Barn 9 - 13 å</option>
          <option value={82}>Dokumentär</option>
          <option value={134}>Drama</option>
          <option value={135}>Ekonomi</option>
          <option value={133}>Humor</option>
          <option value={3}>Kultur/Nöje</option>
          <option value={14}>Livsstil</option>
          <option value={4}>Livsåskådning</option>
          <option value={5}>Musik</option>
        </select>
      </div>
    </div>
  );
};

export default Program;
