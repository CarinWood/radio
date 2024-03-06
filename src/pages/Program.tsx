import "../styles/program.css";
import { useEffect, useState } from "react";
import { IoIosPlay } from "react-icons/io";
import ProgramItem from "../components/programItem/ProgramItem";

interface ProgramProps {
  name: string;
}

const Program = () => {
  const [programsArray, setProgramsArray] = useState<ProgramProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [categoryId, setCategoryId] = useState(2);

  async function getPrograms(id: number, page: number) {
    try {
      const response = await fetch(
        `http://api.sr.se/api/v2/programs/index?programcategoryid=${id}&&format=json&&page=${page}&&size=9`
      );
      const data = await response.json();
      setCurrentPage(data.pagination.page);
      setTotalPages(data.pagination.totalpages);
      setProgramsArray(data.programs);
      console.log(data.programs);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPrograms(2, 1);
  }, []);

  const showCategory = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    const selectedCategoryId = parseInt(event.target.value);
    setCategoryId(selectedCategoryId);
    getPrograms(selectedCategoryId, 1);
  };

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
    getPrograms(categoryId, currentPage + 1);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    getPrograms(categoryId, currentPage - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPrograms(categoryId, currentPage);
  }, [currentPage, categoryId]);

  return (
    <div className="program-contianer">
      <div className="categories">
        <p className="category-p">Välj kategori:</p>
        <select onChange={showCategory} value={categoryId}>
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
      <div className="program-items-div">
        {programsArray.map((program, i) => {
          return (
            <div key={i}>
              <ProgramItem
                name={program.name}
                img={program.programimage}
                description={program.description}
                url={program.programurl}
              />
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <IoIosPlay className="arrow-left" onClick={previousPage} />
        <p className="pagination-p">
          {currentPage} / {totalPages}
        </p>
        <IoIosPlay className="arrow-right" onClick={nextPage} />
      </div>
    </div>
  );
};

export default Program;
