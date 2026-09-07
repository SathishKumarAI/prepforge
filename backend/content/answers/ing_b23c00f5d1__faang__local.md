---
qid: ing_b23c00f5d1__faang__local
question: 'Explain: Disadvantages — Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 492
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:16-05:00'
sources: []
---

**Clarify**  
You’re asking for the *downsides* of an event‑driven architecture (EDA) in ML pipelines—i.e., a system where components react to emitted events rather than making synchronous calls. I’ll assume we’re talking about production‑grade data ingestion, feature extraction, model training, and inference services.

**Approach**  
1. List core disadvantages.  
2. Explain why each hurts ML ops (latency, consistency, observability).  
3. Provide concrete trade‑offs vs alternatives (microservices, batch).

**Depth**

| Disadvantage | Why it matters for ML |
|--------------|-----------------------|
| **Eventual Consistency** | Feature stores or model artefacts may lag behind the latest data, leading to stale predictions. |
| **Debugging & Observability** | Traces become fragmented across message queues; root‑cause analysis is harder than in synchronous pipelines. |
| **Ordering Guarantees** | Feature engineering steps that depend on a specific sequence (e.g., windowed aggregations) can fail if events arrive out of order unless extra logic is added. |
| **Complexity of State Management** | Maintaining stateful transformations across distributed consumers requires external stores or replay mechanisms, adding operational overhead. |
| **Burst‑handling & Back‑pressure** | Sudden spikes in data volume can overwhelm downstream services; implementing back‑pressure with Kafka or SQS adds latency to training cycles. |
| **Security & Governance** | Fine‑grained access control is harder when many loosely coupled producers/consumers share a broker; auditing message lineage becomes non‑trivial. |

**Edge Cases**  
- High‑frequency streaming models (e.g., fraud detection) may suffer from cumulative event lag.  
- Regulatory compliance requires deterministic audit trails—EDA can obscure that.

**Optimize & Communicate**  
To mitigate, combine EDA with *event sourcing* for state reconstruction and use *schema registries* for compatibility. Leverage observability platforms (OpenTelemetry + Kafka Connect metrics) to surface latency spikes. When explaining this to stakeholders, emphasize the trade‑off: you gain scalability and loose coupling at the cost of added complexity in consistency, debugging, and governance—critical factors when deploying ML models that must be accurate, timely, and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
