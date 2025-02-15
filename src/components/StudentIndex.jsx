import PropTypes from "prop-types";
import Card from "../components/Card";

export default function StudentIndex({ students, onDelete, onEdit }) {
  return (
    <div>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.nom}</li>
        ))}
      </ul>
      <table
        style={{
          borderCollapse: "collapse", // Les bordures des cellules se chevauchent
          width: "100%",
          margin: "20px 0", // Espacement autour du tableau
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid darkgray", padding: "10px" }}>
              N°
            </th>
            <th style={{ border: "1px solid darkgray", padding: "10px" }}>
              Identifiant
            </th>
            <th style={{ border: "1px solid darkgray", padding: "10px" }}>
              Nom
            </th>
            <th style={{ border: "1px solid darkgray", padding: "10px" }}>
              Prénom
            </th>
            <th style={{ border: "1px solid darkgray", padding: "10px" }}>
              Classe
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td style={{ border: "1px solid darkgray", padding: "10px" }}>
                {index + 1}
              </td>
              <td style={{ border: "1px solid darkgray", padding: "10px" }}>
                {student.id}
              </td>
              <td style={{ border: "1px solid darkgray", padding: "10px" }}>
                {student.nom}
              </td>
              <td style={{ border: "1px solid darkgray", padding: "10px" }}>
                {student.prenom}
              </td>
              <td style={{ border: "1px solid darkgray", padding: "10px" }}>
                {student.classe}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {students.map((student) => (
        <Card
          key={student.id}
          id={student.id}
          nom={student.nom}
          prenom={student.prenom}
          classe={student.classe}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
// Validation des props
StudentIndex.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nom: PropTypes.string.isRequired,
      prenom: PropTypes.string.isRequired,
      classe: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
