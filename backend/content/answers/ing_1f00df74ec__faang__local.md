---
qid: ing_1f00df74ec__faang__local
question: 'Explain: we need to be able to rewrite — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 514
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:56:57-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks: *“Explain why we need to rewrite the YouTube system for scalability, and outline what that rewrite would entail.”*  
Assumptions I’d confirm:  
- Current monolithic architecture is a bottleneck under peak traffic.  
- Latency, fault‑tolerance, and storage growth are primary pain points.  
- The goal is to support > 10× traffic while keeping cost per view low.

**2️⃣ Approach**  
1. Decompose the monolith into micro‑services (auth, video ingest, transcoding, recommendation, playback).  
2. Adopt a data‑centric design: event streams + CQRS for real‑time analytics.  
3. Shift to cloud‑native primitives—container orchestration (K8s), serverless for burst workloads, CDN edge caching.  
4. Introduce multi‑region deployment with automatic failover.

**3️⃣ Depth**  
- **Ingress & Transcoding**: Use a message queue (Kafka) to buffer uploads; workers in separate pods scale horizontally.  
- **Storage**: Replace single object store with a tiered solution—hot SSD for recent videos, cold archival on S3 Glacier.  
- **Recommendation Engine**: Move from batch‑only to online learning via streaming pipelines (Flink/Beam).  
- **Playback**: Serve pre‑generated adaptive‑bitrate manifests from CDN; use edge caching and HTTP/2 multiplexing.  
Complexities: data consistency across services, maintaining session affinity for live streams, cost of multi‑region replication.

**4️⃣ Edge Cases**  
- Sudden traffic spikes (e.g., viral events) → autoscaling limits must be tested.  
- Data loss during migration; implement blue‑green deployments.  
- Latency spikes in remote regions; test CDN edge placement.  

**5️⃣ Optimize & Communicate**  
- Incrementally roll out services, validate with A/B tests on latency and error rates.  
- Instrument telemetry (Prometheus + Grafana) for observability.  
- Communicate trade‑offs: micro‑services increase operational overhead but yield elasticity; serverless reduces idle compute cost but can incur cold‑start latency.

*Bottom line*: Rewriting is essential to decouple tightly coupled components, enable independent scaling, and leverage cloud-native patterns that keep YouTube performant as user demand explodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
