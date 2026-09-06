---
qid: ing_59a070e081__fp__local
question: 'Explain: Pattern 1 – AgentWorkflow (i.e. linear “swarm” pattern)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 389
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:15:00-05:00'
sources: []
---

**Pattern 1 – Linear Swarm (AgentWorkflow)**  

At its core a *linear swarm* is an **information‑flow pipeline**: a sequence of autonomous agents each receives data, applies a transformation, and forwards the result downstream. The fundamental problem it solves is *scalable, modular processing*—splitting a complex task into small, repeatable units that can be parallelised or replicated without central coordination.

Why must it work linearly?  
1. **Causality**: Each agent’s output is the next agent’s input; any deviation would break determinism unless explicit feedback loops are added (which define other patterns).  
2. **Throughput optimisation**: By keeping agents independent, the overall latency equals the sum of individual latencies minus overlap opportunities. This aligns with *Little’s Law* in queuing theory—throughput is bounded by service rate and queue length.  

A deeper principle is *information preservation*: each agent is a deterministic function \(f_i\). The composite mapping \(F = f_n \circ … \circ f_1\) is invertible only if every \(f_i\) preserves entropy; otherwise the pipeline collapses information, limiting recovery or learning downstream.  

**Non‑obvious insight:**  
Most designers treat agents as black boxes, but in a linear swarm the *order of operations* is itself an optimisation variable. Swapping two agents can change not only latency but also the *statistical distribution* of intermediate data, affecting later agents’ performance (e.g., a normalisation step before a nonlinear activation). Thus, even without altering individual code, re‑ordering can yield measurable gains—an effect often missed when focusing solely on parallelism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
