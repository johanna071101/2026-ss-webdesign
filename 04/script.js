

let love =0;

setInterval(() => {
    // Konsole leeren
    console.clear();

    //Bild zeichnen
    
        console.log(" -\\  /- \n|  \\/  |\n \\    / \n  \\  /  \n   \\/   ");
        love= love +1;
    
    if(love > 3) {
        console.clear();
        console.log(" -\\   /- \n|  \\ /  |\n \\ / / / \n  \\\\ \\/  \n   \\ /   ");
        love = 0;
        
    }
    

}, 400); // Alle 200ms ausführen