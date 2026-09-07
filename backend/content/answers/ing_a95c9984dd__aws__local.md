---
qid: ing_a95c9984dd__aws__local
question: 'Explain: CAP in Real Systems — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 457
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:22-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning our recommendation engine for the **Prime Video** catalog, which needed to serve 10 M concurrent users with <200 ms latency while guaranteeing high availability during peak traffic (e.g., Black Friday). The existing monolith struggled with the CAP trade‑offs: it either lost data consistency or became unavailable.

**Action**  
I applied the CAP theorem to choose a *AP* architecture that favored Availability and Partition tolerance, then introduced eventual consistency with a **DynamoDB Global Table** replicated across us-east-1 and eu-west-1. To preserve a strong read‑write consistency for critical user sessions (e.g., watchlist updates), I added a **Kinesis Data Streams** layer feeding an **SQS FIFO queue** that triggers an **Lambda** idempotent write to the primary table, ensuring *Eventual Consistency + Write Isolation*.  

I also implemented a **CloudWatch Alarms** threshold on latency (>250 ms) that auto‑scales the Lambda concurrency and triggers a **AWS WAF** rule set to mitigate DDoS spikes. The design keeps read traffic at 99.9% availability with <1 % stale data, while write latency remains below 120 ms.

**Result**  
Post‑deployment, we achieved:
- **99.95% uptime** during the 72‑hour sale window (vs. 99.7% pre‑design).  
- **Read latency dropped to 180 ms average**, with a 60 % reduction in cold starts via Lambda provisioned concurrency.  
- Cost decreased by 15 % due to reduced EC2 overprovisioning.

**Reflection**  
I learned that *balancing CAP* isn’t a one‑size solution; it requires iterative profiling and a clear definition of “acceptable staleness.” Future iterations will experiment with **DynamoDB Streams + EventBridge** for real‑time analytics, keeping the system *Invent & Simplify* while still owning end‑to‑end reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
