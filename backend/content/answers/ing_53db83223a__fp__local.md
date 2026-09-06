---
qid: ing_53db83223a__fp__local
question: 'Explain: F9: Tenant cross-contamination via shared eval infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 379
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:03:08-05:00'
sources: []
---

**F9: Tenant cross‑contamination via shared evaluation infrastructure**

When multiple tenants run model‑evaluation jobs on a common GPU cluster or serverless function pool, the *state* that survives between invocations—cached tensors, compiled kernels, memory pools—acts as an implicit channel. Each job may load its own weights and data, but the underlying runtime reuses buffers to avoid costly allocations. If a tenant’s model leaves residual gradients or activations in a buffer, a subsequent tenant can read them through a shared tensor view, even if the API forbids it. The problem is not a bug in isolation; it is an emergent property of *resource sharing* and *lazy de‑initialisation*, both optimisations that reduce overhead.

Why this must happen: modern accelerators expose large contiguous memory blocks. Zeroing or copying each block per job would cripple throughput, so frameworks keep them “warm.” The optimisation principle (time–space trade‑off) forces a compromise: speed at the cost of data isolation. In probabilistic terms, the *entropy* of the system is reduced by caching; the remaining low‑entropy states become leak channels.

**Non‑obvious insight:** Even if each tenant’s code is sandboxed and never directly accesses another’s tensors, the *compiler optimisation* that merges identical operations across jobs can create a *shared execution plan*. If two tenants request the same layer shape, the runtime may reuse a pre‑compiled kernel with shared scratch space. Thus cross‑contamination can occur without any explicit data sharing—merely by reusing the same compiled artifact. Ensuring isolation therefore requires not only memory zeroing but also *kernel de‑duplication* or per‑tenant compilation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
