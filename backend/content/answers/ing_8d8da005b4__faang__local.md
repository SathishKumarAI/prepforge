---
qid: ing_8d8da005b4__faang__local
question: 'Explain: Design the backend for a customer-facing chatbot. Walk me through
  the request path.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 509
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:02-05:00'
sources: []
---

**Clarify**  
We’re building a *customer‑facing* chatbot that receives text from a web/mobile client, processes it via NLP, and returns an answer or action.  
Assumptions to confirm:  

1. The bot must support real‑time interactions (≤200 ms latency).  
2. It needs to scale to millions of concurrent users.  
3. Responses can be simple replies or trigger external services (e.g., order status).  

**Approach**  
1. **API Gateway → Auth Service** – validate JWT, rate‑limit per user.  
2. **Message Router** – route the request to a *conversation state* service (Redis cache) to maintain context.  
3. **NLP Inference Layer** – stateless microservice that runs the language model; returns intent & entities.  
4. **Action Executor** – based on intent, call downstream services (DB, payment API).  
5. **Response Builder** – format text/JSON, send back via WebSocket or HTTP long‑poll.

All services are containerized and behind a load balancer; the router uses sticky sessions to keep context in Redis.

**Depth**  
- *Latency*: 200 ms target → 20 ms per microservice + network hops.  
- *Throughput*: Use Kubernetes horizontal pod autoscaling; cache intents for 5 s to avoid duplicate inference.  
- *State*: Store conversation IDs and last turn in Redis (clustered, 2‑way replication).  
- *Security*: TLS end‑to‑end, audit logs.

**Edge Cases**  
- Network partitions → fallback to cached intent.  
- Model failure → return “I’m sorry, can’t help right now.”  
- High request surge → backpressure via token bucket in API Gateway.

**Optimize & Communicate**  
Start with a monolith for quick MVP; refactor into services once load exceeds 10k req/s. Explain trade‑offs: tighter latency vs. complexity of distributed tracing (e.g., OpenTelemetry). Emphasize observability: metrics per hop, request tracing, and alerting on SLA breaches. This structured plan shows clear problem restatement, step‑by‑step design, technical depth, edge handling, and a path to scale—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
