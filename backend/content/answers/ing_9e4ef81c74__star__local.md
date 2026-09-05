---
qid: ing_9e4ef81c74__star__local
question: 'Explain: Stage 2: Technical Screen — Perplexity AI Interview Prep 2026:
  Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 392
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:39-05:00'
sources: []
---

**Situation:**  
During my senior year at university I was interviewing for a research internship at Perplexity AI in early 2026. The hiring process had three stages; Stage 2 was the technical screen, which I knew would be a deep dive into NLP fundamentals and coding under time pressure.

**Task:**  
I needed to demonstrate that I could design a language‑model scoring function from scratch, debug a transformer implementation, and explain perplexity calculations—all within a 45‑minute video call with a senior ML engineer.

**Action:**  
First, I refreshed the math: I wrote out the cross‑entropy loss formula, derived perplexity as \(2^{\text{cross‑entropy}}\), and coded a small script in Python using PyTorch to compute it on a toy dataset. During the screen I used a Jupyter notebook shared via Google Meet, walked through tokenization with Hugging Face’s `tokenizers`, built a simple transformer block manually (attention, layer norm, feed‑forward), and then integrated my perplexity function as a validation metric. When the engineer asked about scaling, I explained how we would move to mixed‑precision training on an A100 GPU and use gradient checkpointing to fit larger models.

**Result:**  
I completed the task in 38 minutes, achieving a perplexity of 12.4 on the test set—well below the baseline of 18 reported by the team. The engineer praised my clear derivation and practical implementation, and I received an offer for the internship. This experience reinforced that mastering both theory (entropy, perplexity) and hands‑on coding with PyTorch is key to succeeding in Perplexity AI’s technical interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
