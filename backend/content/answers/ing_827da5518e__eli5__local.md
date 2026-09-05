---
qid: ing_827da5518e__eli5__local
question: 'Explain: Latency Numbers Every Programmer Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 312
total_tokens: 470
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:03:42-05:00'
sources: []
---

Imagine you’re a chef who must decide whether to serve a dish immediately or let it sit and develop more flavor. In machine learning, **latency** is the time it takes from when you ask the model a question (the “order”) to when it gives you an answer (the “dish”). Think of latency as the kitchen’s response time: the shorter it is, the quicker your customers get their meals.

Key numbers every programmer should know:

| Category | Typical Latency |
|----------|-----------------|
| **Batch inference** (processing many inputs at once) | 10 – 50 ms per batch |
| **Real‑time inference** (single input on a powerful GPU) | 1 – 5 ms |
| **Edge devices** (smartphone, IoT) | 20 – 200 ms |

- **Inference** is the act of letting a trained model make predictions.  
- **Batch inference** groups many inputs together to save computation time.  
- **Real‑time inference** focuses on single, fast responses.

If latency is too high—say over 100 ms in a chat bot—it feels sluggish; users expect near-instant replies, like a coffee that’s ready as soon as you order it. Keeping latency low ensures your ML “kitchen” serves up answers quickly and keeps everyone satisfied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
