---
qid: ing_3e3ff2b0f5__think__local
question: 'Explain: Design with DynamoDB — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 506
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:52:05-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
- *What* is being described? A data‑modeling pattern that lets a single DynamoDB table hold an astronomically large number of indexes (trillions).  
- *Why* does Uber need this? Real‑time routing, pricing, and telemetry require quick lookups across many dimensions.  
- Assume we’re talking about the “LedgerStore” pattern: one partition key + a composite sort key that encodes multiple index values.

**2. Mental model / framework**  
- Think of DynamoDB as a key/value store where *partition key* = hash bucket, *sort key* = ordered list inside each bucket.  
- To get many indexes we treat the *sort key* as a concatenated composite: `<index‑type>#<index‑value>#<timestamp>`.  
- Each “index” is just another value in that sort key space; all live under the same partition.

**3. Step‑by‑step reasoning**  
1. Store each event (e.g., a driver’s location update) as a row with a fixed PK (`ledgerId`).  
2. For every dimension we want to index, create a separate item whose SK encodes that dimension (`loc#<lat>,<lon>#ts`).  
3. Query by specifying the same PK and a range filter on the SK prefix (e.g., `begins_with('loc#')`), giving us all entries for that index.  
4. Because DynamoDB can handle 10^12 items per partition, we effectively get trillions of logical indexes without physical tables.

**4. Common traps to avoid**  
- *Assuming unlimited read capacity*: each prefix query still consumes RCUs; design with throttling in mind.  
- *Ignoring hot partitions*: over‑concentrated PK values will degrade performance.  
- *Over‑engineering the SK format*: too many delimiters can hurt scan speed.

**5. Sanity‑check & verbalize**  
- Verify that each “index” is just a row, not a separate table: count items per partition.  
- Explain how queries translate to single‐partition reads and why this scales linearly with the number of indexes.  
- Conclude by noting that LedgerStore trades schema rigidity for extreme scalability, fitting Uber’s need to index billions of events across countless attributes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
