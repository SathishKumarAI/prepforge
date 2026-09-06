---
qid: ing_fa3ea50ee1__fp__local
question: 'Explain: Describe the throughput - latency tradeoff curve for an LLM server,
  and explain goodput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 479
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:51:45-05:00'
sources: []
---

**Throughput–latency trade‑off in a large‑language‑model (LLM) server**

The *fundamental problem* is that an LLM processes tokens one after another; each token requires a forward pass through the transformer stack. If we process many requests concurrently, GPU memory is shared among them, so each request receives only a fraction of the compute budget per token. This yields:

| **Throughput** | **Latency** |
|-----------------|-------------|
| High throughput (many requests) | Each request must wait for its share of the GPU cycles → *high latency* |
| Low throughput (few requests) | GPU can devote full capacity to a single request → *low latency* |

Mathematically, let \(C\) be the total compute per second and \(T\) the token‑rate per request. For \(N\) concurrent requests, each gets at most \(C/N\). The latency per request is roughly proportional to \(\frac{1}{C/N}\), giving a hyperbolic curve:

\[
L(N) = \frac{k\,N}{C}, \qquad
\Theta(N)=\frac{C}{k\,N}
\]

where \(k\) captures token‑to‑compute conversion. This is an instance of the *resource allocation* principle: sharing a fixed resource among more users increases waiting time.

**Goodput**

Goodput refines throughput by subtracting *idle* or *overhead* tokens that do not contribute to user‑visible output (e.g., padding, internal control tokens). If \(I\) is the fraction of compute spent on non‑useful work, goodput is:

\[
G = \Theta(1-I)
\]

Goodput matters because a server may achieve high raw throughput but deliver little useful content if many tokens are wasted. The deeper insight: *goodput is maximized when the model’s internal token distribution aligns with the user’s output distribution.* If the model spends disproportionate effort on rare control tokens, goodput drops even though latency stays constant. Thus, optimizing for goodput requires aligning the model’s architecture and sampling strategy with the task’s effective entropy, not just raw compute efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
