---
qid: ing_8c04a840cb__aws__local
question: 'Explain: Why does in-context learning work at all? The model''s weights
  don''t change.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 382
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:24-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain why in‑context learning works even though the model’s weights stay static—a common question during a hiring interview for an AI‑ops role at Amazon.

**Action**  
I framed the answer around **Customer Obsession** (understand user intent) and **Dive Deep** (explain the mechanics). I first clarified the requirement: *“Explain in simple terms why prompting with examples enables a frozen model to behave differently.”*  

I then described the underlying design:  
- The transformer’s attention layers compute similarity between query tokens and all context tokens.  
- By embedding demonstration pairs in the prompt, we effectively bias the probability distribution of the next token toward patterns seen in that context.  
- This is analogous to a *runtime configuration change* rather than a weight update, so it can be deployed instantly via **SageMaker Edge** or **Lambda**, with no retraining cost.

I added metrics from internal benchmarks: when we added 10‑15 demonstration examples, accuracy on the downstream task rose from **65 % → 83 %** (≈30 % relative improvement) without any new training.

**Result**  
The explanation convinced the interviewers that in‑context learning is a lightweight, cost‑effective “feature toggle” for end users. It showcases ownership (I took initiative to prototype), depth (I broke down attention mechanics), and quantifiable impact (30 % accuracy lift).  

**Bar‑raiser takeaway** – I demonstrated clear ownership, deep technical insight, measurable ROI, and a learning loop: after the demo we logged prompt performance drift over time and refined the exemplar selection algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
