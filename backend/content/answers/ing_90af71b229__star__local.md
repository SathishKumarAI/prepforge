---
qid: ing_90af71b229__star__local
question: 'Explain: MCP architecture ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 408
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:17-05:00'
sources: []
---

**Situation** – At my last role I was tasked with scaling the recommendation engine for a streaming platform that served over 12 M users daily. Our existing model pipeline hit latency spikes during peak hours because the inference server couldn’t keep up with the burst traffic.

**Task** – I needed to design an architecture that would reduce end‑to‑end prediction time by at least 40% while keeping cost per request under $0.0001 and ensuring zero downtime during rollout.

**Action** – I introduced a Glean‑inspired Multi‑Container Prediction (MCP) server:  
1. **Model sharding** – split the ensemble into five lightweight sub‑models, each running in its own Docker container on Kubernetes.  
2. **Feature cache layer** – built a Redis-backed LRU cache to serve high‑frequency user features, cutting feature fetch time from 15 ms to <2 ms.  
3. **Dynamic batching** – implemented a request queue that groups similar inference calls into micro‑batches (size 32–64) before sending them to the containers, improving GPU utilization by ~30%.  
4. **Zero‑copy serialization** – used protobuf with flatbuffers to avoid memory copies between services.  
5. **Canary rollout** – deployed new MCP pods behind an Istio sidecar that performed A/B testing against the legacy monolith.

**Result** – The MCP server cut average inference latency from 120 ms to 68 ms (43% reduction) and increased throughput from 2,500 req/s to 4,800 req/s. Cost per request dropped by 22%. I learned that careful container orchestration combined with smart caching can turn a monolithic model into a highly scalable micro‑service without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
