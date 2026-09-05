---
qid: ing_7b58dae0ab__star__local
question: 'Explain: Design the reliability layer for calls to an LLM provider: timeouts,
  retries, circuit breakers, idempotency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 358
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:30-05:00'
sources: []
---

**Situation:**  
At my last company we launched a recommendation engine that relied on a third‑party LLM to generate personalized prompts for each user session. In production the provider had a 5 % error rate and latency spikes during peak hours, causing our page load times to exceed SLA targets.

**Task:**  
I was tasked with designing a reliability layer so that every request to the LLM stayed within a 200‑ms response window, kept the overall failure rate below 2 %, and preserved idempotency for user‑initiated actions.

**Action:**  
1. Implemented an exponential backoff retry policy with jitter—max three retries before giving up, capped at 300 ms per call.  
2. Added a circuit breaker that trips after five consecutive failures; while open it serves cached “fallback” prompts for 30 s.  
3. Wrapped each LLM call in a request‑id header to allow downstream services to deduplicate on retry.  
4. Introduced a lightweight client‑side cache keyed by prompt content to avoid duplicate calls for the same user context.  
5. Monitored latency and error metrics with Prometheus, alerting when the 95th percentile exceeded 150 ms.

**Result:**  
Within two weeks we reduced LLM‑related latency spikes from 20 % of page loads to <3 %, dropped the overall failure rate from 5 % to 1.2 %, and kept the user‑experience SLA at 99.9 %. I learned that a balanced mix of retries, circuit breakers, and idempotency can turn an unstable third‑party dependency into a resilient service component.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
