---
qid: ing_6124ac2eba__fp__local
question: 'Explain: Parameter Instructions — GitHub - zai-org/GLM-4.5: GLM-4.5: Agentic,
  Reasoning, and Coding (ARC) Foundation Models \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 486
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:31:52-05:00'
sources: []
---

**Why “Parameter Instructions” exist**

At the heart of every large language model is a *parameter tensor*—a gigantic weight matrix that maps an input token sequence to an output distribution. The *instruction* part of a prompt tells the model which *direction* in this high‑dimensional space it should follow: whether to adopt an agentic voice, reason step‑by‑step, or write code.  

The challenge is that the same weights are reused for all tasks; only the context changes the effective linear combination of hidden states. If we could explicitly encode a *task vector*—a small set of parameters that rotates the model’s internal representation into the desired subspace—we would get consistent behaviour without retraining.

**How it works in GLM‑4.5**

1. **Task embeddings**: For each instruction type (e.g., “Agentic”, “Reasoning”, “Coding”) a learned embedding vector \(t_k\) is concatenated to every token’s position embedding.
2. **Projection layer**: A lightweight MLP maps \(t_k\) into a *parameter shift* \(\Delta W_k\) that is added to the main weight matrix during forward passes.
3. **Dynamic gating**: The model learns a gate \(g_k = \sigma(W_g t_k + b_g)\) that decides how much of \(\Delta W_k\) should influence each layer, ensuring stability.

Mathematically, for hidden state \(h^{(l)}\) at layer \(l\),
\[
h^{(l+1)} = f\!\left((W^{(l)} + g_k\,\Delta W_k)\, h^{(l)} + b^{(l)}\right).
\]

**Non‑obvious insight**

The key subtlety is that *small* \(\Delta W_k\) can steer the entire network because the hidden representations are highly over‑parameterized. By learning a shared shift per instruction rather than full fine‑tuning, GLM‑4.5 achieves near‑zero‑shot adaptability while preserving the base model’s generality—a principle that echoes recent work on prompt tuning and adapters but with a tighter coupling to the underlying weight space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
