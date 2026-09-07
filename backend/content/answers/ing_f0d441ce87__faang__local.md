---
qid: ing_f0d441ce87__faang__local
question: 'Explain: Network Protocols — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 508
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:59:28-05:00'
sources: []
---

**Clarify**  
You’re asking how to design a system that serves ML models over network protocols (e.g., REST, gRPC). I’ll assume: *stateless inference endpoints*, *low latency* (<10 ms), *high throughput* (~10k RPS), and *scalable* across regions. Clarify if you need batch jobs or only real‑time serving.

**Approach**  
1. **Model ingestion & versioning** – store artifacts in S3/Artifact Registry, tag with semantic versions.  
2. **Inference layer** – containerized microservice per model version; expose gRPC for binary payloads and optional REST fallback.  
3. **Service mesh / API gateway** – route traffic by URL or header (`model=v1`), enable traffic splitting for A/B testing.  
4. **Autoscaling & load balancing** – use Kubernetes HPA + node‑local GPU pools; keep warm pool of 1–2 replicas per version.  
5. **Observability** – Prometheus metrics (latency, error rate), OpenTelemetry tracing, and logs to ELK for debugging.

**Depth**  
- *Protocol choice*: gRPC uses Protobuf, supports multiplexed streams, lower overhead than JSON REST; critical when payloads are large or latency tight.  
- *Serialization*: use binary formats (Protobuf/FlatBuffers) to reduce bandwidth.  
- *Batching*: implement client‑side request batching or server‑side queueing for inference farms.  
- *Deployment*: CI/CD pipelines that automatically promote model artifacts, run integration tests, and perform canary deployments.

**Edge Cases**  
- Model drift → monitor predictions vs ground truth; trigger re‑training pipeline.  
- Outage of a region → fallback to nearest healthy region via global load balancer.  
- Sudden traffic spike → cold start latency spikes; keep warm pool or use serverless (e.g., Cloud Run) for bursty workloads.

**Optimize & Communicate**  
Explain trade‑offs: gRPC gives lower latency but requires clients to support it; REST offers wider compatibility at the cost of overhead. Highlight that using a service mesh (Istio/Linkerd) adds observability and traffic control without changing protocol logic. Conclude by stressing that architecture should be modular so new protocols or model types can be added with minimal friction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
