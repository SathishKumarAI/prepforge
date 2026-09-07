---
qid: ing_2c1e67f191__aws__local
question: 'Pair-programming: build a service that takes a user question, enriches
  it with data from a third-party API, and answers via a chat-model API. How do you
  structure it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 625
total_tokens: 882
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:02-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to prototype a “question‑answer” microservice for an internal chatbot that needed to (1) accept free‑form user queries, (2) call a third‑party knowledge API (e.g., Wolfram|Alpha), and (3) generate a natural‑language answer via OpenAI’s GPT‑4. The goal was to deliver a fully serverless stack that could handle 10 k QPS with <200 ms latency while keeping the monthly bill under $1,000.

**Approach / Action**  
*Design*:  
- **API Gateway + Lambda@Edge** for request ingestion (global edge locations → low latency).  
- **AWS Step Functions** orchestrates:  
  1. `ValidateAndEnrich` Lambda validates schema and calls the third‑party API via an async HTTP client.  
  2. `GenerateAnswer` Lambda streams the enriched data to GPT‑4 using OpenAI’s streaming endpoint, then returns the text.  
- **DynamoDB (Global Tables)** stores user sessions for audit & caching; TTL removes stale entries.  
- **S3 + Glacier** archives chat logs for compliance.  

*Scalability*: Each Lambda scales independently; Step Functions handles retries and circuit‑breaker logic to avoid cascading failures.  
*Availability*: All services are region‑aware; API Gateway’s built‑in throttling protects downstream APIs.  
*Cost*: With 10 k QPS, estimated compute cost ≈$300/month, API calls $500, storage <$50.

**Result**  
Deployed in two weeks; latency dropped from 1.2 s to 150 ms, and the system sustained 12 k QPS without degradation. Monthly spend stayed at $950. The solution was adopted across three product lines, saving an estimated $200K/yr in support tickets.

---

### Leadership Principles Highlighted
- **Customer Obsession** – engineered for end‑user latency & reliability.  
- **Ownership** – drove the full stack from design to production and cost control.  
- **Dive Deep** – used metrics (latency, error rates) to iterate on Lambda timeouts and Step Function retry policies.

### What a Bar‑Raiser Looks For
1. **Quantified Impact** – clear latency & cost numbers.  
2. **Depth** – understanding of serverless limits, caching, and retry strategies.  
3. **Learning from Failure** – mention how I added circuit breakers after initial spikes caused downstream API timeouts.

This answer demonstrates ownership, technical depth, measurable results, and a bias for action—exactly what Amazon expects in an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
