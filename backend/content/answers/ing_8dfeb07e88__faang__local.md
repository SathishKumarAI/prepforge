---
qid: ing_8dfeb07e88__faang__local
question: 'Explain: Implement a client pool over multiple LLM providers with failover:
  providers fail, time out, or rate-limit, and callers should just get a completion.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 681
total_tokens: 936
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:14:26-05:00'
sources: []
---

**Clarify**  
We need a *client‑pool* that abstracts over several LLM APIs (e.g., OpenAI, Anthropic, Cohere). Callers send a prompt and expect a single completion. The pool must:  

1. Detect provider failure (network error, 5xx), timeout, or rate‑limit (429).  
2. Fallback to another provider automatically without exposing errors.  
3. Balance load among healthy providers.

Assumptions: all providers expose a `GetCompletion(prompt)` API; we can query health and metrics; caller code is synchronous or awaits a future.

**Approach**  
1. **Provider wrapper** – encapsulate each provider’s client, timeout, retry policy, and rate‑limit handling.  
2. **Health‑check & circuit breaker** – periodically ping providers; if consecutive failures exceed `N`, mark unhealthy.  
3. **Weighted round‑robin scheduler** – maintain a list of healthy providers with weights proportional to capacity or SLA.  
4. **Failover logic** – on request, pick next provider from the scheduler; if it fails (timeout/429), catch and retry with the next provider until success or all exhausted.

**Depth**  
```python
class Provider:
    def __init__(self, name, client, weight):
        self.name = name
        self.client = client
        self.weight = weight
        self.healthy = True
        self.fail_count = 0

    async def get(self,prompt):
        try:
            return await asyncio.wait_for(
                self.client.get_completion(prompt), timeout=API_TIMEOUT)
        except (asyncio.TimeoutError, HTTP429, HTTP5xx) as e:
            self.fail_count += 1
            if self.fail_count > MAX_FAILS: self.healthy=False
            raise

class ClientPool:
    def __init__(self, providers):
        self.providers = providers          # list[Provider]
        self.idx = 0

    async def request(self,prompt):
        for _ in range(len(self.providers)):
            p = self._next_healthy()
            try: return await p.get(prompt)
            except Exception: continue
        raise RuntimeError("All providers failed")

    def _next_healthy(self):
        while True:
            p = self.providers[self.idx % len(self.providers)]
            self.idx += 1
            if p.healthy: return p
```
Complexity: O(1) per request; health checks run in background (O(n)).  
Trade‑offs: more aggressive circuit breaker reduces latency but may underutilize providers.

**Edge Cases**  
* All providers unhealthy → propagate error.  
* Provider recovers mid‑request – reset `healthy` flag on periodic ping.  
* Rate‑limit bursts – back‑off per provider to avoid cascading failures.

**Optimize & Communicate**  
- Cache provider health status to reduce repeated pings.  
- Expose metrics (latency, success rate) for observability.  
- Explain trade‑offs: strict circuit breaker → lower latency vs. higher availability.  
Narrate the design as a resilient service layer that shields callers from provider volatility while balancing load and respecting SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
