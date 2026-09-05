---
qid: ing_8f0e0a5266__star__local
question: 'Explain: Multiple Dimensions of Quality — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 389
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:04-05:00'
sources: []
---

**Situation** – At my previous startup we were launching a conversational AI for customer support. The beta had great intent recognition (85 % accuracy) but users complained about repetitive answers and occasional irrelevant replies.

**Task** – I needed to design a comprehensive evaluation framework that captured not just response correctness, but also fluency, diversity, safety, and bias across multiple dimensions, so we could iterate on the model before production release.

**Action** – I built a pipeline using open‑source tools:  
- **Perplexity & BLEU/ROUGE** for linguistic quality;  
- **Diversity score (self‑BLEU)** to ensure varied phrasing;  
- **Safety checks** via OpenAI’s Moderation API and custom regex filters;  
- **Bias metrics** with the Fairness Indicators library, measuring gender and ethnicity representation in generated content. I ran 5k user‑simulated dialogues per iteration, logged all scores, and visualized trends in a Grafana dashboard. The team used these insights to fine‑tune prompts and retrain on a balanced dataset.

**Result** – After three iterations, perplexity dropped from 28 to 22, BLEU rose from 0.32 to 0.48, diversity increased by 35 %, and bias‑related complaints fell 70 %. The final model met our SLA of 95 % safe responses, and we launched on schedule with a user satisfaction score of 4.6/5. I learned that multi‑dimensional evaluation is essential for building trustworthy LLMs, and that transparent dashboards keep cross‑functional teams aligned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
