---
qid: ing_b60bbe5995__star__local
question: 'Explain: Learning Rate (LR) — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 357
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:18-05:00'
sources: []
---

**Situation**  
In a recent project I was fine‑tuning BERT for a legal document classification task. The base model had been pre‑trained on general corpora, but our dataset was only ~5k labeled contracts, and the initial training with the default LR (2e‑5) caused rapid overfitting—validation loss plateaued after just 3 epochs.

**Task**  
I needed to devise a learning‑rate strategy that would allow the model to adapt to the domain while preventing catastrophic forgetting of useful language patterns, all within a tight two‑week deadline.

**Action**  
I implemented a cosine‑annealing schedule with warm‑up: start at 1e‑5 for the first 10% of batches (warm‑up), then gradually increase to 3e‑5 over the next 20%, before decaying back to 1e‑5. I also added layer‑wise LR decay—lower layers received 0.8× the base LR, while the final classifier layers used the full LR—to preserve generic knowledge. During training I monitored validation perplexity and switched to early stopping when improvement stalled for three consecutive epochs.

**Result**  
The model’s F1 score improved from 78% (baseline) to 86%, with a 12% reduction in overfitting as measured by the train‑vs‑validation loss gap. The approach also cut training time by ~15% thanks to faster convergence, and I learned that combining warm‑up with layer‑wise decay can be more effective than a flat LR schedule for domain adaptation tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
