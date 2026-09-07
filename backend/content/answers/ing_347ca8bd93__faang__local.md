---
qid: ing_347ca8bd93__faang__local
question: 'Explain: Data modeling decisions — Use vertical partitioning to scale data
  efficiently in Amazon DynamoDB | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 447
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:46:15-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *vertical partitioning* can help scale an application that uses **Amazon DynamoDB**. I’ll confirm that we’re dealing with a single‑table design, high read/write throughput, and the need to keep latency low while handling large data volumes.

**Approach**  
1. Identify columns (attributes) that are frequently accessed together.  
2. Split them into *primary* and *secondary* tables (or attribute groups).  
3. Keep the primary table small enough for hot‑partitioning, using a composite key (partition + sort key).  
4. Store infrequently queried or large attributes in a secondary table keyed by the same partition key.

**Depth**  
- **Primary Table**: Holds essential attributes for queries (e.g., userId + timestamp) to avoid hot partitions and enable auto‑scaling.  
- **Secondary Table**: Stores bulky blobs (images, logs) or rarely accessed data; only fetched on demand with `GetItem` or `BatchGet`.  
- This reduces *hot spot* risk because the hot keys are limited to a narrow set of attributes.  
- DynamoDB’s provisioned throughput is then allocated per table, allowing finer control and cost optimization.  
- **Complexity**: Read/Write latency remains O(1); only additional round‑trip if both tables are needed.

**Edge Cases**  
- *Strong consistency*: If the app requires it across partitions, we must use `TransactGetItems` to keep data atomic.  
- *Data growth*: Monitor attribute size; move larger columns to a separate table or S3 if they exceed 400KB per item.  
- *Schema evolution*: Adding new attributes may need migration scripts to populate the secondary table.

**Optimize & Communicate**  
Explain that vertical partitioning reduces I/O, improves cache hit rates, and lets us scale each logical data set independently. Highlight trade‑offs: extra read cost vs. lower hot‑partition risk. Conclude with a quick reference to AWS docs on *Table Design Patterns* for DynamoDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
