---
qid: ing_1c69dcea1b__aws__local
question: 'Explain: Microsoft Trees and Graphs — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 486
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:23-05:00'
sources: []
---

**Context (Situation)**  
During my last internship at a fintech startup I was tasked with building an automated fraud‑detection engine that needed to traverse transaction networks in real time. Interviewers later asked me about “Microsoft Trees and Graphs – Faang recent questions,” expecting me to explain how we’d use graph theory to model relationships between accounts, merchants, and devices.

**Task (Goal)**  
Design a scalable, low‑latency system that can answer queries like *“Which accounts are indirectly connected to a flagged account within two hops?”* while keeping cost under $0.05 per query.

**Action (Implementation)**  

| AWS Service | Why it fits |
|-------------|------------|
| **Amazon Neptune** | Native graph DB, supports Gremlin/Property Graph; sub‑millisecond traversal for millions of edges. |
| **AWS Lambda** | Serverless compute for ad‑hoc queries; scales to thousands of invocations without provisioning. |
| **Amazon API Gateway** | Exposes a REST endpoint with throttling and caching (cache hit ratio 85%). |
| **AWS X-Ray** | Instrumentation for latency diagnostics; helps us “Dive Deep” into query bottlenecks. |

*Design Highlights:*  
- Data ingestion pipeline: Kinesis Streams → Lambda → Neptune loader (batch of 10 k edges).  
- Query layer: Lambda reads from Neptune, returns JSON to API Gateway.  
- Cost control: Use Neptune’s **on‑demand** pricing; cache frequent queries in API Gateway to reduce database hits.

**Result (Outcome)**  
After deployment, query latency dropped from 350 ms (SQL join) to <15 ms on average. Monthly cost stayed below $2k, a 30% savings over the legacy solution. I presented these metrics at the quarterly review, earning a “Customer Obsession” badge for ensuring our fraud team could act within seconds.

**Reflection (Learning)**  
I realized that choosing the right graph engine was critical; mis‑estimating edge density would have forced us to shard Neptune, increasing complexity. Going forward, I’ll prototype with Neptune before committing to any architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
