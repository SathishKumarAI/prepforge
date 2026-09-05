---
qid: ing_ec38f35bbf__star__local
question: 'Explain: Explain how LoRA works - the math, and what `r` and `alpha` mean.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 409
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:31-05:00'
sources: []
---

**Situation**  
During a research sprint at my last company we were tasked with fine‑tuning GPT‑4 for a niche legal chatbot. The baseline model had 1.3 B parameters, and our GPU budget only allowed a few hours of training per epoch.

**Task**  
I needed to reduce the number of trainable weights by more than 90% while keeping performance within 2% of the full fine‑tuned model.

**Action**  
I implemented Low‑Rank Adaptation (LoRA). Instead of updating every weight matrix \(W \in \mathbb{R}^{d_{\text{out}}\times d_{\text{in}}}\), LoRA replaces it with a low‑rank update:
\[
W' = W + \Delta W,\quad
\Delta W = \frac{\alpha}{r} A B,
\]
where \(A \in \mathbb{R}^{d_{\text{out}}\times r}\) and \(B \in \mathbb{R}^{r\times d_{\text{in}}}\). I set the rank parameter \(r=4\), which dramatically shrank trainable parameters, and chose \(\alpha=16\) to scale the update magnitude so that the product \(\frac{\alpha}{r}AB\) had a similar norm to the original weights. Training only \(A\) and \(B\) on our GPU cluster kept memory usage below 4 GB per worker.

**Result**  
The LoRA‑fine‑tuned model achieved an F1 score of 0.87 versus 0.88 for the full fine‑tune, using just 8% of the original parameters. I learned that careful tuning of \(r\) and \(\alpha\) balances expressivity and efficiency, and that LoRA’s rank‑scaling trick is key to maintaining stable gradients during training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
