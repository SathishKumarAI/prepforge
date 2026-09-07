---
qid: ing_e31397f71b__faang__local
question: 'Explain: Q118: Your agent platform runs 40-step tasks on a single frontier
  provider. That provider just logged four outages in four days. Design for provider
  failure.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 523
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:17-05:00'
sources: []
---

**Clarify**  
We’re building an AI‑agent platform that executes *40‑step* tasks on a single “frontier” provider (e.g., a cloud LLM API). The provider logged **four outages in four days**, so we must design for high availability and graceful degradation.  
Assumptions to confirm:  
- Each task step is independent, but the overall job can’t finish if any step fails permanently.  
- We have cost constraints (e.g., pay‑as‑you‑go).  
- Latency is important; we want sub‑second recovery.

**Approach**  
1. **Redundancy layer**: add a second provider (or an internal fallback model) behind a round‑robin/load‑balancer.  
2. **Health checks & circuit breaker**: ping each provider every 5 s; open the circuit after 3 consecutive failures, route traffic to backup.  
3. **Task checkpointing**: persist step index and partial results in a durable store (e.g., DynamoDB).  
4. **Retry policy with exponential back‑off**: retry up to 3 times per step before marking task failed.  
5. **Graceful degradation**: if fallback provider is slower, flag the job for manual review.

**Depth**  
- Circuit breaker opens after `N=3` failures → O(1) state check per request.  
- Checkpointing costs ~O(40) writes per task; negligible compared to API calls.  
- Latency overhead: health checks add ~10 ms, retries may add up to 2–3× step time.  
- Cost trade‑off: dual providers increase spend by ~30% but reduce SLA impact.

**Edge Cases**  
- *Provider A* fails mid‑task; we resume from last checkpoint with Provider B.  
- *Both providers fail*: task stalls → move to “failed” queue and alert ops.  
- *Sudden traffic spike*: circuit breaker may oscillate; mitigate with jittered back‑off.

**Optimize & Communicate**  
We can further optimize by:  
- Caching common prompts locally (edge caching) to reduce API calls.  
- Using weighted round‑robin based on provider latency metrics.  
Explain to interviewers that this design balances reliability, cost, and performance while keeping the system simple enough for rapid iteration—exactly what FAANG teams prioritize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
