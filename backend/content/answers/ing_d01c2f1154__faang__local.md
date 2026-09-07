---
qid: ing_d01c2f1154__faang__local
question: 'Explain: Where to start — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 415
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:44:32-05:00'
sources: []
---

**Clarify**  
You’re asking how a data‑science team should kick off an event‑driven ML system—i.e., ingest real‑time events, trigger models, and push predictions downstream. Assume we have streaming sources (Kafka/Redis), a model registry, and downstream consumers (dashboards or alerts).  

**Approach**  
1. **Define the data flow:** source → ingestion → preprocessing → feature store → inference → sink.  
2. **Choose an event broker** that guarantees ordering & durability (e.g., Kafka).  
3. **Implement a lightweight consumer** (Python/Java) that pulls events, applies schema validation, and pushes them to a feature store.  
4. **Serve models via a stateless inference service** (FastAPI + TorchServe or TensorFlow Serving).  
5. **Return predictions as new events** back into the broker for downstream consumers.

**Depth**  
- Use **schema registry** (Confluent) to enforce event contracts.  
- Store features in a **time‑series DB** (TimescaleDB) for replay and drift detection.  
- Deploy models behind a **GPU‑enabled autoscaling group**; expose them through gRPC for low latency.  
- Implement **back‑pressure** by limiting consumer prefetch size and using Kafka’s `max.poll.records`.  

**Edge Cases**  
- Missing or corrupt events → dead‑letter queue.  
- Model drift → continuous evaluation pipeline that republishes updated models.  
- Burst traffic → dynamic scaling of consumers.

**Optimize & Communicate**  
Explain trade‑offs: Kafka gives durability but adds latency; a lightweight in‑process store reduces round trips at the cost of replayability. Highlight monitoring (Prometheus + Grafana) and observability (structured logs, tracing). Conclude with how this architecture scales horizontally, keeps models fresh, and delivers low‑latency predictions—all key points interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
