---
qid: ing_b4f2d1ecaf__aws__local
question: How do you tell that a fine-tune is overfitting? What are the signals?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 464
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:36-05:00'
sources: []
---

**Situation / Task**  
I was leading an ML team that fine‑tuned a GPT‑4 model for a customer‑facing chatbot. The goal was to boost accuracy by 15 % while keeping latency under 200 ms on SageMaker.

**Action**  
1. **Signal 1 – Validation loss spike**: After the 8th epoch, validation loss stopped decreasing and began rising (from 0.32 → 0.38) even as training loss fell to 0.18.  
2. **Signal 2 – Accuracy gap**: Test accuracy dropped from 88 % on a held‑out set to 73 % after the same epoch, while training accuracy stayed at 99 %.  
3. **Signal 3 – Per‑token perplexity drift**: Perplexity on a separate “noise” dataset increased by 27 %, indicating the model was memorizing rather than generalising.  
4. **Signal 4 – Latency variance**: Inference latency jitter rose from 12 ms to 45 ms, suggesting the fine‑tuned weights were causing cache misses.

I added a **validation checkpoint** and early stopping with patience=2, switched to a smaller learning rate (5e‑5), and introduced dropout (p=0.1). The next run converged at epoch 6 with validation loss 0.30, accuracy 86 %, perplexity down 18 %, and latency stable at 180 ms.

**Result**  
The fine‑tuned model delivered a **12 % increase in user satisfaction scores** (CSAT +1.4) while keeping cost per inference under $0.0015 on SageMaker, meeting both performance and budget goals.

---

*Leadership Principles:* **Ownership** – I proactively diagnosed and fixed the overfit; **Dive Deep** – I examined multiple metrics to pinpoint the issue.  
*Bar‑raiser cues:* clear ownership, data‑driven impact (CSAT lift), deep diagnostic work, and lessons learned (early stopping + dropout).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
