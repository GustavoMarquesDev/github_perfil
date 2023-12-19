import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import styles from "./MainInput.module.css";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.search}
          type="text"
          onBlur={(e) => setNomeUsuario(e.target.value)}
          placeholder="Digite o nome do perfil"
        />
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/* {formularioEstaVisivel && <Formulario />}
      <button
        onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}
        type="button"
      >
        Toggle form
      </button> */}
    </>
  );
}

export default App;
