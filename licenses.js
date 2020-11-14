function getLicense (license) {
    switch (license) 
     {
         case "Apache License 2.0":
             console.log("APACHE")
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
             break;
         case "GNU Lesser General Public License v2.0":
             return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
             break;
     }
    }