import Foco from './components/Foco'

function App() {
  return (
    <div>
      <table width="100%">
        <tbody>
          <tr>
            <td>
              <h3>Foco 1: Sala</h3>
              <Foco></Foco>
            </td>
            <td>
              <h3>Foco 2: Comedor</h3>
              <Foco></Foco>
            </td>
            <td>
              <h3>Foco 3: Cocina</h3>
              <Foco></Foco>
            </td>
            <td>
              <h3>Foco 4: Estancia</h3>
              <Foco></Foco>
            </td>
            <td>
              <h3>Foco 5: Recamara principal</h3>
              <Foco></Foco>
            </td>
            <td>
              <h3>Foco 6: Recamara de los niños</h3>
              <Foco></Foco>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
