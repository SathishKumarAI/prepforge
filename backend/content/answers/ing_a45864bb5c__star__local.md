---
qid: ing_a45864bb5c__star__local
question: 'Explain: OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 405
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:04-05:00'
sources: []
---

**Situation** – I was tasked with deploying a real‑time fraud detection model for a payment platform that had to handle 10 k requests per second while guaranteeing sub‑100 ms latency.

**Task** – Build an end‑to‑end system that could ingest data, run the model, and return results under strict SLA, all while ensuring maintainability and scalability.

**Action** – I mapped each component onto the OSI layers.  
- **Application layer:** RESTful API built with FastAPI to expose predictions; JSON schema enforced contract.  
- **Presentation layer:** Serialized input features via Protobuf for compactness, reducing payload size by 35 %.  
- **Session layer:** Managed gRPC connections between API gateway and inference microservice, enabling keep‑alive and multiplexing of requests.  
- **Transport layer:** Used TCP with tuned congestion control (CUBIC) and TLS 1.3 for secure, low‑overhead transport.  
- **Network layer:** Deployed Kubernetes ingress with Envoy; used service mesh to route traffic based on latency metrics.  
- **Data Link/Physical layers:** Ran the containers on NVMe SSD nodes with RDMA over Converged Ethernet (RoCE) to minimize packet loss and jitter.

I also implemented a lightweight caching layer at the application level, reducing inference calls by 22 %.

**Result** – The system met the SLA, achieving an average latency of 78 ms and handling peak traffic without throttling. It cut operational costs by 18 % through efficient serialization and reduced network hops. I learned that aligning ML deployment with OSI principles clarifies responsibilities across layers and leads to measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
