---
qid: ing_2003f26f15__star__local
question: 'Explain: Example — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 326
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:24-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a recommendation engine for an e‑commerce platform that had been experiencing data drift – click‑through rates dropped by 18 % over the past quarter, and our production model kept getting stale.

**Task:**  
I needed to design a system that could ingest every user interaction as a first‑class event, preserve a full audit trail, and enable rapid retraining of the ML pipeline without downtime.

**Action:**  
I introduced an **event‑sourcing architecture**: each click, view, add‑to‑cart, and purchase was written to an Apache Kafka topic with immutable timestamps. A stream processor (Kafka Streams) reconstructed user sessions in real time, feeding a feature store (Feast) that updated embeddings on the fly. For training, I built a daily batch job that replayed events from a delta lake, guaranteeing reproducible training datasets and allowing rollback if a new model underperformed. We also added a versioning layer so each model snapshot was tied to the exact event stream state it was trained on.

**Result:**  
The new pipeline reduced model retraining time from 48 hours to 4 hours, lifted click‑through rates by 22 % within two weeks of deployment, and gave us auditability that satisfied compliance auditors. I learned how event sourcing turns data into a reliable source of truth for both real‑time inference and offline training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
