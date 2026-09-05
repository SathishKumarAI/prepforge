---
qid: ing_84c789e182__star__local
question: Here are ~120 lines of working but messy code with passing tests. Improve
  the architecture without breaking them. What do you change first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 328
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:45-05:00'
sources: []
---

**Situation:**  
In my last role I was handed a 120‑line Python module that had been rapidly patched over months to support a data‑pipeline feature set. The code had working unit tests but was riddled with duplicated logic, tight coupling between data loaders and transformers, and no clear separation of concerns. A new sprint required adding a caching layer for the expensive database calls.

**Task:**  
I needed to refactor the architecture so that the new cache could be injected without touching the existing tests or breaking current functionality, while keeping the module’s public API intact.

**Action:**  
First, I introduced a thin “service” wrapper around the core functions and defined clear interfaces using abstract base classes. I extracted the database access into its own class, added dependency injection via constructor parameters, and replaced global state with instance attributes. Then I used Python’s `functools.lru_cache` decorator on the data‑fetching methods, later swapping it for a custom Redis cache in production. Throughout, I ran the full test suite after each change to ensure no regressions.

**Result:**  
The refactor reduced code duplication by 35 % and allowed the caching layer to be swapped with zero test failures. Load times dropped from ~2 s to <0.5 s for repeated queries, and the team could now add new data sources without touching the existing logic. I learned that preserving a clean public API while restructuring behind‑the‑scenes is key to safe, incremental architecture improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
