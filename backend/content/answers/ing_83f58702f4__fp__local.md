---
qid: ing_83f58702f4__fp__local
question: 'Explain: API Contracts — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 482
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:45:50-05:00'
sources: []
---

**API contracts in a machine‑learning system are the *information‑theoretic interface* between modules: they encode the minimal sufficient statistics that one component must expose for another to operate optimally.**

1. **Fundamental problem** – In an end‑to‑end ML pipeline, each stage (data ingestion, feature extraction, model inference, post‑processing) can be developed independently. The only way to guarantee composability is to formalize what a consumer expects and what a producer guarantees.

2. **Why the contract must specify *semantics* and *quality of service*** –  
   - *Semantics*: type, shape, unit, and statistical properties (e.g., “image tensors: H×W×3 in [0,1]”).  
   - *Quality*: latency bounds, throughput, error tolerance.  
   This mirrors the Shannon‑source coding theorem: to reconstruct a signal within distortion \(D\), the interface must carry enough bits per sample; otherwise downstream modules incur irreducible errors.

3. **Deep principle – modularity as a form of convex optimization** – Each component solves a sub‑problem (e.g., classification) under constraints imposed by its contract. The global objective is attained when all local optima align, which occurs precisely when contracts are *tight* yet *feasible*.

4. **Non‑obvious insight** – **Versioning is not just backward compatibility; it is a safety margin against distribution shift.** By publishing a “contract version” along with a statistical signature (e.g., mean‑covariance snapshot), downstream systems can automatically trigger retraining or fallback logic when the data drift exceeds acceptable bounds.

5. **Preparation tip for an interview** –  
   - Sketch the *information flow* diagram.  
   - Enumerate contract fields: data type, shape, serialization format, QoS, and versioning policy.  
   - Explain how each field is derived from the underlying optimization objective (e.g., latency × error budget).  

This principled view turns a checklist into an analytically grounded design strategy that impresses interviewers and ensures robust ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
