# Visual Discord Bot - Strona Internetowa

Piękna strona internetowa dla bota Discord o nazwie Visual. Strona wykorzystuje kolorystykę różowo-białą na czarnym tle.

## Funkcje

- Nowoczesny design z animacjami
- Responsywny układ dla urządzeń mobilnych i desktopowych
- Bezpośrednie linki do serwera Discord i zaproszenia bota
- Sekcja z funkcjami bota
- Optymalizacja pod kątem szybkości ładowania

## Technologie

- React
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Express (backend)
- Vite

## Wdrażanie na Render

Ta aplikacja jest skonfigurowana do łatwego wdrożenia na platformie [Render](https://render.com/).

### Kroki wdrożenia:

1. Utwórz konto na platformie Render (https://render.com/)
2. Połącz swoje repozytorium GitHub z Render
3. Na pulpicie Render, kliknij "New" i wybierz "Web Service"
4. Wybierz swoje repozytorium
5. Render automatycznie wykryje konfigurację z pliku `render.yaml`
6. Kliknij "Create Web Service"
7. Render automatycznie zbuduje i wdroży Twoją aplikację

### Ręczna konfiguracja (jeśli potrzebna):

- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm run start`
- **Environment Variables:**
  - `NODE_ENV`: `production`
  - `PORT`: `10000` (lub dowolny inny port)

## Rozwój lokalny

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Budowanie do produkcji
npm run build

# Uruchomienie wersji produkcyjnej
npm run start
```