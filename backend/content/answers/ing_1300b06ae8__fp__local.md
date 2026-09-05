---
qid: ing_1300b06ae8__fp__local
question: 'Explain: Multi-tenant fairness and noisy neighbours'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 542
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:46:13-05:00'
sources: []
---

### Why “multi‑tenant fairness” matters

When a shared cloud resource (CPU, GPU, memory) is sliced into *tenants*—distinct models or users—we implicitly assume that each tenant’s performance scales linearly with its share of the resource. In reality the underlying scheduler and hardware introduce **cross‑talk**: one tenant’s high‑frequency computation can generate heat, contention for caches, or even subtle interference in shared accelerators (e.g., GPU tensor cores).  

If we model a tenant’s latency \(L_i\) as  
\[
L_i = \frac{C_i}{s_i} + \sum_{j\neq i}\alpha_{ij}s_j ,
\]
where \(C_i\) is the computational load, \(s_i\) its allocated slice, and \(\alpha_{ij}\) captures interference from tenant \(j\), we see that increasing one tenant’s share can *increase* another’s latency. The optimization problem becomes: choose \(\{s_i\}\) to satisfy all latency constraints while minimizing total cost. Classic linear‑programming falls short because the \(\alpha_{ij}\) terms are **non‑linear** and often stochastic.

### Noisy neighbours

The “noisy neighbour” phenomenon is precisely this cross‑talk: a tenant’s *spiky* workload (e.g., batch inference spikes) emits a burst of cache misses or memory bus traffic that momentarily throttles other tenants. From an information‑theoretic view, the shared channel’s capacity \(C\) is degraded by the entropy of the interference process:
\[
C_{\text{effective}} = C - H(\text{interference}).
\]
Thus fairness cannot be enforced merely by static quotas; it requires *probabilistic* guarantees that the interference entropy stays below a threshold.

### Non‑obvious insight

Most practitioners tune per‑tenant CPU shares. The deeper lesson is that **resource isolation must be treated as an adversarial game**: each tenant’s scheduler can be modeled as a strategy that maximizes its own throughput while unintentionally harming others. Game‑theoretic equilibrium concepts (e.g., Nash or Stackelberg) yield allocation policies where tenants voluntarily limit their aggressiveness to avoid triggering costly interference, leading to *stable* fairness without explicit enforcement.

In short, multi‑tenant fairness is an optimization over a stochastic, adversarial resource graph; noisy neighbours are the entropy‐laden edges that must be carefully bounded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
