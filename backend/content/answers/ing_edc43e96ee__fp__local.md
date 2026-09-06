---
qid: ing_edc43e96ee__fp__local
question: 'Explain: Design a rate limiter for an LLM API where cost scales with tokens,
  not requests.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 528
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:24:51-05:00'
sources: []
---

When the bill is proportional to *tokens* rather than calls, the objective becomes **minimising the expected token‑usage subject to service‑level constraints**.  
Imagine a stream of incoming prompts \(p_t\) arriving at rate \(\lambda\). Each prompt consumes a random number of tokens \(X_t\sim\text{dist}\), with mean \(\mu=\mathbb{E}[X]\). The API’s cost per unit time is \(c\,\sum_{t} X_t\). We want to keep this sum below a budget \(B\) while keeping latency low.

**Why a token‑aware limiter works.**  
A naïve request cap (e.g., “no more than 10 calls/min”) ignores that one call might be 1 k tokens, another only 50. The *expected* cost per minute is \(\lambda\mu c\). Therefore the natural control variable is **token‑rate** \(R_t = X_t\,\mathbf{1}_{\text{allowed}}\), not just a counter of calls. By enforcing an upper bound on the cumulative token rate—say, \(\int_0^T R_t dt \leq B\)—we guarantee that the budget is never exceeded.

**Implementation via a token bucket.**  
A classic token‑bucket algorithm generalises cleanly:  
1. The bucket holds at most \(B\) “token credits”.  
2. When a request arrives, we estimate its size \(\hat X_t\) (e.g., by counting prompt tokens or using an average).  
3. If the bucket has ≥ \(\hat X_t\) credits, we allow the call and deduct \(\hat X_t\); otherwise we reject or delay until enough credits accumulate at rate \(r = B/T\).

**Non‑obvious insight: estimation is key.**  
If we always use the *maximum* possible token count for each request (worst‑case), the bucket empties quickly, forcing many rejections even when average usage is low. Conversely, underestimating leads to budget overruns. The optimal strategy is to maintain a **probabilistic confidence interval** for \(X_t\) and use its upper bound with high probability; this balances safety against throughput.

Thus, the rate limiter must be token‑aware, grounded in expected token cost, and coupled with accurate size estimation—otherwise the system either overspends or underutilises the API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
