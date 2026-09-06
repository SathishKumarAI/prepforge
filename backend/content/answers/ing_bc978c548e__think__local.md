---
qid: ing_bc978c548e__think__local
question: 'Explain: View results — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 421
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:25:44-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify what “View results” refers to (the UI panel where evaluation outputs are shown).  
   - Assume the user has already run an AI eval job on Langfuse via Langwatch or the API.  
   - Assume familiarity with basic Langfuse concepts: projects, runs, events, and the dashboard.

**2. Adopt a mental model of the data flow**  
   - *Run → Events (predictions, ground‑truth, metrics) → Evaluation Result*  
   - The dashboard visualises this hierarchy; each run can be expanded to see raw scores, charts, and export options.

**3. Step‑by‑step reasoning toward the answer**  
   1. Explain how results are stored in Langfuse (JSON blobs attached to events).  
   2. Describe the UI navigation: Project → Evaluations → Selected run → “View Results” tab.  
   3. Detail what is displayed: metric tables, percentile bars, and any custom score fields.  
   4. Show how filters (time range, model version) refine the view.  
   5. Mention export options (CSV/JSON) and API endpoints for programmatic access.

**4. Common traps to avoid**  
   - Don’t conflate “evaluation run” with “model run”; clarify the difference.  
   - Avoid jargon that assumes deep Langfuse knowledge; keep it beginner‑friendly.  
   - Don’t skip explaining how scores are computed from raw events, as this is often confusing.

**5. Sanity‑check & communication**  
   - Re‑read the answer to ensure each step follows logically and no detail (e.g., “click ‘Metrics’”) is omitted.  
   - Use bullet points or numbered steps for readability.  
   - End with a quick recap: what you see, how to interpret it, and where to go next (advanced analytics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
