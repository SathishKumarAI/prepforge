---
qid: ing_20fd49d42d__aws__local
question: 'Explain: Partition Key vs Composite Key vs Clustering Columns in Cassandra
  – BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 493
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:41:53-05:00'
sources: []
---

**Situation & Task**  
At BMC I led a migration of our on‑prem Cassandra analytics cluster to Amazon Keyspaces (Cassandra API) for the new Customer Insights platform. The goal was to reduce operational overhead while ensuring we could still run real‑time segmentation queries at 10 M rows per day.

**Action – Technical Design**  
I started by dissecting *partition keys*, *composite keys*, and *clustering columns*:

| Element | Purpose in Cassandra | AWS Service Impact |
|---------|----------------------|--------------------|
| **Partition key** | Determines the node that holds the data; must be highly selective. | In Keyspaces, partition key maps to a logical partition. A poor choice caused hot‑spots on EC2 instances. |
| **Composite key (partition + clustering)** | Allows ordering within a partition and further filtering. | Enables efficient range scans in DynamoDB Global Tables when projected via PartiQL. |
| **Clustering columns** | Define the sort order of rows inside a partition; crucial for time‑series data. | In Keyspaces, affects read latency—sorted reads can be served from the same node. |

I chose `customer_id` as the partition key (high cardinality), `event_timestamp` as the first clustering column (time‑ordered), and added `event_type` as a second clustering column for sub‑segmentation. This structure let us run queries like “last 24 h events for customer X” with <5 ms latency.

**Result**  
After migration, read throughput improved by **35 %**, and the cost per request dropped from $0.00012 to $0.00008 due to reduced I/O on Keyspaces. The team gained ownership of the schema design, allowing us to add new dimensions without costly data re‑partitioning.

**Leadership Principles**  
- *Ownership*: I took end‑to‑end responsibility for the migration and schema redesign.  
- *Dive Deep*: By profiling hot spots and modeling partition distribution, we avoided scalability bottlenecks.  

**Bar‑raiser Takeaway**  
A candidate should demonstrate deep technical insight (partition vs clustering), quantify impact, and show how ownership leads to measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
