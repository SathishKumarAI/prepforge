---
qid: ing_84e9970466__fp__local
question: 'Explain: Disaster recovery (DR) defined — What is Disaster Recovery? |
  Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 325
total_tokens: 502
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:46-05:00'
sources: []
---

**Disaster recovery (DR)** is the *guaranteed* ability of a cloud‑based machine‑learning system to return to an acceptable operating state after any catastrophic event—hardware failure, data corruption, or cyber‑attack.  
The fundamental problem it solves is **availability vs. consistency**: we want predictions in real time, yet we cannot afford to lose model weights, training data, or serving endpoints. DR imposes a *temporal budget* (e.g., recover within 15 min) and a *state budget* (retain at least 99 % of the last good checkpoint).  

Why must it work this way?  
1. **Statistical fidelity** – ML models are stochastic; a sudden loss of a weight matrix destroys the learned distribution.  
2. **Operational geometry** – The service graph (data ingestion → preprocessing → inference) is a directed acyclic graph; any node failure propagates downstream unless we have a fallback path.  
3. **Optimization cost** – Re‑training from scratch is an expensive convex optimization problem; DR seeks to avoid that by maintaining checkpoints.

A non‑obvious insight: *DR in ML is not just replication but **checkpointing of the loss landscape***. By storing intermediate gradients or optimizer states (e.g., Adam’s moment estimates), a system can resume training exactly where it left off, preserving convergence trajectory and reducing variance—something most DR plans overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
