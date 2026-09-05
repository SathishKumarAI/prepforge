---
qid: ing_ac990de154__star__local
question: 'Explain: Infrastructure Choices — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 447
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:31-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we were building a real‑time fraud detection pipeline that ingested millions of transactions per day and had to deliver alerts within 2 seconds. The existing monolithic architecture was bottlenecked by slow network I/O and uncoordinated microservices.

**Task:**  
Redesign the infrastructure so that data ingestion, feature extraction, model inference, and alerting could scale horizontally while keeping latency under our SLA and ensuring secure data flow across services.

**Action:**  
I mapped each component to OSI layers:  
- **Layer 7 (Application):** Implemented gRPC for service‑to‑service calls, enabling efficient binary payloads and built‑in authentication.  
- **Layer 6 (Presentation):** Used Protobuf schemas to serialize feature vectors, guaranteeing backward compatibility.  
- **Layer 5 (Session):** Employed a lightweight token‑based session manager with mutual TLS to maintain secure sessions across the cluster.  
- **Layer 4 (Transport):** Switched from TCP to QUIC for lower head‑of‑line blocking and faster handshakes, reducing per‑message latency by ~30 ms.  
- **Layer 3 (Network):** Deployed a service mesh (Istio) to enforce fine‑grained routing rules and observability across the microservices.  
- **Layers 2 & 1:** Leveraged high‑speed InfiniBand NICs for intra‑cluster traffic, ensuring sub‑microsecond packet delivery.

I also introduced a distributed cache (Redis Cluster) at Layer 5/4 to store pre‑computed features, cutting inference time by 25%.

**Result:**  
Latency dropped from an average of 1.8 seconds to 0.9 seconds, exceeding the SLA by 50 %. Throughput scaled from 500k to over 2M transactions per hour without additional hardware. I learned that aligning system layers with OSI concepts clarifies responsibilities and exposes optimization points across the stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
