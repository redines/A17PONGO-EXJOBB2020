// ==UserScript==
// @name     threejs
// @version  1
// @description performance test
// @include     http://localhost:5500/threejs_artefact/threejs.html
// @grant       GM.setValue
// @grant       GM.getValue
// ==/UserScript==


//Function for saving measured data and downloading it as a plain .txt file
function saveDatatoFile(artefact,data){
    console.log("Creating file to save measuredata to");
    const blob = new Blob([data], {type: "text/plain"});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = artefact+".txt";
    a.click();
}

window.addEventListener(
	'load',
	function() {
		(async () => {
      console.log("testing")
      
			var count = await GM.getValue('count', 0); //hur många gånger vi laddat om sidan
			var runs = 10; //antal gånger skriptet ska genomföra sökningar

			if (count != runs) {
        await GM.setValue('count', count + 1);
				console.log('count:' + count);
        location.reload(true);

			} else {
				console.log('finished');
        await GM.setValue('count', 0);
        console.log('count:' + count);
			}
		})();
	},
	false
);