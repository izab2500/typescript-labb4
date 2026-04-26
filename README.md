# 🧪 Programmering i TypeScript - labb4

Syftet med laborationen är att använda **TypeScript** och **Angular** för att skapa en webbapplikation med följande funktioner:

- Söka efter kurskod eller kursnamn
- Filtrera kurser baserat på kurskod, kursnamn eller progression.

## 🚍Service

CourseService är ansvarig för att hämta kurser från ett API genom en HTTP-förfrågan. Den gör kurserna tillgängliga för andra komponenter genom signalen courses och metoden getCourses().

- loadCourses(): Hämtar data från API:et och lagrar kurserna i signalen courses.

- getCourses(): Returnerar signalen courses, vilket gör det möjligt för komponenter att lyssna på och använda kursdata.

## 🧩 Komponenter

### App

- Huvudkomponenten som initialiserar signalen courses och laddar kursdata från servicen med metoden loadCourses().

- Den importerar och innehåller alla andra komponenter: Heading, SearchForm, och CoursesTable.

### Heading

- Visar applikationens rubrik.

### SearchForm

- Hämta kursdata via signalen courses genom att anropa getCourses() från servicen.

- Ansvarig för att filtrera kurser baserat på användarens sökfras (kurskod eller kursnamn).

- Använder ngModel för tvåvägs-binding för sökfältet, komponent och ngModelChange för att uppdatera tabel vid varje ändring.

### CoursesTable

- Hämta kursdata via signalen courses genom att anropa getCourses() från servicen.

- Ansvarig för att sortera kurser i tabellen baserat på kolumnerna: Kurskod, Kursnamn, och Progression.

- Sorterar både stigande och fallande vid klick på tabellrubriker.

## 🍃 Dataflöde

### App

Komponenten är den första som initierar signalen courses genom att hämta kurser via HTTP-responsen från servicen genom att kalla på loadCourses().

När kurserna är laddade, är signalen courses tillgänglig för alla andra komponenter som importerar CourseService, utan att behöva göra en ny HTTP-förfrågan.

### SearchForm 

Komponenten prenumererar på signalen courses och får tillgång till alla kurser via getCourses() från servicen.

Vid första laddningen används effect() i konstruktorn för att säkerställa att kurserna är fullständigt laddade innan de kopieras till en annan array (allCourses) som används för att filtrering.

filterTable() uppdaterar signalen courses med det filtrerade resultaten, vilket även uppdaterar tabellen i CoursesTable-komponenten.

### CoursesTable

komponenten använder också signalen courses genom getCourses() från servicen för att hålla sig uppdaterad med kursdata.

Vid klick på en tabellkolumn (Kurskod, Kursnamn, Progression) uppdateras tabellen genom att sortera kurserna antingen i stigande eller fallande ordning. 

## 🌐 Webbplats

[besök webbplatsen](https://typescript-labb4.vercel.app/)




