---
qid: ing_7f1027ac11__fp__local
question: 'Explain: Frontend Listener — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 497
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:35:39-05:00'
sources: []
---

**Why a “frontend listener” needs its own load‑balancer**

The front‑end listener is the first touchpoint of every request: it receives raw HTTP/HTTPS traffic, terminates TLS, parses headers and performs minimal routing. Its job is *not* to compute predictions; that is delegated to back‑ends (model servers).  
If we let all traffic hit a single pool of model servers, the latency distribution becomes skewed: a few “hot” users can monopolise GPU memory or CPU cores while others starve. The fundamental problem is **throughput‑latency trade‑off under non‑uniform load**.

**Derivation from queueing theory**

Model servers are queues with service rate μ (samples per second). The arrival process λ(t) fluctuates due to user behaviour. By Little’s Law, the expected waiting time E[W] ≈ ρ/(1–ρ) * (1/μ), where ρ = λ/μ. When λ spikes locally (e.g., a video‑streaming session), ρ approaches 1 and W explodes.  
A load‑balancer distributes λ among N replicas, so each sees λ/N. The optimal N satisfies:

\[
N^* \approx \frac{λ_{\max}}{μ(1-ε)}
\]

where ε is the acceptable tail latency (e.g., 95th percentile). This formula shows that **the balancer’s decision rule must be a function of both peak load and desired tail**.

**Non‑obvious insight**

Many designs treat the balancer as stateless round‑robin. But because model inference is *batch‑sized*, the effective service rate μ depends on batch size chosen by each replica. A smart balancer can **co‑optimize batch sizes and routing**: send a burst of small requests to a freshly warmed GPU (high μ for tiny batches) while aggregating long‑running queries into larger batches elsewhere. This joint optimization reduces average latency without increasing hardware cost.

In short, the frontend listener’s load balancer is an *optimization engine* that translates variable arrival patterns into per‑replica batch sizing and routing to keep tail latency bounded while maximizing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
