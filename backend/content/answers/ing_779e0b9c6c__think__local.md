---
qid: ing_779e0b9c6c__think__local
question: 'Explain: Portfolio moves — Frontend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 481
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:54:08-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   * Identify what “Portfolio moves” means in this context—likely a feature or module that tracks changes (additions/removals) in a user’s investment portfolio.  
   * Assume we’re working on the frontend, so we’ll focus on UI/UX, data flow, and interaction with a backend API.

**2. Adopt a mental model: “Feature‑first, component‑centric”**  
   * Break the feature into high‑level concerns: state management, data fetching, presentation, and user actions.  
   * Map each concern to reusable React (or similar) components and hooks.

**3. Step‑by‑step reasoning**  
   1. **Define data contracts** – what payloads do we receive for portfolio moves?  
   2. **Set up state** – use `useState`/`useReducer` or a store (Redux/Vuex) to hold the list of moves and loading/error flags.  
   3. **Fetch data** – create an async hook (`usePortfolioMoves`) that calls the API, handles pagination if needed, and updates state.  
   4. **Design UI** – table/list with columns (date, symbol, quantity, type). Add sorting/filtering controls.  
   5. **Handle user actions** – buttons to refresh, export CSV, or undo a move; wire them to API endpoints.  
   6. **UX polish** – loading spinners, error banners, optimistic UI for quick feedback.

**4. Common pitfalls to avoid**  
   * Forgetting to debounce rapid filter changes.  
   * Mixing presentation and data logic—keep components dumb.  
   * Ignoring accessibility: use semantic tables, ARIA labels.  
   * Not handling stale data when multiple tabs are open.

**5. Sanity‑check & communicate**  
   * Run a quick mental walkthrough: “If the API returns 200 moves, will the table render? What if it errors?”  
   * Explain to teammates: “We’ll expose a `usePortfolioMoves` hook; the UI layer consumes it via a presentational component. This keeps our code modular and testable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
