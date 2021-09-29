_**Nota:** La versión de la app mostrada en la presentación del_ Sprint 0 - PMV _es la que está en la rama_ Pablo.

# Front-end Notepath

Este repo es el front-end de la app Notepath. Tecnologías: Expo, React, React Native, Formik, Axios, Redux.

Para desarrollar en cualquier sistema operativo, se debe tener instalado:

- Visual Studio Code, o algún editor de texto que destaque JavaScript.
- Android Studio, y un emulador de algún celular Android (el Pixel 3A está por defecto).

Además, se deben seguir los siguientes pasos:

- Ejecutar las siguientes instrucciones, en orden:
```bash
git clone https://gitlab.inf.utfsm.cl/fesw-2021-cc/g7-recip/front-end-notepath.git

cd front-end-notepath

npm install

npm install --global expo-cli

expo start
```
Se debería abrir una ventana de Expo en el navegador.
- Abrir el proyecto en Android Studio. Si aparece la opción de configurar Android abajo a la derecha, hacerlo.
- Abrir _Tools_, luego _AVD Manager_, luego _darle play_ al emulador (**una** vez, pues de lo contrario Android Studio se desestabiliza. La barra de carga aparece abajo a la derecha.)
- Una vez el sistema operativo del emulador esté abierto, presionar _Run on Android device/emulator_ en la ventana de Expo.
- Desarrollar en algún editor de texto. El emulador se actualiza automáticamente cada vez que se guarda algún archivo del código fuente.
- Si se quiere cerrar Expo, hacer Ctrl + C en la terminal en la que está abierto, apretar el cuadrado en el emulador, y deslizar la app hacia arriba para cerrarla. **Es necesario hacer esto cada vez que se quiere reiniciar Expo o el emulador.**
