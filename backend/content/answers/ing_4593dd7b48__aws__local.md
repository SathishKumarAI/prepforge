---
qid: ing_4593dd7b48__aws__local
question: 'Explain: Pattern: Parent-Child Retrieval — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 387
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:57-05:00'
sources: []
---

**Scenario (S)**  
While building a recommendation engine for a multi‑tenant e‑commerce platform, I noticed that many child objects (product variants) were queried independently from their parent catalog item, leading to duplicated reads and stale data.

**Task (T)**  
Design a scalable pattern that keeps parents and children in sync while minimizing read latency and cost.

**Action (A)**  
I implemented the **Parent‑Child Retrieval Pattern**:
1. Store each parent record as a *single* DynamoDB item with an embedded list of child IDs.
2. Use AWS Lambda to publish “child‑updated” events to SNS, triggering a Step Functions state machine that updates the corresponding parent’s child list atomically via a `TransactWriteItems` call.
3. Cache parents in Amazon ElastiCache (Redis) with key‑based invalidation on child updates.

This approach satisfies **Customer Obsession** (fast, consistent reads for shoppers) and **Ownership** (single source of truth). It also follows **Dive Deep**: we measured read latency before/after—down from 120 ms to <30 ms—and reduced DynamoDB write capacity by ~35 %, cutting costs by $1.2k/month.

**Result (R)**  
The platform handled a 4× traffic spike during flash sales without any cache misses, and user‑reported “out‑of‑stock” errors dropped from 7% to <0.5%.  

**Bar‑raiser takeaways**: I owned the end‑to‑end solution, dug into read/write patterns, quantified latency & cost savings, and learned that coupling parents with child IDs in a single item can dramatically simplify consistency while keeping AWS services cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
