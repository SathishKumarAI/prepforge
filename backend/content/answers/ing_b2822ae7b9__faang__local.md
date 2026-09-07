---
qid: ing_b2822ae7b9__faang__local
question: 'Explain: Fallback and Reliability — Ai Gateways And Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 479
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:42-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how an *AI gateway* can keep a system running (“fallback”) while deciding which model to invoke (“model routing”). I’ll assume:  
- Multiple downstream LLMs or ML services exist (different specialties, costs, latency).  
- The gateway sits in front of all models and must serve user requests reliably.  
- “Fallback” means having a backup plan when the chosen model fails or is overloaded.

**2️⃣ Approach**  
1. **Health‑check & Load Monitoring** – each model exposes metrics (latency, error rate, quota).  
2. **Routing Policy Engine** – based on those metrics and business rules (e.g., cost vs. accuracy) pick a primary model.  
3. **Fallback Strategy** – if the primary returns an error or timeout, automatically retry with an alternate model.  
4. **Circuit Breaker & Retry Logic** – avoid cascading failures by temporarily disabling unhealthy models.

**3️⃣ Depth**  
- *Health checks*: HTTP/GRPC probes every 10 s; metrics stored in Prometheus.  
- *Policy engine*: simple weighted round‑robin with dynamic weights = 1 / (latency + error_penalty).  
- *Fallback*: exponential back‑off up to two retries, each on a different model.  
- *Circuit breaker*: open after 3 consecutive failures, reset after cooldown; prevents repeated requests to a bad endpoint.  

Complexity: O(1) routing per request; health checks run asynchronously. Trade‑offs: more models mean higher latency for routing logic but better availability.

**4️⃣ Edge Cases**  
- All models down → return cached “service unavailable” or a minimal deterministic response.  
- Model returns malformed data → gateway validates schema before returning to client.  
- Sudden spike in traffic → throttling at the gateway level to protect downstream services.

**5️⃣ Optimize & Communicate**  
Improvements: use ML‑based anomaly detection on model metrics for proactive fail‑over; implement per‑user personalization of routing weights. I’d explain this flow to interviewers, highlighting how each component contributes to overall reliability and scalability, and show sample pseudocode or architecture diagram if asked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
