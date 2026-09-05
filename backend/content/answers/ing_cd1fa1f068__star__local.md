---
qid: ing_cd1fa1f068__star__local
question: 'Explain: What They''re Actually Evaluating — Perplexity AI Interview Prep
  2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 355
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:19:02-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new chatbot for customer support and the product manager insisted that “perplexity” was the single metric that mattered for judging our language model’s performance. The team was split—some of us believed in BLEU or ROUGE, others thought perplexity alone could mislead.

**Task:**  
I had to demonstrate how perplexity fits into a broader evaluation pipeline and convince leadership that we needed a multi‑metric approach before we released the bot.

**Action:**  
First I ran a small experiment: trained two models on the same corpus, one tuned for low perplexity (1.8) and another optimized for semantic relevance via a transformer fine‑tuned with reinforcement learning (perplexity 2.3). Using Python’s `transformers` library, I evaluated both on a held‑out validation set, then ran human annotators to rate coherence, factual accuracy, and user satisfaction. I plotted the results in Matplotlib, showing that the low‑perplexity model scored high on next‑token prediction but lost 18% in user satisfaction compared to the higher‑perplexity model. I also added BLEU scores for comparison.

**Result:**  
The demo convinced the product team to adopt a composite score: perplexity weighted by human‑rated coherence and factual accuracy, with an overall KPI of ≥90% user satisfaction. The final release saw a 25% reduction in support tickets and a 12% increase in NPS. I learned that while perplexity is valuable for training stability, it must be balanced against real‑world usability metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
