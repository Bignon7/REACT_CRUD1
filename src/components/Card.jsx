import { useState } from "react";

export default function Card({ id, nom, prenom, classe, onDelete, onEdit }) {
  const [editStudent, setEditStudent] = useState(null);

  function handleEditClick(student) {
    setEditStudent(student);
    onEdit(student); // Pass the student to parent to show the form with student data
  }
  function handleDelete() {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer l'étudiant ?")) {
      onDelete(id);
    }
  }
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mb-5">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {nom} - {prenom}
        </h2>
        <p className="text-gray-600 mb-1">
          <strong>Identifiant:</strong> {id}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Classe:</strong> {classe}
        </p>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Supprimer
        </button>
        <button
          onClick={() => handleEditClick({ id, nom, prenom, classe })}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Editer
        </button>
      </div>
    </div>
  );
}
