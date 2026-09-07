---
qid: ing_18df58e76c__faang__local
question: 'Explain: Service Registration Options — System Design: What is Service
  Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 470
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:42:38-05:00'
sources: []
---

**Service Discovery – A Quick FAANG‑style Breakdown**

| Stage | Key Points |
|-------|------------|
| **Clarify** | *Problem:* In a microservices architecture we need each service instance to locate others without hard‑coding addresses.  Assume stateless, autoscaling services behind load balancers, and we want low latency discovery.  Ask: “Do we need client‑side or server‑side routing? Are health checks required?” |
| **Approach** | 1️⃣ **Registry** – a central store (e.g., Consul, Eureka, etcd) holding service names → instance endpoints. <br>2️⃣ **Registration** – services announce themselves on start and deregister on shutdown. <br>3️⃣ **Discovery** – clients query the registry for an up‑to‑date list or receive push notifications.  Optionally add *load balancing* (round‑robin, least‑conn) and *health checks* to filter unhealthy nodes. |
| **Depth** | *Implementation:* Each instance registers with a TTL; the registry runs heartbeats. Clients cache results for `cacheTTL` and refresh after expiry. Complexity: O(1) lookup in a hash map; registration/deregistration are O(log n) if stored sorted.  Trade‑off: central point of failure vs. simplicity versus a gossip‑based peer discovery (e.g., Kubernetes DNS). |
| **Edge Cases** | • Network partitions → stale entries.<br>• Rapid scale‑up/scale‑down causing “hot‑spots” in the registry.<br>• Service churn leading to thrashing; mitigate with exponential backoff. Test by simulating node failures and verifying client retries. |
| **Optimize & Communicate** |  • Use *distributed consensus* (Raft) for high availability of the registry.<br>• Push‑based notifications reduce latency vs polling.<br>Explain to interviewers: “I’d start with a lightweight Consul cluster, add health checks, then evaluate a peer‑to‑peer gossip fallback if we hit partitioning issues.”  This shows problem framing, technical depth, and proactive optimization. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
