---
qid: ing_3f4cd3c2d3__faang__local
question: 'Explain: 2.4 System Design: Design an API for an LLM with a Safety Layer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 488
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:11:03-05:00'
sources: []
---

**1️⃣ Clarify**  
We need an HTTP/GRPC‑style API that lets clients send prompts to a large language model (LLM) and receive text completions while ensuring safety guarantees (content filtering, rate limits, user identity). Assume the LLM is already hosted; we only expose a service layer.  

**2️⃣ Approach**  
*Define contract*: request body → `prompt`, `max_tokens`, `temperature`; response → `completion`, `warnings`.  
*Safety pipeline*:  
- **Pre‑filter** (regex/ML) on prompt → reject or sanitize.  
- **Post‑filter** on output → flag toxicity, disallowed content.  
*Rate limiting & auth*: JWT + per‑user quota.  
*Scalability*: stateless microservice behind a load balancer; cache frequent prompts.  

**3️⃣ Depth**  
```yaml
POST /v1/chat/completions
Body: {prompt, max_tokens, temperature}
Headers: Authorization: Bearer <jwt>
Response: 200 {completion, safety_flags}
```
- *Pre‑filter*: O(|prompt|) regex + ML model.  
- *LLM call*: async to avoid blocking; use timeout.  
- *Post‑filter*: run through a toxicity classifier (e.g., Perspective API).  
- *Return* includes `safety_flags` and a `confidence`.  

Complexity: overall O(|prompt|) + LLM inference time. Trade‑off between latency and safety depth—can parallelize filters.  

**4️⃣ Edge Cases**  
- Empty or extremely long prompts → reject with 400.  
- Prompt containing disallowed tokens → return 422 with reason.  
- Timeout on LLM → fallback to partial completion + warning.  
- Rate limit exceeded → 429.

**5️⃣ Optimize & Communicate**  
Add caching for identical prompts; batch requests to the LLM to reduce overhead. Use circuit breaker pattern if safety classifiers fail. Explain each layer’s purpose, trade‑offs (latency vs thoroughness), and how observability (metrics on filter hits, latency) informs future tuning. This structured plan shows clear problem understanding, a pragmatic solution, and awareness of production concerns—key for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
