---
qid: ing_7507e129c2__aws__local
question: 'Explain: Time Allocation (35 minutes) — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 396
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:50:45-05:00'
sources: []
---

**Answer – “Time Allocation (35 min) – Whiteboard Exercises”**

*Situation*: In a senior ML role I led a design sprint where the interview panel asked me to sketch an end‑to‑end recommendation engine in just **35 minutes**.  
*Task*: Deliver a clear architecture that balances latency, throughput, and cost while staying customer‑centric.

**Action (STAR)**  
- **Structure the 35 min**:  
  1️⃣ *5 min – Clarify scope & constraints* (customer obsession: “What problem are we solving for the user?”).  
  2️⃣ *10 min – High‑level data flow* (ownership: define ingestion, feature store, model serving).  
  3️⃣ *10 min – Detail key components* (dive deep: S3 + Glue for ETL, SageMaker Pipelines for training, Lambda+API Gateway for inference).  
  4️⃣ *5 min – Discuss scaling & cost* (bias for action: auto‑scaling endpoints, spot instances).  
  5️⃣ *5 min – Risks & fallback plan* (deliver results: rollback to batch offline scoring if real‑time latency spikes).

- **Quantify impact**: Target < 50 ms inference, 99.9% availability, $0.05 per request vs. $0.15 legacy system—saving ~70 % yearly.

**Result**  
Panel approved the design; I later built a prototype that met all SLA targets and reduced cost by 68 %.  

*Bar‑raiser cues*: ownership of every step, depth in component choices, clear metrics, learning loop (we iterated on latency after A/B test).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
