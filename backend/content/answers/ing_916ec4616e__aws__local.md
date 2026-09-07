---
qid: ing_916ec4616e__aws__local
question: 'Explain: Adding a Node — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 428
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:54:54-05:00'
sources: []
---

**Situation & Task**  
While leading the ML‑ops team at a media company, we had to scale our model serving layer from 4 to 64 nodes without downtime or data loss. The existing round‑robin load balancer caused cache thrashing and unpredictable latency.

**Action (Design)**  
I proposed **consistent hashing** with virtual buckets to distribute inference requests across nodes.  
* **Requirements:** minimal rebalancing, high availability, cost control.  
* **AWS services used:**  
  * **Amazon ElastiCache Redis** as a shared metadata store for the hash ring and node heartbeats (high‑read latency <1 ms).  
  * **AWS Lambda + API Gateway** to expose a lightweight inference endpoint that forwards requests to the appropriate node based on the hash.  
  * **Auto Scaling Group** behind an Application Load Balancer to add/remove EC2 instances.  
* **Scalability & Availability:** Consistent hashing limits data movement to ~1/N of keys when adding/removing nodes, ensuring smooth scaling. Redis provides HA with automatic failover; the ALB guarantees 99.95 % availability.  
* **Cost trade‑offs:** Using spot instances for worker nodes reduced compute cost by 35 %, while keeping a small on‑demand pool for burst traffic.

**Result**  
After deployment, request latency dropped from 350 ms to 120 ms (≈65 % reduction), and CPU utilization stabilized at 45 %. The system handled a 10× increase in concurrent requests with zero service interruption.  

**Reflection**  
I took full ownership of the migration plan, “dive deep” into hash‑ring dynamics, and iterated on the design after observing edge‑case rebalancing delays. This experience reinforced my bias for action—moving from theory to production within 48 hrs—and taught me that a well‑chosen caching layer can drastically simplify scaling in ML inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
