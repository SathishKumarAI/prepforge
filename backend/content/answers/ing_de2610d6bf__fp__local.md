---
qid: ing_de2610d6bf__fp__local
question: 'Explain: now the demand service requests the supply'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 364
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:52:02-05:00'
sources: []
---

In a **demand‑driven service** the *request*—the input data that needs prediction—is the trigger that pulls computational resources (GPU, CPU, memory) from the pool of available *supply*.  
Why must this happen? At the core we are solving a **constrained optimization problem**:

\[
\min_{x}\; \mathbb{E}_{(X,Y)}[\,\ell(f(X;x),Y)\,]\quad
\text{s.t.}\;\sum_i r_i(x) \le C,
\]

where \(r_i(x)\) is the resource cost of producing a prediction for request \(i\) and \(C\) is the total capacity.  
The optimal policy that satisfies the constraint while minimizing loss is *greedy*: as soon as a request arrives, we allocate the minimal resources necessary to compute its forward pass, release them afterward, and repeat. This guarantees **throughput‑optimality**—no idle capacity can be used better by waiting for future requests.

A non‑obvious insight: **the act of “requesting supply” implicitly performs online load estimation**. By measuring the latency of each served request we infer the instantaneous resource demand distribution, which in turn informs dynamic scaling (e.g., auto‑suspending idle workers). Thus, a simple request–response pattern becomes a feedback loop that optimizes both accuracy and cost without explicit monitoring or manual tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
