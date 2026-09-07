---
qid: ing_775bb563c9__aws__local
question: 'Explain: Unique, Primary, and Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 482
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:06-05:00'
sources: []
---

**Situation & Task**  
I led the migration of our recommendation engine from an on‑premises MySQL cluster to Amazon Aurora Serverless v2. The schema had millions of rows per table, and we were seeing 30 % slower query times for user‑profile lookups. I was tasked with redesigning the indexing strategy to cut latency while keeping cost in check.

**Action (Design & AWS Services)**  
1. **Unique Indexes** – Enforced data integrity on `user_id` and `item_id`. In Aurora, a unique index automatically creates an underlying B‑tree; we kept it because the cardinality was 100 % and it prevented duplicate recommendation entries.  
2. **Primary (Clustered) Index** – Chosen on `(user_id, timestamp)` to match our most frequent query pattern (`SELECT * FROM recommendations WHERE user_id = ? ORDER BY timestamp DESC LIMIT 20`). In Aurora, this is the table’s sort key; it physically orders rows and thus eliminates a costly sort phase.  
3. **Clustered Indexes on Secondary Tables** – For the `user_preferences` lookup we used a composite clustered index `(user_id, preference_type)` to avoid random I/O when joining with the recommendations table.  
4. **Secondary (Non‑clustered) Indexes** – Added an index on `(item_id)` only for the occasional global “top items” query. This kept write amplification low.

I leveraged Aurora’s **Aurora Serverless v2** auto‑scaling to match traffic spikes, and used **Amazon RDS Performance Insights** to validate that the new indexes reduced average query latency from 120 ms to 42 ms—a 65 % improvement—while keeping I/O costs down by ~30 %.

**Result**  
- **Customer Obsession**: Faster recommendations directly improved click‑through rates, boosting revenue by 12 %.  
- **Ownership & Dive Deep**: I identified the root cause (misaligned indexes) and iterated until we hit the target latency.  

**Learning from Failure**  
Initially I over‑indexed on `item_id`, causing write bottlenecks during peak hours. After profiling with CloudWatch, I removed the redundant index—demonstrating bias for action and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
