---
qid: ing_bfc34c741a__star__local
question: 'Explain: Database Choice — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 354
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:10-05:00'
sources: []
---

**Situation:**  
During my final year project I had to build a recommendation engine that served millions of users. The team faced frequent bottlenecks in query latency and struggled with data consistency across services.

**Task:**  
I was tasked with selecting an appropriate database architecture for the interview prep, ensuring it could handle high read/write throughput, support eventual consistency for user profiles, and allow quick analytics on user behavior.

**Action:**  
First, I mapped out the key workloads: real‑time personalization (low latency reads), background model training (batch writes), and reporting dashboards (analytical queries). I benchmarked PostgreSQL, MongoDB, and Cassandra using synthetic OLTP/OLAP tests. I also built a small prototype in AWS with DynamoDB + Redshift, measuring read latency (< 5 ms) versus write amplification. After weighing CAP trade‑offs, I chose a hybrid approach: DynamoDB for real‑time data, Amazon S3 + Athena for batch analytics, and a Redis cache layer to serve the top 1% of hot users. I documented this design in a mock interview deck, highlighting partitioning strategies, secondary indexes, and fallback read paths.

**Result:**  
The prototype handled 200k concurrent reads with <7 ms latency and processed nightly batches in under 30 minutes. In the actual system‑design interview I explained the trade‑offs clearly, secured an “excellent” score on database choice, and learned that aligning workload patterns to a hybrid data store can outperform monolithic solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
