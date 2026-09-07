---
qid: ing_2f2b81d99e__aws__local
question: 'Explain: Tree Traversals: — OG CS61B Data Structures and Sorting Cheat
  Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 502
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:01-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I was asked to build an analytics engine that could traverse millions of decision‑tree models (≈ 5 M nodes) in real time to generate risk scores for every transaction (~ 10 k per second). The goal was **≤ 50 ms latency, 99.9% uptime** and cost < $2k/month.

**Action – Technical Design**  
1. **Data layout** – Stored each tree as a flattened array in DynamoDB (partition key = `tree_id`, sort key = `node_index`). Each item holds `{value, left_child_idx, right_child_idx}`.  
2. **Traversal engine** – Implemented a Lambda function (Node.js) that reads the root node and iteratively follows child indices, fetching batches of 10 nodes per read (`BatchGetItem`) to stay within DynamoDB limits.  
3. **Caching** – Added an Elasticache‑Redis layer to hold hot subtrees; TTL set to 5 min. On cache miss, Lambda pulls from DynamoDB and writes back.  
4. **Parallelism & Scaling** – Enabled Lambda provisioned concurrency (200) to handle peak bursts. Used API Gateway with throttling to protect downstream services.  

**Result**  
- Latency dropped from 320 ms to **38 ms average**, meeting the < 50 ms SLA.  
- Cost fell from $5k/month to **$1.8k/month** (≈ 64% savings).  
- Uptime reached **99.97%** over 12‑month horizon.

**Reflection – Bar‑raiser cues**  
*Ownership*: I led the entire stack redesign, from schema to deployment scripts.  
*Dive Deep*: I profiled DynamoDB read/write patterns, discovered hot keys, and engineered a hybrid cache strategy.  
*Quantified Impact*: Precise metrics on latency, cost, and availability demonstrate real business value.  
*Learning from Failure*: Initial design used a relational DB causing 200 ms delays; pivoting to NoSQL + cache resolved the bottleneck.

**Leadership Principles Anchored**  
- **Customer Obsession** – Delivering instant risk scores directly improved user trust.  
- **Ownership & Bias for Action** – Took full responsibility and iterated quickly to meet SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
