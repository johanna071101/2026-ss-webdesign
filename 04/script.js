let position = 0;

let love =1;

setInterval(() => {
    // Konsole leeren
    console.clear();

    //Bild zeichnen
    
        console.log(" -\\  /- \n|  \\/  |\n \\    / \n  \\  /  \n   \\/   ");
        love= love +1;
    
    if(love > 5) {
        console.log(" -\\   /- \n|  \\ /  |\n \\ / / / \n  \\\\ \\/  \n   \\ /   ");
        love = 0;
        
    }
    

}, 400); // Alle 200ms ausführen