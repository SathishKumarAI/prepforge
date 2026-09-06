---
qid: ing_b21d41a74e__fp__local
question: 'Explain: Testing and maintenance — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 457
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:47-05:00'
sources: []
---

**Disaster Recovery (DR) in the Google‑Cloud ML lifecycle**

When a machine‑learning model is deployed, its *state*—training data, feature store, model weights, inference containers, and serving endpoints—constitutes a highly valuable, fragile asset. A “disaster” is any event that jeopardises this state: a rack failure, accidental deletion, software regression, or a ransomware attack.  
From an optimization viewpoint, the goal of DR is to minimise *expected loss* \(L = p_{\text{fail}}\times C_{\text{loss}} + (1-p_{\text{fail}})\times C_{\text{recovery}}\). Here \(p_{\text{fail}}\) is the probability of a catastrophic event, \(C_{\text{loss}}\) the cost of data loss or downtime, and \(C_{\text{recovery}}\) the cost of restoring from backup. The optimal strategy balances frequent snapshots (high \(C_{\text{recovery}}\)) against long‑term storage costs.

In Google Cloud, DR is engineered as a *stateful replication* service:
1. **Immutable artifacts** – Container images and model binaries are stored in Artifact Registry or Cloud Storage with immutable tags; any change creates a new artifact.
2. **Geo‑redundant snapshots** – Compute Engine’s persistent disks are snapshot‑backed to multi‑region Cloud Storage, ensuring that even if an entire region fails, the latest snapshot remains available within seconds.
3. **Infrastructure as Code (IaC)** – Terraform or Deployment Manager scripts capture cluster topology; if a node is lost, IaC can spin up an identical environment in a different zone instantly.

A non‑obvious insight: *DR is not merely “copy‑and‑paste” but a versioned graph of dependencies*. If you restore only the model weights without the exact feature pipeline (feature store schema, transformation logic), the inference will silently fail. Hence GCP’s AI Platform Pipelines automatically capture and version every artifact in the pipeline, allowing true end‑to‑end recovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
