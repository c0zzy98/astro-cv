# CV Online

## 📖 Opis projektu

CV Online to aplikacja internetowa stworzona przy użyciu Astro, React oraz TailwindCSS. Projekt umożliwia prezentację CV w nowoczesnym, cyberpunkowym stylu.

---

## 📂 Struktura projektu

```text
/
├── public/          # Pliki statyczne (obrazy, ikony itp.)
├── src/
│   ├── components/  # Komponenty React
│   ├── pages/       # Strony Astro
│   └── styles/      # Style globalne
├── package.json     # Plik konfiguracyjny projektu
├── astro.config.mjs # Konfiguracja Astro
└── tsconfig.json    # Konfiguracja TypeScript
```

---

## 🛠️ Wymagania

- Node.js w wersji `>=22.12.0`
- Menedżer pakietów npm (zainstalowany razem z Node.js)

---

## 🚀 Instrukcja uruchomienia projektu lokalnie

1. **Sklonuj repozytorium**:
   ```sh
   git clone <URL_DO_REPOZYTORIUM>
   cd cv-online
   ```

2. **Zainstaluj zależności**:
   ```sh
   npm install
   ```

3. **Uruchom serwer deweloperski**:
   ```sh
   npm run dev
   ```
   Po uruchomieniu serwera, aplikacja będzie dostępna pod adresem `http://localhost:4321`.

---

## 🧞 Dostępne komendy

| Komenda               | Opis                                              |
|-----------------------|---------------------------------------------------|
| `npm install`         | Instalacja zależności projektu                   |
| `npm run dev`         | Uruchomienie serwera deweloperskiego             |
| `npm run build`       | Budowanie aplikacji do wersji produkcyjnej       |
| `npm run preview`     | Podgląd zbudowanej aplikacji lokalnie            |
| `npm run astro ...`   | Uruchamianie komend CLI Astro                    |
| `npm run astro --help`| Wyświetlenie pomocy dla CLI Astro                |

---

## 📦 Instalacja dodatkowych zależności

Jeśli chcesz zainstalować React i TailwindCSS w swoim projekcie, wykonaj poniższe kroki:

1. **Zainstaluj React i ReactDOM**:
   ```sh
   npm install react react-dom
   ```

2. **Zainstaluj TailwindCSS**:
   ```sh
   npm install tailwindcss
   ```

3. **Skonfiguruj TailwindCSS** (opcjonalnie, jeśli nie jest jeszcze skonfigurowany):
   ```sh
   npx tailwindcss init
   ```

---

## 🌐 Technologie

- **Astro**: Framework do budowy szybkich stron internetowych.
- **React**: Biblioteka do budowy interfejsów użytkownika.
- **TailwindCSS**: Narzędzie do stylowania z wykorzystaniem klas CSS.

---

## 📜 Licencja

Projekt jest dostępny na licencji MIT.
