---
qid: ing_72a9827b4b__star__local
question: 'Explain: Cost attribution and chargeback — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 356
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:48-05:00'
sources: []
---

**Situation** – In my last role I was the lead on a new LLM‑gateway that exposed multiple models to internal teams via a single API endpoint. The budget was capped at $5 M per year, but usage spikes during product launches were causing unplanned cost overruns.

**Task** – Build a real‑time cost attribution system so each team could see exactly how much they were spending on model inference and have those charges automatically rolled up into their monthly chargeback statements.

**Action** – I designed a multi‑layer metric pipeline:  
1. Instrumented the gateway with OpenTelemetry to capture per‑request token counts, model type, and latency.  
2. Created a Kafka stream that aggregated these metrics at 10‑second granularity, then pushed them into a TimescaleDB for fast roll‑ups.  
3. Built a microservice that queried the DB every hour, applied the current pricing tier (e.g., $0.0004/1K tokens for GPT‑4o), and produced a per‑team CSV.  
4. Integrated this service with our billing platform via REST so the chargeback tables were auto‑populated in Confluence.  

**Result** – The new system cut surprise spend by 92 % and enabled teams to reduce their monthly charges from $120K to $65K on average. I also learned how to balance observability granularity with cost of storage, opting for a 10‑second window that kept latency low while keeping DB writes under budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
