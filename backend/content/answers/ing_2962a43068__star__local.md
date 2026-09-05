---
qid: ing_2962a43068__star__local
question: 'Explain: Horizontal Scaling — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 398
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:51:14-05:00'
sources: []
---

**Situation** – In my last role I led a recommendation engine that served 3 million users daily. The latency hit 300 ms on peak traffic and our A/B test showed a 12 % drop in click‑through rate when the load spiked, so we had to scale horizontally without breaking the model pipeline.

**Task** – My goal was to redesign the inference layer so that it could handle double the traffic while keeping prediction latency under 200 ms and cost per request below $0.0001.

**Action** – I broke down the problem into three layers: data ingestion, model serving, and result aggregation.  
1. Adopted a **micro‑service architecture** with Docker/K8s, using **Istio** for traffic routing.  
2. Implemented **model sharding** across GPUs by partitioning user segments (feature‑based hashing).  
3. Switched from **REST** to **gRPC** and added **protobuf** serialization to cut payload size by 40 %.  
4. Leveraged **TensorRT** for inference acceleration, achieving a 2× speedup per GPU.  
5. Added an autoscaler that monitored queue depth and spun up new pods when latency exceeded 250 ms.  
6. Introduced **canary deployments** with feature flags to roll out changes safely.

**Result** – Traffic doubled within two weeks; average inference latency dropped from 300 ms to 140 ms, a 53 % improvement. The cost per request fell to $0.00008, saving ~$15k/month. I learned that horizontal scaling is not just adding nodes—it’s about re‑architecting data flow, choosing the right serialization, and automating elasticity based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
