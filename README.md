# AST Codes
  ---------
Demo del sistema de generacion de codigos para EDEMSA.
Desarrollado integramente por Ing. Mauricio Melocchi. 2024.

Esta demo es solo a modo de mostrar el sistema, pero no tiene habilitadas las funcionalidades de generacion de codigos.
Se modifico el home.php para hacerlo index.html para que pueda ser cargado por GitHub Pages que admite solo ese formato de landing page.

# Description
  -----------
Hi, this is my web system for code generation for the electrical facilities of EDEMSA, the largest electricity distibution company of Mendoza.
This is only a demo site, due the limitations of GitHub Pages, that only allows to host one single landing page named with index.html.
Therefore my project was truncated to a single page, excluding for example the index.php (login-in module), and all the php files who links the front-end
with the back-end. The database is also excluded from the demo site, so the only user is "guest" and have no permissions to generate codes.
Despite these limitations, the demo site is useful to show the structure of the site, the responsive web design and other features.
All the system is designed from scratch in HTML and CSS, with RWD (responsive web design) to ensure a good visibility in all devices from desktop PC to mobile 
devices. 
The logic is carried out in JavaScript interacting with the DOM (Document Object Model) in separated files from the HTML, also the styles are coded separated the HTML in five CSS files.
The main selection menu is in the left side of the site, this demo is a mirror of the development, and I have finished only two of seven menu item.
In the center of the main page, the user fills the common information of the project, entering the information in input boxes, pull down lists, and box text-areas.
Integrated with the center menu, is the maps plugin from Leaflet, an open-source JavaScript maps library so the user has two options to input the geographical coordinates.
On the rightmost side of the website, the user fills all the data needed for the code generation, for example if "Cables subterraneos" is selected, the use will select the 
voltage level (BT, MT or AT), the type of cable (Unipolar, Tripolar, Tetrapolar) for cables from 1 pole to four poles, the material (Cu for copper and Al for aluminium), the phase and 
the neutral area in square milimeters (mm2) and so on. Almost all items have also an obervations field to further addition extra information.
When all data is completed, the user clicks on "GENERAR CODIGO" big square button, and all the gathered data is recorded to a data object, then this object is formated in a JSON object,
and the JSON is stored in the server's drive for further procesing with a Python application. This Python applicatioin will be not described in this article, but the main task is to 
read the JSON file and write the information in an Excel xlsx file.
All the data is stored in a database written in MySQL. The other PHP components of the system, reads and write the database but for the explained reasons, are not a part of this demo.



