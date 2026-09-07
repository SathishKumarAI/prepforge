---
qid: ing_8dfeb07e88__aws__local
question: 'Explain: Implement a client pool over multiple LLM providers with failover:
  providers fail, time out, or rate-limit, and callers should just get a completion.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 486
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:08-05:00'
sources: []
---

**Situation & Task**  
I led a team that had to expose a single “completion” API to internal services while hiding the complexity of three LLM vendors (OpenAI, Anthropic, Cohere). The contract demanded **99.9 % availability**, <200 ms latency for 90 % of requests, and graceful degradation when any provider timed‑out or hit rate limits.

**Approach & Design**  
* **Client pool + circuit breaker** – a Lambda layer holds an in‑memory pool keyed by `providerId`. Each call runs a weighted round‑robin with a *fallback* to the next provider if the first fails.  
* **Health checks** – every 30 s, Step Functions orchestrate a lightweight “ping” job; results are stored in DynamoDB (`ProviderStatus`). A CloudWatch alarm flips the circuit breaker flag.  
* **Failover logic** – Lambda uses `async` invocation; on timeout or HTTP‑429 it retries with exponential back‑off and switches provider. If all fail, it returns a cached “best‑effort” response.  
* **Observability** – custom CloudWatch metrics (`ProviderLatency`, `FailureRate`) feed an Athena dashboard; alerts trigger automatic scaling of the Lambda concurrency limit.

**Result**  
Post‑deployment we hit **99.97 % availability**, reduced median latency from 350 ms to 185 ms, and cut cost by 18 % by eliminating unnecessary retries. The system now scales automatically—up to 10k QPS with a single Lambda version—while keeping operational overhead minimal.

**Leadership Principles Highlighted**  
* **Customer Obsession & Deliver Results** – delivered a seamless API that internal teams could rely on without vendor knowledge.  
* **Dive Deep & Ownership** – designed end‑to‑end observability, debugged a subtle race condition in the circuit breaker, and iterated based on real metrics.

Bar‑raisers expect this level of ownership, depth, quantified impact, and continuous learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
