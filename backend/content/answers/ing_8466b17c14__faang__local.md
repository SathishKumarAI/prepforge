---
qid: ing_8466b17c14__faang__local
question: 'Explain: The NGM application sits inside a VPC — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 703
total_tokens: 955
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:52:39-05:00'
sources: []
---

**Clarify**

You’re evaluating the best *NoSQL* option for the NGM app that runs inside a VPC on AWS (as discussed in re:Invent 2021).  
Key questions to confirm:  

| Assumption | Why it matters |
|------------|----------------|
| **Data model** – document, key‑value, columnar or graph? | Determines DynamoDB vs. DocumentDB vs. Neptune etc. |
| **Consistency needs** – eventual vs. strong? | Affects DynamoDB’s read capacity mode and provisioned throughput. |
| **Latency goals** – < 10 ms per request? | Influences use of in‑memory caching or local secondary indexes. |
| **Scalability pattern** – write‑heavy, read‑heavy, or balanced? | Guides choice between single‑table design vs. multi‑region replication. |
| **Operational overhead** – fully managed vs. self‑hosted? | Impacts use of DynamoDB (managed) versus Aurora Serverless for NoSQL workloads. |

---

**Approach**

1. Map the data model to AWS NoSQL primitives.  
2. Rank candidates on *latency*, *throughput*, *consistency*, and *management*.  
3. Validate with a prototype that simulates realistic traffic.

---

**Depth**

- **DynamoDB**: Fully managed, key‑value & document store; offers single‑digit millisecond latency, auto‑scaling, global tables, and fine‑grained IAM access (VPC endpoints). Ideal for high‑write workloads and when you need strict SLA on throughput.  
- **Amazon DocumentDB (MongoDB‑compatible)**: If the app already uses MongoDB drivers or needs richer queries, this is a good fit; however it’s more expensive per request and has higher latency (~15 ms).  
- **Amazon Neptune**: For graph data with complex traversals; not suitable for general key‑value patterns.  

Given NGM’s typical event‑driven architecture (high write volume, low read latency), **DynamoDB** is the natural choice.

---

**Edge Cases**

| Scenario | Risk | Mitigation |
|----------|------|------------|
| Sudden traffic spike > provisioned capacity | Throttling | Enable auto‑scaling or burst mode. |
| Need multi‑region consistency | Eventual consistency lag | Use DynamoDB Global Tables with cross‑region replication. |
| Complex ad‑hoc queries | Limited query flexibility | Add a read replica in Amazon OpenSearch or use ElasticCache for caching. |

---

**Optimize & Communicate**

- **Caching**: Integrate ElastiCache (Redis) to offload frequent reads and reduce DynamoDB costs.  
- **Indexing**: Leverage Global Secondary Indexes (GSIs) only when necessary; each GSI adds read capacity cost.  
- **Monitoring**: Use CloudWatch metrics (`ConsumedReadCapacityUnits`, `ThrottledRequests`) and set alerts.

Narrate the trade‑offs clearly: *“We choose DynamoDB for its managed scalability and low latency, but we’ll layer Redis caching to keep read costs down while still meeting the 10 ms SLA.”* This showcases structured thinking, depth, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
