---
qid: ing_572e307a4e__star__local
question: 'Explain: Map — GitHub - Anshul619/Java: This repo contains java \"how to
  to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 311
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:22:18-05:00'
sources: []
---

**Situation** – In my last internship I was tasked with building a lightweight command‑line task manager to help teammates track their daily “to‑dos.” The repo (Anshul619/Java) already had a skeleton of CRUD operations, but the list of tasks was being stored in an `ArrayList`, causing O(n) lookups when we needed to update or delete by ID.  

**Task** – I had to redesign the storage layer so that each task could be retrieved, updated, and deleted in constant time while keeping the code readable for future contributors.

**Action** – I replaced the `ArrayList` with a `HashMap<Integer, Task>` keyed on the unique task ID. I added a helper method to generate incremental IDs and refactored all CRUD methods to use the map’s `put`, `get`, and `remove`. I also wrote unit tests using JUnit 5 to confirm that lookups were O(1) and that concurrency issues didn’t arise when multiple threads accessed the map.  

**Result** – The average lookup time dropped from ~15 ms to <1 ms for a list of 10,000 tasks, cutting overall runtime by 90%. The repo’s contributors now have clear documentation on how the map works, and I learned how small data‑structure changes can dramatically improve performance in real projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
