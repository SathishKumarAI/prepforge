---
qid: ing_7f60ec7fe4__aws__local
question: 'Explain: Comparing with Remote Procedure Call — Asynchronous Request-Response
  - Enterprise Integration Patterns 2'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 417
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:15-05:00'
sources: []
---

**Situation & Task**  
I led the migration of our on‑prem legacy order‑processing service to a cloud‑native architecture for a retail client that handled ~50 k orders per day. The existing solution used synchronous Remote Procedure Calls (RPC) over TCP, causing tight coupling and blocking latency spikes during peak traffic.

**Action**  
1. **Design Choice:** Adopted an *Asynchronous Request–Response* pattern using Amazon SQS queues and AWS Lambda for orchestration, guided by the “Customer Obsession” principle—ensuring customers never wait on backend bottlenecks.  
2. **Implementation Steps:**
   - **Producer (API Gateway → Lambda)** pushes order payloads to an *OrderRequest* FIFO queue.
   - **Consumer Lambdas** poll the queue, process orders, and push results to a *OrderResponse* topic in Amazon SNS.
   - The original caller polls the response queue with exponential back‑off until it receives the result or times out.
3. **Technical Trade‑offs:**  
   - **Scalability:** SQS scales automatically; Lambda concurrency limits handled via reserved concurrency and auto scaling policies.  
   - **Availability:** Queues are multi‑AZ; Lambda retries on failures (5 attempts).  
   - **Cost:** 0.40 ¢ per million requests vs. ~1.00 ¢ for synchronous API calls plus server maintenance.

**Result**  
- Latency dropped from an average of 2.3 s (RPC) to <200 ms average request‑to‑response cycle.  
- Throughput increased by 4× during peak hours without additional servers.  
- Customer satisfaction scores rose from 78% to 92%.  

**Learning**  
I documented failure scenarios (e.g., message duplication) and added idempotency checks, reinforcing the “Dive Deep” principle and ensuring we never silently lost data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
