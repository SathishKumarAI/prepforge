---
qid: ing_91503e1944__aws__local
question: 'Explain: Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 433
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:54:33-05:00'
sources: []
---

**Situation & Task (S)**  
I led a project to build a highly‑available recommendation engine for a global e‑commerce platform. The system had to route millions of requests per second to one of 200+ model servers, while minimizing cache miss latency and handling server churn without downtime.

**Action (A)**  
To satisfy *Customer Obsession* and *Ownership*, I introduced **Consistent Hashing** across the cluster:

1. **Hash ring construction** – Each server receives multiple virtual nodes; we use `MD5` of “serverIP:port” as the key.
2. **Request routing** – Client hashes the user ID, finds the first clockwise node on the ring, and forwards the request to that server.
3. **AWS services** –  
   * **Elastic Load Balancer (ALB)** for health checks and graceful deregistration.  
   * **Amazon ECS / Fargate** hosts model containers; Auto Scaling adjusts task counts.  
   * **DynamoDB** stores a lightweight metadata table of node status to allow clients to refresh the ring without full reloads.

**Result (R)**  
- Reduced cache‑miss latency by **35 %** (from 120 ms to 78 ms).  
- Achieved **99.999% availability** during a 30‑minute server failure; no user requests were redirected to unhealthy nodes thanks to the ring’s graceful degradation.  
- Cut operational cost by **12 %** compared to a round‑robin approach, because fewer cache evictions meant less traffic to S3 for model reloads.

**Learnings (L)**  
I realized that *Dive Deep* means profiling hash collisions and virtual node counts; after testing 3x vs 5x replicas I settled on the sweet spot. The bar‑raiser expects this depth, clear metrics, and ownership of both performance and cost—exactly what this solution delivers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
