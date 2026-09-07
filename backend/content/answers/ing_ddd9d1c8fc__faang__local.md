---
qid: ing_ddd9d1c8fc__faang__local
question: 'Explain: What to Log — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 449
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:14:37-05:00'
sources: []
---

**Clarify**  
We need to identify what telemetry or audit data should be captured when deploying an AI system so that we can monitor, audit and mitigate safety‑and‑governance risks (bias, privacy, misuse). I’ll assume the model runs in production, receives user inputs, outputs decisions, and is governed by internal compliance policies.

**Approach**  
1. Enumerate risk categories: *decision provenance*, *data lineage*, *model drift*, *explainability*, *audit trails*.  
2. For each category, list concrete log fields.  
3. Define retention & access controls.  
4. Build a lightweight schema that can be shipped to a central observability platform.

**Depth**  

| Category | Log Fields (example) |
|----------|----------------------|
| **Input** | timestamp, user_id, request_payload hash, source IP, geo‑location |
| **Model** | model_version, architecture fingerprint, hyperparameters snapshot |
| **Output** | decision, probability/confidence score, suggested alternatives |
| **Context** | system state (CPU/memory), batch ID, feature extraction trace |
| **Audit** | operator_id (if manual override), compliance flag set, reason code |
| **Governance** | bias‑risk score, privacy risk tags, consent status |

*Complexity*: O(1) per request; storage scales with traffic.  
*Trade‑offs*: richer logs improve auditability but increase cost and privacy footprint.

**Edge Cases**  
- *Non‑deterministic models*: log random seeds to reproduce outputs.  
- *Encrypted payloads*: store hash only, preserve confidentiality.  
- *High‑volume bursts*: use sampling or rollover policies to avoid log bloat.

**Optimize & Communicate**  
We can compress logs (e.g., protobuf), stream them via Kafka, and enforce schema evolution with Avro. I’d present this plan in a 5‑slide deck: problem scope → risk taxonomy → logging blueprint → cost model → next steps. This demonstrates clear structure, technical depth, and a roadmap for safe AI governance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
