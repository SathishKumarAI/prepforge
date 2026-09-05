---
qid: ing_03764e6573__star__local
question: 'Explain: Clarifying Questions to Ask — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 308
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:35:14-05:00'
sources: []
---

**Situation** – In a senior ML interview I was asked to design a real‑time fraud detection pipeline on a whiteboard. The interviewer’s brief was vague: “We need something that scales and is accurate.”  
**Task** – My goal was to produce a concrete, deployable architecture within 30 minutes while clarifying key assumptions about data volume, latency, and model choice.  
**Action** – I began by asking focused clarifying questions: *“What’s the expected daily transaction volume?”* (10M). *“Do we need predictions in under 50 ms per request?”* (yes). *“Is there a budget for GPU inference?”* (limited). These answers let me choose a streaming ingestion layer (Kafka), an approximate counting Bloom filter for quick pre‑filtering, and a lightweight XGBoost model on CPU. I sketched the flow: Kafka → Pre‑filter → Feature store → Inference → Alert queue, noting that batch retraining would happen nightly on 1 TB of labeled data.  
**Result** – The interviewer approved my design; we later built a prototype that processed 12 M transactions/day with <45 ms latency and achieved 97% precision at 99% recall. I learned that asking the right clarifying questions turns an ambiguous prompt into a concrete, realistic solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
