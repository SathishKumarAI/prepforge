---
qid: ing_927f9c76c5__star__local
question: 'Q: Why is a distilled 8B model better than an 8B model trained from scratch
  on the same tokens?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 389
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:01-05:00'
sources: []
---

**Situation:**  
In a recent product launch I had to deploy an 8‑billion parameter language model for our customer support chatbot. We only had a year’s worth of internal conversation logs (~10M tokens) and limited GPU budget.

**Task:**  
I needed the model to understand domain jargon, handle multi-turn dialogue, and keep latency under 200 ms, all while staying within a single‑node inference setup.

**Action:**  
Instead of training an 8B from scratch on our logs, I used a pre‑trained 13B teacher (OpenAI’s GPT‑3.5) to distill knowledge into an 8B student. I first fine‑tuned the teacher on our domain data, then ran a two‑stage distillation: (1) cross‑entropy matching of logits, (2) knowledge‑distilled token‑level KL loss with temperature = 4. This leveraged the teacher’s rich semantic representations without needing 13B compute for each inference step. I also added a small adapter layer to adjust for domain specifics and reduced the batch size during distillation to fit GPU memory.

**Result:**  
The distilled 8B achieved a perplexity of 18 on our held‑out test set, versus 25 for the scratch‑trained model—an ~28% relative improvement. Latency dropped from 350 ms (scratch) to 190 ms (distilled). I learned that distillation re‑uses global knowledge while fine‑tuning local patterns, giving better generalization with far less training time and compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
