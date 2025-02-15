import etu from "../assets/ico1.png";

function Entete() {
  return (
    <div className="text-end">
      <img src={etu} alt="Ma mascotte étudiant" /> <span>EducAMaster</span>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  );
}

export default Entete;
