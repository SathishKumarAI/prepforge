---
qid: ing_2a420d7698__aws__local
question: 'Explain: Step 2 - Go — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 393
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:59-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with exposing a real‑time recommendation engine to mobile clients. The existing Python service hit 4 k RPS but lagged behind the SLA (≤200 ms) during peak traffic, and our Cassandra cluster suffered from hot‑key contention.

**Action**  
I rewrote the API layer in **Go** for lower latency and compiled binaries. I introduced a **request‑level cache** using *Cassandra’s lightweight transactions* to de‑duplicate read patterns and implemented an **asynchronous write pipeline** with *Kafka → Go microservice → Cassandra* to batch writes, reducing contention by 70 %.  
I leveraged **Amazon Keyspaces (managed Cassandra)** for high availability, enabled **compaction strategy** tuned to our write pattern, and used **AWS Lambda** for edge‑computing pre‑filtering. I added *Prometheus + Grafana* dashboards to monitor latency distributions.

**Result**  
Latency dropped from 420 ms to **145 ms** at peak (30 % improvement over SLA). Throughput increased to **12 k RPS**, and we cut operational cost by 35 % (Go binaries vs. Python containers + reduced Cassandra nodes).  

**Leadership Principles Reflected**  
- **Customer Obsession**: Delivered a faster, more reliable API that improved user engagement by 18 %.  
- **Ownership & Dive Deep**: Took full ownership of the stack, performed root‑cause analysis on hot keys, and iterated until metrics met goals.  

**Bar‑raiser takeaway** – Showed end‑to‑end ownership, deep technical dive into Cassandra tuning, and quantified business impact while learning to balance latency vs. cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
