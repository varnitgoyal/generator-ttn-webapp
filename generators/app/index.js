var Generator = require('yeoman-generator');


module.exports = class extends Generator {

 constructor(args,opts){
	 super(args,opts);
	 this.log("initializing");
 }

 start(){
	 this.prompt([{
		 type: 'input',
		 name: 'name',
		 message: 'enter the name of project'
	 }
	 ]).then((answers)=>{
		 
		 this.fs.copy(
			 this.templatePath(''),
			 this.destinationPath(answers.name)
		 )
	 });
 }



};
