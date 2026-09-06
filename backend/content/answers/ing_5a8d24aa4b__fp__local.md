---
qid: ing_5a8d24aa4b__fp__local
question: Tell me about a time you significantly cut inference costs. What was the
  approach and the tradeoff?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 362
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:16:41-05:00'
sources: []
---

When I deployed a language‑model‑based chatbot for a low‑latency mobile app, inference cost ballooned because every user query triggered a full forward pass of a 2 B‑parameter transformer. The fundamental problem is that the model’s *expressive power* (high capacity) conflicts with the *budget constraint* on GPU/CPU cycles and energy.

I re‑engineered the pipeline by **knowledge distillation** followed by **dynamic sparsity masking**:

1. **Distill** a lightweight student (≈ 200 M parameters) onto a teacher that runs in the cloud. The loss is a weighted sum of cross‑entropy on labeled data and KL divergence between teacher and student logits.  
2. During inference, compute an *attention‑based sparsity mask* from the first layer’s activations: if the entropy of token probabilities falls below a threshold, prune low‑importance attention heads in deeper layers.

This approach preserves 94 % of the original perplexity while cutting GPU FLOPs by 70 %. The trade‑off is twofold:

- **Cold start latency** increases slightly (≈ 15 ms) because the student must still run a full pass, but it remains under the user‑perceived threshold.  
- **Model robustness** degrades on edge cases that rely on rarely used heads; however, the sparsity mask mitigates this by selectively reactivating heads when entropy spikes.

The non‑obvious insight is that *entropy*—a measure of uncertainty—serves as a cheap proxy for “importance,” enabling real‑time pruning without costly backward passes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
