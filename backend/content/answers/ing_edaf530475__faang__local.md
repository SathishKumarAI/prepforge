---
qid: ing_edaf530475__faang__local
question: 'Explain: Networking and Communication — Must Know System Design Building
  Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 569
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:53:02-05:00'
sources: []
---

**Clarify**  
You’re asking for the *core networking & communication building blocks* that underpin any ML‑infrastructure system (e.g., data ingestion, model serving). I’ll assume we’re targeting low‑latency, high‑throughput pipelines that can scale horizontally and tolerate failures.

**Approach**  
1. List the primitives: **Transport protocols, serialization, discovery, load balancing, fault tolerance, monitoring, security**.  
2. Map each to an ML scenario (data pipeline vs. inference).  
3. Highlight trade‑offs between *TCP/UDP*, *gRPC/protobuf* vs. *REST/json*, and *service mesh* vs. bare‑metal.

**Depth**  

| Building Block | Typical Choice | Why it Matters in ML |
|----------------|---------------|----------------------|
| **Transport** | TCP (reliable) for training data; UDP + DTLS for streaming telemetry | Guarantees ordering when gradients must arrive intact; low‑latency sensor streams tolerate packet loss. |
| **Serialization** | Protobuf / FlatBuffers | Compact, fast schema evolution—critical for large feature vectors and model artifacts. |
| **Service Discovery & Load Balancing** | Consul/Kubernetes DNS + Envoy sidecar | Enables dynamic scaling of inference nodes; avoids “hot‑spot” traffic to a single endpoint. |
| **Fault Tolerance** | Retry with exponential backoff, circuit breakers, leader election (Raft) | Prevents cascading failures when a GPU node goes down during training. |
| **Observability** | OpenTelemetry + Prometheus/Grafana | Detect bottlenecks in data ingestion or inference latency spikes. |
| **Security** | mTLS, OAuth2, JWT | Protect model weights and user data; enforce fine‑grained access to endpoints. |

**Edge Cases**  
- *Burst traffic*: queueing (Kafka) + backpressure.  
- *Model version drift*: sticky sessions or blue/green deployments.  
- *Cross‑region latency*: WAN optimization, Geo‑routing.

**Optimize & Communicate**  
Explain that the optimal stack is a trade‑off: use **gRPC+Protobuf** for internal microservices (fast, typed), fallback to **REST/json** for external APIs where human readability matters. Highlight that monitoring and observability should be baked in from day one; without it you can’t justify scaling decisions. Wrap up by stressing the iterative nature—start simple (TCP + gRPC), then layer on service mesh & mTLS as traffic grows. This demonstrates clear problem‑solving, depth, and practical trade‑offs that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
