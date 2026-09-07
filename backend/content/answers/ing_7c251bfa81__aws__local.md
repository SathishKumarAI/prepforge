---
qid: ing_7c251bfa81__aws__local
question: 'Explain: Best Practices — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 497
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:08-05:00'
sources: []
---

**Situation (S)**  
While architecting a serverless recommendation engine for an e‑commerce platform, the team noticed that repeated requests to the “AddToCart” API caused duplicate entries and inflated inventory counts. The product owner demanded a robust solution without adding a database lock layer.

**Task (T)**  
Design a system that guarantees **idempotency** for all client‑side write operations while keeping latency low, cost predictable, and scaling to millions of requests per day.

**Action (A)**  

1. **Define the contract** – every request carries a unique *client‑generated* `requestId`.  
2. **Store idempotency keys in DynamoDB** (`RequestTable`) with TTL 24 h.  
   * Partition key: `userId`; sort key: `requestId`.  
3. **Lambda “AddToCart”** (AWS Lambda, Go) first checks the table atomically using a conditional put. If the key already exists, it returns the cached result; otherwise it proceeds to update the cart in DynamoDB and writes the key.  
4. **Eventual consistency guard** – use DynamoDB Streams to trigger an SQS queue that reconciles any missed updates.  
5. **Cost & scaling** – single‑table design keeps read/write capacity under 10 k RCU/WCU, auto‑scales via on‑demand; Lambda concurrency stays below 1 k with a provisioned burst of 500.  
6. **Monitoring** – CloudWatch metrics `DuplicateRequests` and `IdempotencyKeyHits`; alarms trigger when spikes exceed 5 % of total traffic.

**Result (R)**  

*Reduced duplicate cart entries by **99.8 %**, saving $12K/month in unnecessary inventory write costs.*  
*Latency stayed under 120 ms for 95 % of requests, meeting SLA.*  
The design demonstrates **Ownership** (owning the end‑to‑end flow), **Dive Deep** (atomic conditional writes), and a clear **data‑driven impact**.  

**Bar‑raiser note** – I validated assumptions by simulating burst traffic in a staging environment, learned that DynamoDB’s conditional put was the bottleneck, and refactored to use `TransactWriteItems` for atomicity, showing adaptability and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
