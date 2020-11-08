// package manager for nodeJS, same as pip in python3
console.log("This is tutorial 7");

// Few important commands:
/*
To initialize npm: 
npm init
This will generate package.json which will contain the list of all the dependencies.

To install a package: 
npm install <package-name>

To uninstall a package: 
npm uinstall <package-name>

Note: When you install a package, package-lock.json is also created. Also a folder 'node_modules' is created which is
responsible for containing all the installed modules.

To install some package as dev-dependencies:
npm install <package-name> --save-dev

Dependencies: Those which are required for software to run.
Dev-Dependencies: Those which the developer uses for his/her ease to develop the software. These are not required in the 
actual build.

To install a package globally (so that we can use it anywhere in system):
npm install <package-name> --global

To install the modules listed in the dependency: 
npm install
This will install all the modules according to the listed modules in dependency. 

*/

