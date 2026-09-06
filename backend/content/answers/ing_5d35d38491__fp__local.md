---
qid: ing_5d35d38491__fp__local
question: 'Explain: Default to Low Concurrency; LLM Provider 429 Rate Limit Errors'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 399
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:22:42-05:00'
sources: []
---

**Why “default to low concurrency” fixes a 429 from an LLM provider**

When you fire many API calls simultaneously, the total request rate (requests / second) can exceed the provider’s quota. A *429 Too Many Requests* is essentially a gate‑keeping signal: “your client’s throughput is too high for me to keep up.”  

The fix is not to throttle *after* the fact but to **preemptively reduce concurrency** so that the request stream stays below the limit.  
Mathematically, if \(Q\) is the per‑second quota and \(C\) is the number of concurrent workers, each worker emits a request every \(\tau\) seconds on average. The effective rate is  

\[
R = \frac{C}{\tau}.
\]

Setting \(C \leq Q\tau_{\min}\), where \(\tau_{\min}\) is the shortest feasible inter‑request interval (often dictated by latency or batch size), guarantees \(R \leq Q\). Thus, “low concurrency” is simply enforcing a hard upper bound on \(R\).

**Deeper principle:**  
This mirrors *rate limiting* in queuing theory—keeping the arrival rate below service capacity to avoid queue blow‑up. It also aligns with **information‑theoretic bandwidth sharing**: each request consumes channel capacity; if you allocate too many simultaneous channels, you exceed the total capacity.

**Non‑obvious insight:**  
When you reduce concurrency, you *also* gain better error visibility. With a single worker, a 429 is obvious and can trigger exponential backoff immediately. With dozens of workers, the first failure may be buried in logs, delaying recovery. Hence, low concurrency not only prevents throttling but also improves observability and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
