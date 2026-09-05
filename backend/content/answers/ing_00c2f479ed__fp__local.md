---
qid: ing_00c2f479ed__fp__local
question: 'Explain: Architecture Variants — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 562
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:00-05:00'
sources: []
---

**Why LLMs look the way they do**

At their core a language model is a function *f* : x→y that maps an input token sequence *x* to a probability distribution over the next token *y*.  
The learning objective is to minimise cross‑entropy, i.e. maximise likelihood of observed data.  
This optimisation problem admits many parameterisations; the most successful are *transformer*-based stacks because they realise a universal approximator with two key properties:

1. **Self‑attention** gives each position a context‑aware weight *αᵢⱼ* = softmax((qᵢ·kⱼ)/√dₖ).  
   This implements a learnable, data‑driven geometry: the model learns to embed tokens in a space where similarity (dot product) predicts co‑occurrence.  

2. **Layer normalisation + residuals** keep gradients stable across hundreds of layers, enabling depth without vanishing signals.

From these two ingredients arise several *architecture variants*:

| Variant | Core change | Motivation |
|---------|-------------|------------|
| **GPT‑style (decoder only)** | Causal masking | Predict next token only → efficient autoregression. |
| **BERT‑style (encoder only)** | Bidirectional context + masked LM | Captures full sentence semantics for downstream tasks. |
| **T5 / mT5** | Sequence‑to‑sequence with encoder–decoder | Unifies all NLP as translation, facilitating multitask learning. |
| **Sparse Transformers** | Mixture‑of‑Experts (MoE) or block‑sparse attention | Reduces quadratic cost to *O(N log N)* while keeping representational power. |
| **Retrieval‑augmented models** | External memory + cross‑attention | Injects factual knowledge without inflating parameters. |

**Non‑obvious insight:**  
The choice of *masking* (causal vs bidirectional) is not merely a training trick; it enforces a *temporal causal structure* that directly mirrors the inductive bias of language generation versus understanding. This subtle shift changes how gradients flow and which correlations the model can exploit, explaining why decoder‑only models excel at text generation while encoder‑only ones shine on classification.

In short, LLM variants are engineered by reconfiguring attention patterns and training objectives to shape the geometry of token embeddings toward a specific downstream goal, all while respecting the optimisation constraints imposed by deep learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
