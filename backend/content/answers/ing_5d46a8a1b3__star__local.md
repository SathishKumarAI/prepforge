---
qid: ing_5d46a8a1b3__star__local
question: 'Explain: Transactional Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 335
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:34:37-05:00'
sources: []
---

**Situation**  
At a fintech startup I was tasked with migrating our monolithic SQL Server database to a micro‑services architecture while keeping the payment gateway’s read latency below 20 ms during peak traffic.

**Task**  
I needed to provide near real‑time, highly available replicas of the transaction table so that the fraud detection service could query fresh data without locking the primary write node.

**Action**  
I implemented SQL Server’s **Transactional Replication**. First, I set up a Publisher on the main instance and created a Publication that included only the `Transactions` table with its primary key and foreign keys. Then, I configured two Subscribers—one read‑only replica for fraud analytics and another for audit logging. Using the **Push Subscription** model, the Distributor pushed every commit from the Publisher to the Subscribers as soon as it was logged in the transaction log. To avoid blocking writes, I tuned the snapshot schedule to run nightly and enabled **delayed synchronization** so that the Subscribers could process batches during off‑peak hours. Finally, I added a lightweight monitoring script that alerted us if replication lag exceeded 5 seconds.

**Result**  
Read latency for fraud queries dropped from ~120 ms to <20 ms, and we achieved >99.9% data freshness with only a 2 % increase in network traffic. The experience taught me how to balance consistency, availability, and performance by carefully configuring replication topologies and monitoring lag metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
