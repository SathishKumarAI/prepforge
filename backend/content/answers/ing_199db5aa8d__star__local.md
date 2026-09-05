---
qid: ing_199db5aa8d__star__local
question: 'Explain: Tier 2: Run on traces that passed Tier 1 (cheap LLM, ~$0.50/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 382
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:32-05:00'
sources: []
---

**Situation** – At a fintech startup we were deploying an AI‑driven fraud detector for live payments. Our first model (Tier 1) used a small OpenAI GPT‑3.5‑Turbo variant at roughly $0.50 per 1,000 tokens to flag suspicious transactions in real time. However, the raw traffic was 300k messages/day, and the cost ballooned beyond our budget.

**Task** – I had to cut the AI spend by 70% while keeping detection accuracy above 95 %. The goal was to run a more expensive, higher‑fidelity LLM only on the cases that truly needed deeper analysis.

**Action** – I built a trace‑based filtering pipeline. First, every incoming message was scored with Tier 1 and stored in an event store (Kafka). We flagged traces where the confidence score fell between 0.4–0.7 or where the transaction value exceeded $5k. Those “borderline” traces were routed to Tier 2: a GPT‑4‑Turbo instance costing about $3 per 1,000 tokens. I added an async worker that batched these traces into 100‑token chunks, applied a prompt template tuned for fraud nuance, and streamed the responses back to our rule engine.

**Result** – After deployment, Tier 2 was invoked on only 12 % of traffic, cutting total AI cost from $9k/month to $3.1k—an 66 % reduction. Fraud detection precision improved by 4%, and we learned that a two‑tier LLM strategy balances speed, accuracy, and spend effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
