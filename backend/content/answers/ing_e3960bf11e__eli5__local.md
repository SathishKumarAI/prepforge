---
qid: ing_e3960bf11e__eli5__local
question: 'Explain: Tradeoff Discussion (5 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 261
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:35:55-05:00'
sources: []
---

**Trade‑off Discussion in a Machine‑Learning System Design Interview**

Imagine you’re building a smart traffic light that decides when to switch from green to red. Two things compete: **accuracy** (does it predict the right moment?) and **speed** (how quickly can it make that decision?). In an interview, you’ll be asked to balance such trade‑offs.

- **Accuracy** means the model’s predictions match real traffic patterns.  
- **Speed** is how fast the system can compute a prediction, often measured in milliseconds or seconds.  
- **Cost** refers to money and resources needed (e.g., GPUs, storage).  

You explain why you’d pick a simpler model for low‑latency applications, even if it’s slightly less accurate, versus a complex deep network that gives higher accuracy but takes longer to run and costs more. You’ll also mention how “deployment environment” (edge device vs. cloud) influences the trade‑off.

In short, show you understand that in ML design, improving one metric usually hurts another, and you can justify which side to lean on for the problem at hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
