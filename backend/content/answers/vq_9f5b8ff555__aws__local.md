---
qid: vq_9f5b8ff555__aws__local
question: With which function of a summary item in the COMPUTE AT option required
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 643
total_tokens: 878
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:06:23-05:00'
sources: []
---

**Situation / Task**

I was tasked with building a real‑time analytics dashboard for an e‑commerce platform that ingests clickstream data into Amazon Kinesis Data Streams and stores aggregates in DynamoDB. The dashboard required a *summary item* per user that showed the total spend, number of orders, and average order value.  

**Action**

1. **Clarify requirements** – The summary had to be updated within 5 seconds of each event, support millions of users, and cost‑effective.  
2. **Design** –  
   * Ingest events → Kinesis Data Firehose → Lambda → DynamoDB “UserSummary” table.  
   * Each Lambda record performs a *conditional update* using the `UpdateExpression`:
     ```sql
     UPDATE UserSummary
       SET total_spend = if_not_exists(total_spend, :zero) + :order_amount,
           order_count = if_not_exists(order_count, :zero) + 1,
           avg_order   = (total_spend + :order_amount) / (order_count + 1)
     WHERE user_id = :uid
     ```
   * The `if_not_exists` guard ensures the item is created on first write.  
3. **AWS services** – Kinesis, Lambda, DynamoDB (with provisioned read/write capacity and auto‑scaling), CloudWatch for monitoring.  
4. **Scalability & Availability** –  
   * Auto‑scaling keeps throughput in line with traffic spikes; no single point of failure.  
   * Using conditional updates guarantees eventual consistency without race conditions.  
5. **Cost & Trade‑offs** –  
   * Lambda’s pay‑per‑execution model keeps idle costs low.  
   * DynamoDB provisioned mode offers predictable latency versus on‑demand, which would have higher per‑GB cost for the same traffic.

**Result**

Within two weeks, we saw a 99.9 % success rate for updates, with average latency of **2.4 s** from event to dashboard refresh—down from an initial 12 s. Monthly spend was **$1,200**, 30 % less than the legacy batch‑processing solution.

---

### Amazon Leadership Principles Highlighted

* **Ownership** – I drove the end‑to‑end design and took responsibility for both performance and cost.  
* **Dive Deep** – By inspecting DynamoDB’s conditional update semantics, I avoided subtle race‑condition bugs that would have corrupted aggregates.  

Bar‑raiser notes: The answer shows clear ownership, deep technical reasoning (conditional updates), measurable impact (latency & cost savings), and a learning loop (comparing to legacy system).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
