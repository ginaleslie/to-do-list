module.exports = function (grunt) {
	// # section 1 - require modules
	require("load-grunt-tasks")(grunt);

	// # section 2 - configure grunt
	grunt.initConfig({
		eslint: {
			options: {
				config: "eslint.json",
				reset: true,
			},
			target: ["./main.js"],
		},
		uglify: {
			dev: {
				options: {
					mangle: true,
				},
				files: {
					"./build/main.min.js": "./main.js",
				},
			},
		},
	});

	// # section 3 - register grunt tasks
	grunt.registerTask("default", ["eslint"]);
	//load uglify plugin
	grunt.loadNpmTasks("grunt-contrib-uglify");

	//create default task
	grunt.registerTask("default", ["uglify"]);
};
