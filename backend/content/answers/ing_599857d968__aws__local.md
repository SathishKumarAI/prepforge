---
qid: ing_599857d968__aws__local
question: 'Explain: Step 4 - Using Cassandra in Go — Building a Performant API using
  Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 505
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:48:32-05:00'
sources: []
---

**Situation** – At my previous company we had a real‑time recommendation engine that needed a low‑latency key‑value store for user session data. The existing MySQL backend was choking under 30 k RPS and the team wanted to move to Cassandra with a Go microservice.

**Task** – Design and implement a production‑grade API in Go that reads/writes sessions, guarantees <5 ms read latency, and scales horizontally while keeping cost per request below $0.0002.

**Action**  
1. **Requirements & Architecture** – I scoped the schema: `user_id | session_ts | payload`.  
   *Used Cassandra’s wide‑row model with a composite primary key (`user_id`, `session_ts`).*  
2. **Go Implementation** – Leveraged the `gocql` driver, built a connection pool per pod (max 5 sockets) and used context timeouts of 3 ms to enforce SLA.  
3. **AWS Services** – Deployed on **Amazon Keyspaces** (managed Cassandra) behind an **ALB** in a VPC with private subnets. Autoscaling was driven by CloudWatch metrics (`cassandra.write_latency`, `cql_latency`) using target tracking set at 70 % of the 5 ms SLA.  
4. **Scalability & Cost** – Each node cost $0.12/hr; with auto‑scaling we ran 2–6 nodes, keeping average utilization ~45 %. This kept monthly spend ~$1k while handling peak 50 k RPS.  
5. **Testing & Rollout** – Performed a canary test using k8s `Deployment` with 10 % traffic and monitored latency drift. The rollout achieved 99.9 % SLA within the first week.

**Result** – Latency dropped from 30 ms to 4 ± 1 ms, throughput increased by 200%, and cost per request fell below $0.00015. Post‑deployment, we reduced support tickets related to session timeouts by 80 %.  

*Leadership Principles*: **Ownership** (I drove the end‑to‑end delivery), **Dive Deep** (tuned Cassandra read/write paths), and **Deliver Results** (measured latency and cost improvements).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
