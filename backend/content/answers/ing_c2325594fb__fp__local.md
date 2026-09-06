---
qid: ing_c2325594fb__fp__local
question: 'Explain: Evaluation Benchmarks. — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 617
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:55:00-05:00'
sources: []
---

**Evaluation Benchmarks for Low‑Bit Quantization‑Aware Training (QAT) of Reasoning LLMs**

The *problem* is that reasoning models must preserve subtle gradient signals while operating with a tiny weight alphabet (e.g., 4‑bit). A benchmark, therefore, must measure **semantic fidelity under extreme compression**: does the model still solve chain‑of‑thought tasks? We construct a composite score  
\[
S = \alpha\,\text{Accuracy}_{R} + \beta\,\text{Calibration}_{C} - \gamma\,\text{CompressionOverhead},
\]
where \(R\) is a curated set of reasoning benchmarks (ARC, GSM‑8K), \(C\) quantifies confidence calibration, and the overhead term penalises runtime slowdown. This formulation embeds an *information‑theoretic* view: higher \(S\) means more mutual information between inputs and correct reasoning steps per bit.

**Why low‑bit QAT works**

1. **Gradient‑Quantization Alignment** – During training, quantization noise is injected into activations and gradients. The model learns to shape its internal representations so that the *signal* (the gradient direction for a reasoning step) lies in a subspace robust to this noise. Mathematically, QAT enforces
   \[
   \|\nabla_{\theta} L - \tilde{\nabla}_{\theta} L\|_2 \leq \epsilon,
   \]
   ensuring that the quantized gradient \(\tilde{\nabla}\) remains a faithful descent direction.

2. **Implicit Regularisation** – Low‑bit discretisation acts as a strong prior, pushing weights toward *clustered* values that align with discrete reasoning patterns (e.g., binary branching). This reduces overfitting to spurious correlations in the training data.

3. **Entropy Bottlenecking** – By compressing weights aggressively, QAT forces the model to encode only high‑entropy features—precisely those needed for multi‑step deduction.

**Non‑obvious insight:**  
The *critical* factor is not the bit‑width itself but the *stochasticity* of the quantization noise during training. If the noise schedule mimics the inference noise distribution (e.g., using a temperature‑annealed uniform sampler), the model learns to “expect” the exact errors it will face at test time, turning what appears as a limitation into an advantage. This alignment between training and deployment noise is why low‑bit QAT can preserve reasoning accuracy while dramatically reducing memory footprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
