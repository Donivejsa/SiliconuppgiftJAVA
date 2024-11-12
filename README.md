# Javascript delen av utbildningen

Introduktion
Detta projekt är en omvandling av en tidigare statisk HTML- och CSS-webbplats till en interaktiv, JavaScript-baserad applikation byggd med React och Vite. Målet är att dela upp sidan i komponenter och lägga till dynamisk funktionalitet med hjälp av JavaScript. Applikationen följer strukturen från en tidigare kurs men bygger på en mer modern och komponentbaserad arkitektur.

Funktioner
Projektet har följande kärnfunktioner:

Komponentbaserad struktur: Varje sektion av sidan (t.ex. PromotionSection, BrandsSection, Contact) är skapad som en egen React-komponent, vilket möjliggör bättre organisation och återanvändbarhet av koden.
Routing med React Router: Navigering mellan olika delar av sidan, inklusive en dedikerad kontaktsida, hanteras med hjälp av React Router.
Formulär med validering: Samtliga formulär på sidan har en enkel validering som säkerställer att användaren fyller i nödvändig information.
Dynamisk data från Web API: Testimonials och FAQ-sektionerna hämtar dynamiskt data från ett externt Web API för att uppdatera innehållet i realtid.
Accordion för FAQ: FAQ-sektionen har ett accordion-läge där användaren kan expandera och stänga olika frågor för att se svaren.
Dark mode/Ljusläge växling: Genom en switch i headern kan användaren växla mellan mörkt och ljust tema på hela sidan.
Teknologier och Verktyg
React: För komponentbaserad arkitektur och användargränssnitt.
Vite: Ett snabbt byggverktyg som möjliggör effektiv utveckling och byggning av projektet.
React Router: För hantering av olika rutter och sidor i applikationen.
CSS / SCSS: För styling av komponenterna, inklusive stöd för både ljust och mörkt tema.
Fetch API: För att hämta data från ett externt API och uppdatera innehållet dynamiskt.


Uppdelning av komponenter: Webbplatsen är uppdelad i flera komponenter för enkel hantering. Huvudkomponenter inkluderar:
PromotionSection: Visar olika kampanjer.
BrandsSection: Visar partners och varumärken.
FeaturesSection: Beskriver webbplatsens funktioner.
Contact: Innehåller ett kontaktformulär med validering.
Fler sektioner är strukturerade på liknande sätt i App.jsx.
API-integration: Applikationen hämtar testimonials och FAQ-data från följande API:

Dark Mode: Projektet har en knapp för dark mode i navbaren som låter användaren växla mellan ett mörkt och ett ljust tema. Teman hanteras med useState i App.jsx, och relevant CSS appliceras för att justera färgerna på komponenterna.

Filstruktur
src/App.jsx: Huvudfilen som samlar alla komponenter och hanterar routing.
src/components: Katalog med olika komponentfiler för varje sektion.
src/assets: Bildfiler och ikoner.
src/styles: CSS-filer för styling av komponenter, med stöd för dark mode.

Med dessa funktioner och instruktioner är projektet nu omvandlat till en modern JavaScript-baserad applikation med React och Vite!
