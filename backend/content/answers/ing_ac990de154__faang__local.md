---
qid: ing_ac990de154__faang__local
question: 'Explain: Infrastructure Choices — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 589
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:25:08-05:00'
sources: []
---

**Clarify**  
You’re asking how to pick infrastructure when designing a ML system that maps onto the OSI model—i.e., which layers (physical, network, transport, etc.) need specific technologies and why.

*Assumptions I’d confirm:*  
- The system is cloud‑native (public or hybrid).  
- Data ingestion, training, inference, and monitoring are separate concerns.  
- Latency tolerance ranges from sub‑millisecond (real‑time) to seconds (batch).

**Approach**  
1. Map each ML pipeline stage to OSI layers.  
2. For every layer decide a technology that satisfies performance, scalability, and observability.  
3. Validate with cost/ops trade‑offs.

**Depth**  

| OSI Layer | ML Stage | Typical Tech | Why |
|-----------|----------|--------------|-----|
| **Physical / Data Link** | Storage of raw data | Object storage (S3), SSD‑backed DBs | High throughput, durability |
| **Network** | Data movement between services | gRPC/HTTP/2 over TLS + VPC peering | Low‑latency, secure traffic |
| **Transport** | Reliable streaming | Kafka / Pulsar | Exactly‑once semantics for training data |
| **Session** | Service discovery & orchestration | Kubernetes + Istio | Handles session persistence and retries |
| **Presentation** | Feature serialization | Protocol Buffers / Arrow | Compact, schema‑enforced payloads |
| **Application** | Model serving | TorchServe / Triton Inference Server | Auto‑scaling inference endpoints |
| **Business** | Monitoring & A/B testing | Prometheus + Grafana + Feature Store | Observability and experimentation |

Complexity:  
- *Data ingestion*: O(n) per record, Kafka partitions mitigate bottlenecks.  
- *Inference*: O(1) latency per request with autoscaling; cost ≈ $/inference.

**Edge Cases**  
- Sudden spike in inference traffic → autoscaler mis‑prediction → cold starts.  
- Schema drift in feature store → deserialization failures.  
- Network partition → training job stalls.

Test by simulating traffic bursts, rolling schema updates, and intentional VPC outages.

**Optimize & Communicate**  
- Use serverless containers (Knative) for bursty inference to reduce idle cost.  
- Cache frequently used embeddings in Redis to shave 10‑15 ms per request.  
- Explain the trade‑off: e.g., gRPC offers lower latency than REST but adds TLS overhead; Kafka gives durability at the cost of higher write latency.

By mapping ML stages to OSI layers and choosing layer‑appropriate tech, you achieve a modular, scalable, and observable system that can evolve with business needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
