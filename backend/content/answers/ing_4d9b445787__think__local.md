---
qid: ing_4d9b445787__think__local
question: 'Explain: Fetch recent scores — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 519
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:10:57-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
- *What* is being asked? “Fetch recent scores” likely means retrieving evaluation results for AI models (e.g., benchmark metrics).  
- *Which platforms* are involved? Langwatch and Langfuse—two tools used to monitor and evaluate language‑model performance.  
- Assume the user wants a high‑level, step‑by‑step guide that could be reused in other contexts.

**2️⃣ Adopt a mental model**  
Use a **Process–Tool–Data** framework:  
1. *Process*: overall workflow (connect, query, aggregate).  
2. *Tools*: Langwatch & Langfuse APIs/SDKs.  
3. *Data*: the “scores” you want to fetch (accuracy, latency, etc.).  

This keeps the explanation organized and transferable.

**3️⃣ Step‑by‑step reasoning**  
- **Step 1 – Authentication**: Show how to obtain API keys for both services.  
- **Step 2 – Identify endpoints**: Look up each platform’s docs for “list evaluations” or “fetch metrics.”  
- **Step 3 – Build the request**: Construct HTTP calls (or SDK calls) with parameters like `model_id`, `time_range`.  
- **Step 4 – Handle pagination & rate limits**: Explain looping over pages and respecting back‑off.  
- **Step 5 – Parse & merge**: Convert JSON responses into a unified table or dataframe.  
- **Step 6 – Store or display**: Persist results (e.g., CSV) or feed into dashboards.

**4️⃣ Common traps to avoid**  
- Mixing up the two APIs; remember each has its own auth header.  
- Forgetting that some metrics are only available after a run finishes.  
- Ignoring time‑zone differences when filtering by date range.  
- Not handling errors (404, 429) gracefully.

**5️⃣ Sanity‑check & verbalize**  
- Verify the sample code runs against a sandbox or demo account.  
- Run through a quick mental test: “If I change `model_id`, does the query still work?”  
- Summarize the flow aloud to confirm clarity, then document the steps in markdown for easy reference.

By following this structure you’ll produce a reusable guide that anyone can adapt to fetch recent AI evaluation scores from Langwatch and Langfuse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
