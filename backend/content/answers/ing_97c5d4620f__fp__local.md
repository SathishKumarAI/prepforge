---
qid: ing_97c5d4620f__fp__local
question: 'Explain: Technical Screen – SWE Infra Questions — My 2026 Perplexity AI
  Interview Process and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 469
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:28:44-05:00'
sources: []
---

### Why a *Technical‑Screen* on infra matters

When an LLM or perception system runs at scale it is **not** just the model that must be fast – every microsecond spent loading weights, shuffling tensors, or pinging GPUs can become a bottleneck.  
In 2026 a “SWE Infra” screen therefore tests whether you can *formulate* and *solve* a set of *resource‑constrained optimization problems* whose objective is to minimize the expected latency \(L\) subject to constraints on compute \(C\), memory \(M\), and energy \(E\):

\[
\min_{x}\; \mathbb{E}[L(x)]\quad
\text{s.t. } C(x)\leq C_{\max},\, M(x)\leq M_{\max},\, E(x)\leq E_{\max}
\]

Here \(x\) denotes architectural choices (e.g., tensor‑parallel granularity, cache hierarchy, interconnect topology). The interview asks you to:

1. **Model the system** – write a cost function that captures data movement, kernel launch overhead, and contention on shared resources.
2. **Derive optimal trade‑offs** – use Lagrange multipliers or convex relaxation to show how increasing parallelism can reduce latency but raise memory usage.
3. **Implement a prototype** – sketch a scheduler that adapts batch size in real time using online learning (bandit algorithms).

### One non‑obvious insight

Most candidates overlook the *non‑linear* coupling between **batch scheduling and GPU power states**. A larger batch can amortize kernel launch overhead, but it forces GPUs to stay in high‑power modes longer. The optimal policy is therefore a *piecewise linear* function of queue length: keep batches small when queues are short (to avoid idle time), then switch to large batches only once the backlog exceeds a threshold that balances energy and latency.

Mastering this principle demonstrates that you can design infra that is **information‑theoretically efficient**—minimizing entropy in data movement while respecting physical limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
