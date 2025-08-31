🎯 Sorteador de Amigos

Una aplicación web sencilla en JavaScript que permite agregar nombres a una lista y realizar un sorteo aleatorio entre ellos. Ideal para juegos, intercambios de regalos, dinámicas grupales y más.



📦 Características

- Agrega amigos a una lista dinámica.
- Visualiza la lista actualizada en tiempo real.
- Realiza un sorteo aleatorio entre los nombres ingresados.
- Soporte para tecla Enter para mejorar la experiencia de usuario.



🖥️ Vista previa

```html
<input type="text" id="amigo" placeholder="Escribe un nombre" />
<button onclick="agregarAmigo()">Agregar</button>
<button onclick="sortearAmigo()">Sortear</button>
<ul id="listaAmigos"></ul>
<ul id="resultado"></ul>
```



🧩 Código principal

El proyecto se basa en tres funciones clave:

- `agregarAmigo()`: Valida y agrega un nombre a la lista.
- `mostrarLista()`: Actualiza visualmente la lista de amigos.
- `sortearAmigo()`: Elige aleatoriamente un nombre de la lista.

Además, se incluye un listener para detectar la tecla Enter en el campo de texto.



🚀 Cómo usar

1. Clona el repositorio:

```bash
git clone https://github.com/Eddynel/el-amigo-secreto.git
```

2. Abre el archivo `index.html` en tu navegador.

3. Escribe nombres en el campo de texto y presiona "Agregar".

4. Cuando tengas al menos dos nombres, presiona "Sortear" para elegir uno al azar.



🛠️ Recomendaciones

- Puedes mejorar la interfaz con estilos CSS personalizados.
- Para evitar duplicados, considera agregar validación adicional.
- Si deseas guardar la lista entre sesiones, puedes usar `localStorage`.



🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar la funcionalidad, corregir errores o agregar nuevas características:

1. Haz un fork del repositorio.
2. Crea una rama con tu mejora: `git checkout -b mejora-nueva`.
3. Haz commit de tus cambios: `git commit -m "Agrega nueva funcionalidad"`.
4. Haz push a tu rama: `git push origin mejora-nueva`.
5. Abre un Pull Request.



📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.



✍️ Autor

Desarrollado por [eddynel](https://github.com/eddynel) — apasionado por la lógica, la programación y la claridad en el código.

