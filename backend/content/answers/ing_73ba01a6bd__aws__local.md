---
qid: ing_73ba01a6bd__aws__local
question: 'Explain: Code Implementation — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 505
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:33-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a team that built a global recommendation engine, we hit a bottleneck: the model‑serving nodes were unevenly loaded and hot spots caused latency spikes during peak traffic (~3 M requests/sec). I was tasked to redesign the request routing so each node received a balanced share of traffic without manual rebalancing.

**Action (A)**  
I introduced **consistent hashing** on the request key space, mapping user IDs to model‑serving shards.  
* **Design:**  
  * Use AWS Lambda + API Gateway as entry point; each request hashes `user_id` → virtual node ring.  
  * Store the hash ring in a DynamoDB table (partitioned by region) with TTL for automatic cleanup of orphaned nodes.  
  * Each shard runs on an ECS Fargate cluster behind an Application Load Balancer (ALB).  
* **AWS Services:** Lambda, API Gateway, DynamoDB, ECS/Fargate, ALB, CloudWatch.  
* **Scalability/Availability:** The ring is replicated across Availability Zones; DynamoDB’s eventual consistency guarantees low‑latency reads (<5 ms). Fargate scales automatically with CPU utilization thresholds.  
* **Cost Trade‑offs:** Using Lambda for hashing keeps compute costs negligible compared to maintaining a custom service; DynamoDB pricing is predictable (read/write capacity units).  

**Result (R)**  
After deployment, shard load variance dropped from 32% to <4%, reducing average request latency from 320 ms to 88 ms—a **72% improvement**. Peak traffic handled with no manual intervention, freeing ops time by 12 hrs/week. The system’s resilience was validated during a simulated node failure; traffic automatically rerouted within 200 ms without user impact.

---

### Leadership Principles Highlighted  
* **Customer Obsession:** Directly reduced latency for millions of users.  
* **Ownership & Dive Deep:** Built end‑to‑end solution, tuned hash ring and DynamoDB schema after profiling bottlenecks.  

**Bar‑raiser Takeaway:** I owned the problem, delved into data (latency traces), quantified impact (72% latency reduction), and learned from failure by simulating node loss to validate robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
