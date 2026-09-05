---
qid: ing_8c0f373857__star__local
question: What's the difference between zero-shot and few-shot prompting, and when
  would you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 325
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:50-05:00'
sources: []
---

**Situation** – At my previous company we were launching a customer‑support chatbot that needed to understand product queries in multiple languages. Our training data for new product categories was sparse, so we had to rely on prompt engineering instead of full retraining.

**Task** – I had to decide whether to use zero‑shot or few‑shot prompting to get the model to classify intent accurately while keeping latency low.

**Action** – First, I benchmarked a zero‑shot approach: giving the model a single instruction (“Classify the following product issue”) and letting it infer from its pre‑training. For a subset of high‑volume queries I added few‑shot examples—just three labeled instances per intent—to anchor the model’s understanding. I measured F1 scores, response time, and API cost for both setups using OpenAI’s GPT‑4. The few‑shot variant improved precision by 12% on rare intents but increased token usage by ~20%. I then created a hybrid pipeline: use zero‑shot for common intents and route ambiguous cases to the few‑shot model.

**Result** – Accuracy rose from 78 % to 91 % overall, while cost per response stayed within budget. I learned that zero‑shot is ideal when latency and cost are critical, whereas few‑shot shines when you need higher precision on niche categories and can afford a modest token overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
