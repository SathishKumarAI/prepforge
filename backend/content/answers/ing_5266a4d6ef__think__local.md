---
qid: ing_5266a4d6ef__think__local
question: 'Explain: No models selected — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 432
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:26:10-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The user wants an explanation of “No models selected – SWE‑bench Leaderboards.”  
   - Assume they’re referring to a machine‑learning benchmark (SWE‑Bench) that shows leaderboards, and that sometimes a leaderboard tab says “no models selected.”  
   - Clarify whether they need why this message appears or how to fix it.

**2️⃣ Build the mental model**  
   - **Benchmark workflow:** data → evaluation metrics → model submissions → ranking.  
   - **Leaderboard state machine:** *No selection* → *Show all* → *Filter by task/model.*  
   - The “no models selected” state is a UI flag triggered when no filter criteria are applied.

**3️⃣ Step‑by‑step reasoning**  
   1. User opens the leaderboard page.  
   2. Backend queries for model entries matching current filters.  
   3. If the query returns zero rows (because filters exclude everything or none were chosen), the UI shows “No models selected.”  
   4. Possible causes: no submissions yet, wrong task/category selection, or a bug in filter logic.

**4️⃣ Common traps to avoid**  
   - Don’t conflate *no model submissions* with *filter mis‑configurations*.  
   - Avoid assuming it’s an error; it can be intentional UX for clarity.  
   - Skip technical jargon (e.g., “SQL null”); keep explanation user‑friendly.

**5️⃣ Sanity‑check & communicate**  
   - Re‑read the explanation to ensure it covers: what triggers the message, why it matters, and how to resolve it.  
   - Summarize in plain language: “The leaderboard shows ‘No models selected’ when your current filter (e.g., task type or model family) matches no entries; you can clear filters or choose a different category.”  
   - Optionally suggest troubleshooting steps if the user truly expects results but sees this message.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
