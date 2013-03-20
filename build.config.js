({
    appDir:'src',
    dir:'build',
    baseUrl:'js',
    mainConfigFile:'src/js/config.js',
    keepBuildDir: false,
    removeCombined:true,
    preserveLicenseComments:false,
    inlineText:true,
    //separateCSS: true,
    optimize:'uglify2', // none, uglify, uglify2, closure
    uglify2:{
        output:{
            beautify:false,
            indent_level:0,
            max_line_len:80
        },
        compress:{
            sequences:true
        },
        warnings:false,
        mangle:true
    },
    modules:[
        {name:"app/main"}
    ]
})