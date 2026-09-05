---
qid: ing_82c08f883e__star__local
question: 'Explain: Panel of LLM Judges (PoLL) — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 303
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:46-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching an AI‑driven fraud detection system. The baseline LLM model correctly flagged suspicious transactions 84 % of the time, but its false‑positive rate was too high for regulatory compliance.  

**Task** – I needed to improve precision without sacrificing recall, and deliver a production‑ready solution within two months.  

**Action** – I designed a Panel of LLM Judges (PoLL), an ensemble that runs five fine‑tuned GPT‑4 variants on each transaction, each trained with distinct prompts: risk scoring, contextual audit, regulatory check, anomaly detection, and human‑like reasoning. The outputs are aggregated via weighted majority voting, where weights are learned from a validation set using Bayesian optimization in Python (scikit‑opt). I integrated the ensemble into our microservice stack on Kubernetes, exposing it through a REST API; latency was kept below 120 ms by batching requests with async asyncio workers.  

**Result** – The PoLL reduced false positives from 18 % to 9 %, while maintaining an 83 % recall rate—meeting compliance thresholds and cutting manual review costs by $350k annually. I learned that carefully crafted prompt diversity, combined with data‑driven weighting, turns a single LLM into a robust, production‑grade ensemble.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
