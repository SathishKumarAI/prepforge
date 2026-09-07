---
qid: ing_f9ecbbb640__faang__local
question: 'Explain: Non-Functional Requirements (What Are the Constraints?)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 423
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:20:43-05:00'
sources: []
---

**Non‑Functional Requirements (NFRs) – The Constraints that Shape ML Systems**

| Step | What to Do |
|------|------------|
| **Clarify** | *Restate:* “What constraints must our ML solution satisfy?” <br>*Assumptions:* production latency, data privacy laws, model explainability, budget, and deployment platform. |
| **Approach** | 1. List all stakeholder‑driven NFRs.<br>2. Translate each into measurable metrics (e.g., ≤ 50 ms inference, ≥ 95 % GDPR compliance). <br>3. Prioritize by risk & cost. |
| **Depth** | • **Latency/Throughput:** Optimize feature extraction, batch inference, use ONNX/TensorRT.<br>• **Scalability:** Horizontal scaling with Kubernetes + autoscaling; model sharding for large ensembles.<br>• **Reliability:** Redundancy, circuit breakers, graceful degradation.<br>• **Security & Privacy:** Differential privacy, secure enclaves, encryption at rest/transit. <br>• **Maintainability:** CI/CD pipelines, versioned artifacts, automated retraining triggers. <br>Complexity: O(log N) for sharded inference; cost trade‑off between GPU vs CPU nodes. |
| **Edge Cases** | • Sudden spike in traffic → auto‑scale limits.<br>• Data drift → monitoring & rollback.<br>• Regulatory changes → audit logs and compliance checks fail. |
| **Optimize & Communicate** | Propose a “NFR scorecard” to track progress; iterate with product & ops teams. Highlight trade‑offs: higher latency vs lower cost, explainability vs raw accuracy. End by summarizing that NFRs are the invisible contract keeping ML deployments robust, compliant, and user‑trustworthy. |

*Word count:* ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
