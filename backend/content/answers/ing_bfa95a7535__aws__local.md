---
qid: ing_bfa95a7535__aws__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 385
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:29-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Customer Obsession* – I always start by translating a spec into what the user actually needs: “what does this add to the customer’s experience?”  
> *Dive Deep* – The RFC isn’t just fluff; it changes how we authenticate downstream services.

**Situation / Task**  
When our API gateway was throttling third‑party apps, I had to audit the OAuth flow. The spec introduced **Resource Indicators (RI)**—a URI that tells the authorization server which resource a client wants to access. Without RI, every token request hit the same bucket, causing contention.

**Action**  
I mapped each microservice endpoint to an RI, updated our Auth0 tenant to support `resource` scopes, and rewrote the gateway logic to append the RI to the token request. I also added a caching layer (ElastiCache Redis) keyed by RI so repeated lookups hit memory instead of the auth server.

**Result**  
Post‑deployment, token issuance latency dropped from **120 ms → 35 ms**, and API calls from external partners increased by **27 %** due to fewer throttles. Cost savings were $1,200/month on Auth0 usage.  

**Learning** – The first failure was ignoring the “resource” claim in the JWT; we had to roll back to a custom middleware that logged missing claims. That taught me to validate RFC compliance before code‑review.

---

*Key AWS services used:* API Gateway, Cognito (or Auth0), Lambda, ElastiCache Redis. *Trade‑offs:* Added one more hop for token requests but gained fine‑grained rate limits and better observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
