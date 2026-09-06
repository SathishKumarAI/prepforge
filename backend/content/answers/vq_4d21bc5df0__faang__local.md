---
qid: vq_4d21bc5df0__faang__local
question: '49 Question 49: What deﬁnes a Large Language Model (LLM)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 499
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:40-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise definition of what makes a language model “large.”  
Assumptions:  
- We’re talking about statistical neural LLMs (transformer‑based).  
- Size is measured in learnable parameters, training data volume, and compute.  

**Approach**  
1. Define the core components that grow with scale.  
2. Explain why each dimension matters for performance.  
3. Give a benchmark threshold that differentiates “large” from “small.”  

**Depth**  
A Large Language Model (LLM) is an autoregressive transformer whose capacity—measured in billions of trainable parameters, multi‑terabyte token corpora, and teraflop‑scale pre‑training—is sufficient to learn complex linguistic patterns, world knowledge, and reasoning skills that generalize across domains.  
Key traits:  

| Dimension | Typical Scale for LLM | Impact |
|-----------|-----------------------|--------|
| Parameters | ≥ 10 B (e.g., GPT‑3 175 B) | Enables richer contextual embeddings & diverse inference patterns. |
| Training data | > 1 TB of tokenized text | Provides coverage of syntax, semantics, and world facts. |
| Compute | 10⁵–10⁶ GPU‑hours | Allows exploration of high‑order interactions across tokens. |

These thresholds are not hard cutoffs; they reflect the point where empirical gains plateau relative to cost and where models can produce coherent multi‑turn dialogue, code synthesis, or summarization.

**Edge Cases**  
- Tiny transformer variants (≤ 100M params) perform well on narrow tasks but lack generality.  
- Models trained on specialized corpora may be “large” in parameters yet ineffective for open‑domain language.  

**Optimize & Communicate**  
Emphasize that “large” is context‑dependent: a 2 B model might suffice for a specific industry application, while research benchmarks push toward > 10⁴ B. Clarify that size correlates with performance but also introduces challenges—energy consumption, latency, and alignment risks. Conclude by noting that the community often uses “LLM” to denote any transformer surpassing these scales, which signals the shift from rule‑based NLP to data‑driven, generalist intelligence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
