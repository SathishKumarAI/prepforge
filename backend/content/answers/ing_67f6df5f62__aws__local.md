---
qid: ing_67f6df5f62__aws__local
question: 'Explain: Need of Data Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 428
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:19:37-05:00'
sources: []
---

**Situation & Task**  
When I was leading the migration of our e‑commerce catalog from an on‑premise MySQL cluster to Amazon RDS, we discovered that read latency spiked during flash sales—customers were seeing stale data or experiencing timeouts. The business required 99.999% read availability and sub‑200 ms response times across North America.

**Action (Design & Implementation)**  
1. **Choose the right replication model** – I opted for *RDS Multi‑AZ* for primary–standby failover, plus *Aurora Global Database* to replicate reads to a secondary region in < 100 ms latency.  
2. Configured *read replicas* in each AZ and set up *AWS Data Migration Service (DMS)* for continuous incremental load from the legacy DB.  
3. Added **Global Tables** on DynamoDB for session data that needed low‑latency writes across regions.  
4. Implemented **Amazon CloudWatch alarms** to trigger an automated failover when replica lag exceeded 500 ms, and scheduled *scheduled scaling* of read capacity during peak windows.

**Result**  
- Read latency dropped from 750 ms to 180 ms (≈ 76% improvement).  
- Uptime increased from 99.95% to 99.999% for the catalog service.  
- Cost remained within budget: Multi‑AZ + Global DB added ~$1,200/month but avoided potential revenue loss of $30k/day during outages.

**Reflection & Learning**  
I realized that *data replication* isn’t just a backup strategy; it’s a core part of availability and performance. By diving deep into replication lag metrics, I tuned the system to balance cost vs. resilience—an embodiment of **Ownership**, **Dive Deep**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
