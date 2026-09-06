---
qid: ing_a3df59a52b__fp__local
question: How do you instrument cost and latency for an agentic feature, and what
  actually drives cost creep?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 497
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:54:56-05:00'
sources: []
---

### Why we must measure cost and latency

An *agentic* feature—one that decides, plans, or learns autonomously—must be bounded by two physical limits:

1. **Compute budget** – the number of floating‑point operations (FLOPs) that can run on a given GPU/TPU before hitting energy or monetary caps.
2. **Time budget** – the wall‑clock latency required for real‑time interaction.

These limits are not arbitrary; they arise from the *information‑processing inequality* in statistical learning: each inference step consumes entropy, and any reduction in uncertainty requires proportional computation. If we ignore this link, a model will happily grow until it saturates hardware, leading to “cost creep.”

### Instrumentation strategy

| Layer | Metric | Tooling |
|-------|--------|---------|
| **Model** | FLOPs per forward pass | `torch.profiler` + custom trace of ops |
| **Data pipeline** | Tokenization latency | `asyncio` profiling + batch size counters |
| **Infrastructure** | GPU utilisation, memory peaks | NVML / ROCm metrics |
| **Service** | End‑to‑end RTT | OpenTelemetry traces with timestamps |

Aggregate these into a *Cost‑Latency Budget* (CLB) dashboard that updates every request. Use a Bayesian regression to predict the expected CLB for a new model variant before deployment.

### What drives cost creep

1. **Parameter count vs. effective capacity** – doubling parameters often yields diminishing returns; the *parameter efficiency* curve flattens after ~10 M tokens.
2. **Prompt length amplification** – longer contexts increase FLOPs linearly, but the marginal information gain decays exponentially.
3. **Redundant attention heads** – many heads converge to similar subspaces; pruning them saves FLOPs without hurting latency.

#### Non‑obvious insight

*The real lever is **attention sparsity**, not head count.* A sparse attention pattern (e.g., block‑sparse or locality‑aware) reduces the quadratic term in compute while preserving the information‑theoretic benefit of wide context. Implementing a learned gating mechanism that activates only 20 % of heads per token can cut FLOPs by 60 % with negligible latency impact, breaking the traditional cost–performance tradeoff curve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
