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
             case "GNU General Public License v3.0":
                return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
            case "MIT License":
                return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case "BSD 2-Clause 'Simplified' License":
                return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
                break;
            case "Boost Software License 1.0":
                return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
                break;
     }
    }

    module.exports = {
        getLicense
    };