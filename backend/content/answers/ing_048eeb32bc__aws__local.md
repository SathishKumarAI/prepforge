---
qid: ing_048eeb32bc__aws__local
question: 'Explain: Composite Keys — Partition Key vs Composite Key vs Clustering
  Columns in Cassandra \u2013 BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 567
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:03-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership*, *Dive Deep*  

### Situation  
I was tasked to migrate our legacy customer‑profile service from a relational database to Cassandra for better write throughput and horizontal scaling. The schema design required careful key selection to avoid hot‑spots while supporting efficient range queries on subscription status.

### Task  
Define how **partition keys**, **composite keys** (partition + clustering columns), and **clustering columns** differ, and justify the chosen design in a production setting.

### Action  
1. **Partition Key** – The first column(s) of the primary key that determines which node holds the data. I chose `customer_id` so each customer’s rows are co‑located, ensuring low latency for single‑record lookups.  
2. **Composite Key (Primary Key)** – Cassandra allows multiple columns:  
   ```sql
   PRIMARY KEY ((partition_key), clustering_col1, clustering_col2)
   ```  
   I used `subscription_status` as the first clustering column to support queries like “all active subscribers.”  
3. **Clustering Columns** – Ordered within a partition; they enable range scans and sorting. By adding `created_at DESC` as the second clustering column, we can fetch the most recent subscription changes efficiently.

I modeled the table:

```sql
CREATE TABLE customer_subscriptions (
    customer_id uuid,
    subscription_status text,
    created_at timestamp,
    plan_name text,
    PRIMARY KEY ((customer_id), subscription_status, created_at)
) WITH CLUSTERING ORDER BY (subscription_status ASC, created_at DESC);
```

**Scalability & Availability** – Partitioning on `customer_id` distributes data evenly across 12 nodes. Clustering columns keep related rows contiguous, reducing disk seeks during range queries.  
**Cost** – Using DynamoDB‑compatible Cassandra (e.g., Amazon Keyspaces) eliminates infrastructure ops; we pay only for provisioned throughput (~$0.25 per million writes).  
**Trade‑offs** – The chosen key schema sacrifices global “top‑N active users” analytics, which we mitigated by maintaining a separate materialized view.

### Result  
After deployment, write latency dropped from 200 ms to < 5 ms (95th percentile), and the system sustained 50k writes/sec without throttling. The migration also cut infrastructure costs by 30% compared to our previous RDS setup.  

**Learnings** – Always prototype with realistic workloads; a key design that works for one query pattern can become a bottleneck under another. This iteration taught me to balance *write locality* against *read flexibility*, a core trade‑off in Cassandra schema engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
