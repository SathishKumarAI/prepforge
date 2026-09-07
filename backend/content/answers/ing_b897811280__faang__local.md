---
qid: ing_b897811280__faang__local
question: 'Explain: Rate Limiting — What is an API Gateway? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 481
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:52:15-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *rate limiting* and how an **API gateway** enforces it. I’ll assume we’re talking about HTTP/REST APIs exposed to external clients, not internal micro‑service calls, and that the audience knows basic networking.

**Approach**  
1. Define rate limiting (requests per second/minute).  
2. Explain the API gateway’s role as a reverse proxy in front of services.  
3. Show how the gateway implements limits: token bucket, leaky bucket, or fixed window.  
4. Mention key attributes: client identity, quota storage, eviction, and response strategy.

**Depth**  
An API gateway sits between clients and backend services, handling authentication, routing, logging, and throttling. Rate limiting prevents abuse by allowing only *N* requests per time unit per client (API key, IP, or user). Typical algorithms:

- **Fixed‑window counter** – simple but can burst at window edges.  
- **Sliding‑log** – accurate but storage‑heavy.  
- **Token bucket / leaky bucket** – smooth bursts while enforcing a long‑term average.

The gateway stores counters in an external store (Redis, DynamoDB) to share state across instances. When a request exceeds the quota, it returns HTTP 429 (“Too Many Requests”) and optionally a `Retry-After` header. The gateway also provides per‑client dashboards and can dynamically adjust limits via policy APIs.

**Edge Cases**  
*Burst traffic*: fixed windows may allow spikes; token bucket mitigates this.  
*Clock skew*: use server time, not client headers.  
*Shared IPs (NAT)*: may cause collateral throttling; consider API keys instead.  
*Cache invalidation*: stale counters can over‑limit; implement TTL.

**Optimize & Communicate**  
To scale, shard the counter store by hash of client ID, use async writes to reduce latency, and expose metrics to trigger auto‑scale. In an interview I’d finish with a quick diagram of request flow: Client → Gateway (auth + rate limit) → Service, emphasizing that the gateway centralizes control, simplifies service code, and gives observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
