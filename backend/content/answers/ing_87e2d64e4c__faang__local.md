---
qid: ing_87e2d64e4c__faang__local
question: 'Explain: Disadvantages : — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 542
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:00:11-05:00'
sources: []
---

**Clarify**  
You’re asking for the *disadvantages* of **Service Discovery** in a distributed system, and how it’s used in ML‑centric microservices (e.g., model serving). I’ll assume we’re talking about typical client‑side or server‑side discovery mechanisms (Consul, Eureka, etcd) rather than DNS alone.

**Approach**  
1. List key pain points: complexity, failure modes, performance overhead, security, and operational burden.  
2. Explain each with an ML context example.  
3. Conclude with mitigation ideas and how they trade off against the benefits.

**Depth**  

| Disadvantage | Why it hurts ML workloads |
|--------------|--------------------------|
| **Single point of failure / consistency lag** | Discovery services must be highly available; a split‑brain can cause models to route to stale replicas, leading to inference drift or outages. Consistency delays (e.g., eventual consistency in etcd) mean new model versions may not be visible instantly. |
| **Latency & bandwidth overhead** | Each request often includes a lookup (or caching layer). In low‑latency inference pipelines, even microseconds matter; extra round‑trips can erode the benefits of model scaling. |
| **Operational complexity** | Need to maintain another cluster, secure it, patch it, and monitor health. Misconfiguration can cause routing loops or black holes, hard to debug in a production ML stack. |
| **Security surface** | The discovery service exposes an API that must be authenticated; any breach could allow malicious traffic to reach model endpoints or exfiltrate data. |
| **Scalability limits** | Large numbers of micro‑services (hundreds of model variants) can overwhelm the registry’s query throughput, causing bottlenecks during burst inference periods. |

**Edge Cases**  
- Sudden spike in traffic → discovery cache thrashing.  
- Network partitions → inconsistent view of healthy instances.  
- Zero‑downtime deployment → race between new and old versions.

**Optimize & Communicate**  
Mitigations: use *client‑side caching* with short TTLs, implement *health‑check back‑off*, and separate discovery from data plane (e.g., Envoy). Emphasize that the trade‑off is between dynamic scaling of model instances and the added operational overhead. In a FAANG interview, I’d frame this as “while service discovery gives elasticity, it introduces a new failure domain; balancing that against ML latency constraints is key.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
