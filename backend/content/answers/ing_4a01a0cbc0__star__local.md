---
qid: ing_4a01a0cbc0__star__local
question: 'Explain: Sources — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 323
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:23-05:00'
sources: []
---

**Situation** – In my last role as a data engineer at a fintech startup, we were building an AI‑driven fraud detection model. Our compliance team flagged that the model’s false positive rate had jumped from 2% to 7% after the last software update.

**Task** – I was tasked with diagnosing the root cause and tightening our source selection process so the model would reliably use only high‑quality, relevant data streams.

**Action** – First, I mapped every data source feeding into the model: internal transaction logs, external merchant APIs, and third‑party credit bureaus. Using Airflow DAGs, I inserted a “source vetting” step that ran automated tests for latency, schema drift, and data freshness. For each source, I calculated a quality score (coverage, consistency, error rate) and built a weighted feature importance matrix in Spark. Sources below the threshold were flagged; we replaced a lagging merchant API with a real‑time payment gateway feed and added a Kafka stream to ingest live card issuer alerts.

**Result** – After re‑training with the curated sources, the false positive rate dropped back to 1.8%, saving the company an estimated $3 M in unnecessary chargebacks annually. I learned that rigorous source governance—continuous monitoring, scoring, and automated replacement—is essential for maintaining AI model integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
