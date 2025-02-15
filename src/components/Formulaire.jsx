import { useState, useEffect } from "react";

function Formulaire({ onStudentAdded, studentToEdit, onStudentUpdated }) {
  const [idValue, setIdValue] = useState("");
  const [nomValue, setNomValue] = useState("");
  const [prenomValue, setPrenomValue] = useState("");
  const [classeValue, setClasseValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (studentToEdit) {
      setIdValue(studentToEdit.id);
      setNomValue(studentToEdit.nom);
      setPrenomValue(studentToEdit.prenom);
      setClasseValue(studentToEdit.classe);
      setIsVisible(true);
    } else {
      setIdValue("");
      setNomValue("");
      setPrenomValue("");
      setClasseValue("");
      setIsVisible(false);
    }
  }, [studentToEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    const student = {
      id: idValue,
      nom: nomValue,
      prenom: prenomValue,
      classe: classeValue,
    };
    if (studentToEdit) {
      onStudentUpdated(student);
    } else {
      onStudentAdded(student);
    }
  }

  return isVisible ? (
    <div className="rounded-md shadow-lg bg-red-400 p-6 md:p-10">
      <form action="#" onSubmit={handleSubmit} className="space-y-6">
        <p className="font-extrabold text-2xl text-center text-white">
          {studentToEdit
            ? "Modifier les informations de l'élève"
            : "Formulaire d'enregistrement des étudiants"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label
            htmlFor="identifiant"
            className="text-lg font-medium text-white text-start"
          >
            Identifiant :
          </label>
          <input
            id="identifiant"
            name="identifiant"
            type="text"
            className="appearance-none shadow border rounded w-full p-2 md:p-3"
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
            disabled={!!studentToEdit} // Disable editing the ID for existing students
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label
            htmlFor="nom"
            className="text-lg font-medium text-white text-start"
          >
            Nom :
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            className="appearance-none shadow border rounded w-full p-2 md:p-3"
            value={nomValue}
            onChange={(e) => setNomValue(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label
            htmlFor="prenom"
            className="text-lg font-medium text-white text-start"
          >
            Prénom :
          </label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            className="appearance-none shadow border rounded w-full p-2 md:p-3"
            value={prenomValue}
            onChange={(e) => setPrenomValue(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label
            htmlFor="classe"
            className="text-lg font-medium text-white text-start"
          >
            Classe :
          </label>
          <input
            id="classe"
            name="classe"
            type="text"
            className="appearance-none shadow border rounded w-full p-2 md:p-3"
            value={classeValue}
            onChange={(e) => setClasseValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            type="button"
            className="bg-gray-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600"
            onClick={() => setIsVisible(false)}
          >
            Fermer
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-400"
          >
            {studentToEdit ? "Modifier" : "Enregistrer"}
          </button>
        </div>
      </form>
      <div className="mt-8 text-gray-200 text-xs text-center">
        <p>&copy; 2024 HINDEME Laïs</p>
      </div>
    </div>
  ) : (
    <button onClick={() => setIsVisible(true)}>Ajouter</button>
  );
}
export default Formulaire;
