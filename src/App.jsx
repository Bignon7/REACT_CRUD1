import { useState, useEffect } from "react";
import Entete from "./components/Entete";
import "./App.css";
import Formulaire from "./components/Formulaire";
import StudentIndex from "./components/StudentIndex";
import Card from "./components/Card";

function App() {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("Liste")) || []
  );
  const [studentToEdit, setStudentToEdit] = useState(null);
  useEffect(() => {
    localStorage.setItem("Liste", JSON.stringify(students));
  }, [students]);

  //On ne doit pas modifier directement l'état d'une variable d'état c'est pour cela qu'il faut utiliser une autre variable et le setter
  function handleStudentAdded(newStudent) {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  }

  function handleDelete(id) {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  }
  function handleStudentUpdated(updatedStudent) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setStudentToEdit(null);
  }

  function handleEdit(student) {
    setStudentToEdit(student);
  }
  return (
    <>
      <Entete />
      <Formulaire
        onStudentAdded={handleStudentAdded}
        onStudentUpdated={handleStudentUpdated}
        studentToEdit={studentToEdit}
      />
      <StudentIndex
        students={students}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <Card />
    </>
  );
}

export default App;
