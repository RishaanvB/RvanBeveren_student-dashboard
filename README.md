# RvanBeveren_student-dashboard


Voor diegene die het gaat nakijken wat comments over hoe ik het heb aangepakt en waarom ik bepaalde keuzes (niet) heb gemaakt: 
Ik heb de optionele keuze optie2 niet gedaan:

> Optie 2: Als gebruiker wil ik, naast het filteren op 1 persoon, ook kunnen filteren op meerdere personen. Ik wil daarom bij het overzicht van mijn studenten een checkbox zien die ik kan...

Omdat ik heb gekozen om de studenten dynamisch te renderen via de useParams() lukte het mij niet om state toe te voegen aan StudentDetails.js. (infinite loop). Ik ben er later achter gekomen dat ik dit misschien kan oplossen door een functie in een useEffect() te plaatsen, maar dat heb ik niet uitgeprobeerd. 


Bij optie 4: 
> Optie 4: Als gebruiker wil ik kunnen zien hoe 1 specifieke opdracht heeft gescoord. Daarom wil ik een lijst zien van alle opdrachten die ik kan aanvinken om mij een staafdiagram te laten zien met op de y-as de score (zoals eerder) en op de x-as de namen van de studenten.

Heb ik daarom gekozen voor de, in dit geval, "makkelijke" manier door StudentDetails te copy/pasten. De opdracht vond ik zelf niet duidelijk genoeg geformuleerd. Er wordt bv niet specifiek gezegd dat je checkboxen/option/etc **moet** gebruiken en alleen hoeft "aan te vinken". Dit "aanvinken" kan eventueel ook gedaan worden met ui aanpassingen en hoeft niet per se gedaan te worden met <input type="checkbox">  elementen. (is natuurlijk wel makkelijker). En ook, aanvinken suggereert het gebruik van checkboxen, maar radio-buttons zouden in dit geval makkelijker zijn, omdat je maar een opdracht tegelijk wilt zien. Daarom heb ik gekozen om de opdrachten op dezelfde manier te renderen als de studenten. (Je kunt nog steeds per opdracht de opdracht selecteren en je ziet welke je hebt geselecteerd (opdracht wordt **bold**)). Qua functionaliteit heb ik denk/hoop ik wel gedaan wat er verwacht werd.

Ik heb ook de opdrachtnamen die te lang waren, aangepast in de json zelf, zodat de labels aan de x-as wat beter te lezen waren.  Er stond nergens in dat je de data niet mocht aanpassen. :) 


Ik heb zelf gemerkt dat ik nog wel moeite heb met het van tevoren "plannen" van de components/containers en hoe ze met elkaar in verhouding staan. (ik heb af en toe de gehele structuur veranderd). En ook zelfs nog met css zit ik nog wel wat te puzzelen. 

Hij is totaal niet responsive: Vanaf 1200px en daaronder begint het echt uit elkaar te vallen :). Ik heb ook handmatig de padding veranderd van de svg grafiek, omdat ik wilde dat je alles kon zien zonder te scrollen. Ik kon dit niet zo snel oplossen door de afmetingen te veranderen in de **baseProps** in de Theme.js bestanden, dus heb ik het opgelost door de padding in de css zelf te veranderen.

Alvast bedankt voor het nakijken. :)
