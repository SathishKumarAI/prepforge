---
qid: ing_b4f2d1ecaf__star__local
question: How do you tell that a fine-tune is overfitting? What are the signals?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 392
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:28-05:00'
sources: []
---

**Situation** – In mid‑2024 I was fine‑tuning a GPT‑3 model on our internal legal document corpus for an automated contract review tool. The training set had about 12 k labeled clauses, and the validation set was only 1 k due to data privacy constraints.

**Task** – My goal was to achieve at least 88 % F1 on the validation set while keeping inference latency below 200 ms per request.

**Action** – I monitored training loss versus validation loss every epoch. When the training loss kept dropping but the validation loss plateaued after epoch 4, I started looking for classic overfitting signs: (1) a widening gap between train and val accuracy; (2) a sudden spike in perplexity on the hold‑out set; (3) unusually high confidence scores (> 0.99) on training examples that were flagged as hard cases. I also ran a small probe by evaluating the model on a held‑back “blind” test set of 500 unseen clauses and saw an F1 drop from 90 % to 75 %. Finally, I checked layer activations: the last transformer block’s norms exploded for training tokens but stayed stable for validation tokens.

**Result** – Once I detected these signals, I introduced a combination of early stopping (patience = 3), dropout at 0.2 on the classifier head, and a slight weight decay (1e‑5). The fine‑tuned model hit 88.7 % F1 on validation and 86 % on blind test while staying within latency limits. I learned that constant cross‑validation monitoring and a small unseen test set are critical to catch overfitting early in NLP finetuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
