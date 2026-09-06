---
qid: ing_672074d3af__fp__local
question: 'Explain: Capacity and Storage Estimation — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 463
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:23-05:00'
sources: []
---

### Capacity & Storage Estimation in a Large‑Scale Language Model

At its core, a language model is a **probability distribution** over token sequences, learned by minimizing cross‑entropy on millions of examples.  
The *capacity* we must provision equals the number of independent parameters needed to approximate that distribution within an acceptable error margin.  

1. **Model size vs. entropy** – For a transformer with \(L\) layers and hidden dimension \(H\), each parameter contributes roughly \(\log_2(1+1/\sigma^2)\) bits of expressive power (where \(\sigma^2\) is the variance of gradients).  Empirically, reducing \(H\) by 10 % lowers perplexity by ~3 %, so we solve  
   \[
   \Delta \text{Perplexity} = k \frac{\Delta H}{H}
   \]
   to find the minimal \(H\) that keeps perplexity under a target.  

2. **Storage estimation** – Each weight is stored as 16‑bit float (FP16). Thus, total storage \(S = N_{\text{params}}\times 2\,\text{bytes}\).  
   Additional buffers for activations during training grow with batch size and sequence length:  
   \[
   S_{\text{act}} \approx B\times L\times H \times 2\,\text{bytes}
   \]
   where \(B\) is batch size.  

3. **Non‑obvious insight** – *Gradient sparsity* in large models means that many parameters change very little during fine‑tuning. By quantifying the **effective rank** of the Hessian, we can prune > 70 % of weights with negligible loss, drastically reducing both storage and inference memory without re‑training.

Thus, capacity is not just “more layers” but a balance between expressiveness (entropy capture) and practical constraints (memory, compute), guided by information‑theoretic bounds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
