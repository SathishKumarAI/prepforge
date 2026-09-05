---
qid: ing_7ee66d8c33__star__local
question: 'Explain: When to Use Each — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 348
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:47:23-05:00'
sources: []
---

**Situation** – At my last role I was tasked with automating the end‑to‑end data ingestion pipeline for a fintech client that had three disparate sources: a legacy SQL DB, an API feed, and a CSV dump from a partner. The manual process took two days per batch and introduced a 12 % error rate.

**Task** – Build a set of AI‑powered tool agents that could ingest, transform, validate, and load the data with minimal human intervention while keeping latency under 30 minutes.

**Action** – I first deployed an *Auto‑Extraction Agent* powered by GPT‑4o to read unstructured CSVs and map columns to the target schema. For the SQL source I used a *Query‑Optimization Agent* that rewrote heavy joins into window functions, reducing execution time from 45 seconds to 12 seconds. The API feed was handled by a *Rate‑Limit & Retry Agent* built on LangChain’s LLM wrapper to gracefully handle throttling and back‑off strategies. Finally, I orchestrated the workflow with Airflow, embedding each agent as an XCom‑driven task so they could pass intermediate artifacts seamlessly.

**Result** – The new pipeline cut ingestion time from 48 hours to 30 minutes, dropped data errors by 94%, and freed up analysts for higher‑value work. I learned that choosing the right agent—whether for extraction, optimization, or orchestration—depends on the data domain, latency constraints, and the specific AI capability each task requires.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
