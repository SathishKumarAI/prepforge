---
qid: ing_35c91d8e87__star__local
question: What are they used for? — Database Isolation Levels
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 323
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:41-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time analytics dashboard that pulled data from the same PostgreSQL cluster used by our transactional e‑commerce app. When the dashboard refreshes every minute, it started reporting stale totals and occasional duplicate orders, especially during peak sales.

**Task:**  
I had to ensure that analytics queries saw consistent snapshots without blocking order processing, so we could deliver accurate metrics to executives while keeping checkout latency under 200 ms.

**Action:**  
I began by reviewing the isolation levels: READ COMMITTED, REPEATABLE READ, and SERIALIZABLE. I ran a series of benchmark tests with each level on our workload mix. Using pg_stat_activity and transaction logs, I measured lock contention and read consistency. I discovered that READ COMMITTED caused “phantom reads” in our aggregation queries, while SERIALIZABLE introduced unacceptable abort rates during flash sales. Switching to REPEATABLE READ for analytics sessions, combined with a separate replica for the dashboard, gave us snapshot isolation without impacting write throughput. I also added advisory locks around critical update blocks to avoid deadlocks.

**Result:**  
The change cut metric drift from ±12% down to ±0.3%, and checkout latency remained below 150 ms even during peak traffic. The analytics team now receives accurate, real‑time data with no service interruptions. I learned that choosing the right isolation level is a balance between consistency needs and performance trade‑offs, and that testing under realistic loads is essential before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
