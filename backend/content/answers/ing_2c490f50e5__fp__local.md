---
qid: ing_2c490f50e5__fp__local
question: 'Explain: OpenTelemetry Support — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 380
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:52-05:00'
sources: []
---

### Why OpenTelemetry is a must‑have for ML supply‑chain security

The core problem of *model‑transparency* is **trust**: an end user needs to know that every artefact (dataset, pre‑training code, inference engine) that contributed to a deployed model was exactly what the vendor claims.  
Trust can only be established if we have a verifiable **audit trail** that links each artefact to its provenance and execution environment.

OpenTelemetry supplies that audit trail by collecting *observability data*—traces, metrics, logs—from every component in the pipeline (data ingestion, training jobs, model serving).  
By modelling these events as a directed acyclic graph of operations, we obtain a **causal map** of the supply chain. The graph’s edges encode dependencies; its nodes carry cryptographic hashes and signatures.  

This approach is rooted in *information‑theoretic* security: the entropy of the trace data must exceed the attacker’s ability to forge it. OpenTelemetry guarantees that each edge adds independent randomisation (e.g., timestamps, process IDs), so the joint distribution of the audit trail cannot be reconstructed without the original artefacts.

**Non‑obvious insight:**  
Because traces are time‑ordered, they inherently encode *causal direction*. By attaching a **Merkle tree** over the trace logs, we can prove that no intermediate step was tampered with even if later nodes (e.g., a compromised inference server) are corrupted. This causal‑hashing turns ordinary telemetry into a tamper‑proof ledger, which is why OpenTelemetry is indispensable for model‑transparency systems like sigstore/model‑transparency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
