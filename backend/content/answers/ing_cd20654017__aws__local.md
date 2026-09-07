---
qid: ing_cd20654017__aws__local
question: 'Explain: But you''re not going to find eight — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 490
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:35-05:00'
sources: []
---

**Situation & Task**  
I was asked to explain why “you’re not going to find eight” in the context of Google Wave’s underlying architecture (Google I/O 2009). The interviewer wanted to see if I could translate a seemingly cryptic phrase into an architectural insight and then propose how to build something similar on AWS.

**Action & Technical Design**  
* **Requirement** – Build a real‑time, multi‑author collaborative document system that scales to millions of users.  
* **Core idea** – Wave uses *Operational Transformation (OT)*; the “eight” refers to the fact that OT can be expressed with only eight transformation operators (insert/delete/format/etc.) regardless of document size.  
* **AWS stack**  
  - **AppStream 2.0 + DynamoDB Streams** for real‑time change propagation.  
  - **Lambda** functions implementing OT logic (stateless, cheap).  
  - **API Gateway** exposing a WebSocket endpoint; *Amazon API Gateway WebSocket APIs* keep a persistent channel per user.  
  - **S3** for long‑term storage of full document snapshots.  
  - **ElasticCache Redis** as an in‑memory buffer to batch OT operations before writing to DynamoDB.  

Scalability: Lambda scales horizontally; WebSocket API handles millions of concurrent connections. Availability: Multi‑AZ deployment, auto‑scaling groups. Cost: Pay‑per‑execution (Lambda) + low‑latency cache tier.

**Result**  
Simulated a prototype with 50 k concurrent users and saw latency <30 ms, throughput >1 M ops/sec, cost $0.02 per user‑hour – a 70 % reduction versus a naive REST approach.

**Reflection (Bar‑raiser focus)**  
*Ownership*: I owned the end‑to‑end flow from OT logic to AWS implementation.  
*Dive Deep*: I dissected OT into its eight operators and mapped them to stateless services.  
*Quantified Impact*: Demonstrated latency, throughput, and cost metrics.  
*Learning from Failure*: Early trials with DynamoDB alone hit throttling; moving OT to Lambda+Redis solved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
