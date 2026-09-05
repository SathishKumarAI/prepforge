---
qid: ing_3087b205bc__star__local
question: 'Explain: Proposal: Auditable MCP: tool-internal audit events sealed into
  a host-side tamper-evident ledger'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 334
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:05:32-05:00'
sources: []
---

**Situation:**  
In my last role I was leading the security stack for a cloud‑native recommendation engine that handled billions of user interactions per day. A regulatory audit required us to prove that every machine learning model update and inference request could be traced back to an authenticated source without tampering.

**Task:**  
I had to design an internal “auditable MCP” (Model Control Plane) that would capture all critical events—model deployments, parameter changes, inference triggers—and store them in a tamper‑evident ledger accessible only by the host infrastructure, not the containers themselves.

**Action:**  
I built a lightweight Rust daemon that ran inside each Kubernetes pod. It intercepted gRPC calls to the model serving API and emitted JSON event blobs with cryptographic signatures (ed25519). These events were written to an append‑only SQLite database on the node’s root filesystem, then hashed into a Merkle tree whose root was stored in a signed journal file on persistent storage. The daemon also exposed a REST endpoint for auditors to fetch proofs of inclusion. I used OpenTelemetry for distributed tracing so that event ordering could be reconstructed across shards.

**Result:**  
After deployment, audit teams verified 99.9 % of model updates with zero false positives. Our system reduced compliance review time from weeks to hours and earned us a “Zero‑Trust Certified” badge from the internal security board. I learned how cryptographic primitives, lightweight local storage, and observability can combine to give ML pipelines real auditability without hurting latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
