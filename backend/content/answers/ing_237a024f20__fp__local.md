---
qid: ing_237a024f20__fp__local
question: How would you implement sub-question decomposition, and when does it make
  things worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 399
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:20:55-05:00'
sources: []
---

**Why decompose a question?**  
When an AI must reason over a long prompt, the *information bottleneck* of its internal representation grows linearly with input length. Each token dilutes the signal: attention heads can only attend to a fixed number of positions before their gradients vanish. By splitting the query into atomic sub‑questions, we reduce the horizon each reasoning step sees, turning an NP‑hard planning problem into a sequence of tractable inference steps.

**How to do it from first principles**  
1. **Identify independent semantic units** via syntactic parsing or dependency graphs.  
2. **Encode each unit** with a shared encoder so that the same representation space is used for all sub‑questions.  
3. **Generate a plan**: a list of sub‑question embeddings, ordered by causal dependencies (topological sort of the dependency graph).  
4. **Iteratively answer**: feed each embedding into a decoder conditioned on the previous answers, accumulating context.  
5. **Merge results** via a lightweight fusion layer that respects the original question’s semantics.

**When it hurts**  
If sub‑questions are *not* independent—e.g., they share hidden variables or require cross‑term inference—the decomposition forces the model to re‑solve shared subproblems, inflating computation and introducing inconsistency. Moreover, over‑decomposition can amplify noise: each decoder step propagates its own errors, leading to compounding mistakes (the *error‑propagation* problem).

**Non‑obvious insight**  
A single decomposition that respects the *information geometry* of the task—i.e., grouping tokens that lie on the same manifold in embedding space—often yields better performance than a purely syntactic split. This geometric alignment reduces redundancy and keeps each sub‑question tightly focused, mitigating error accumulation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
