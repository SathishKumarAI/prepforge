---
qid: ing_c38a556ee0__star__local
question: 'Explain: Example 5: Being Wrong and Walking It Back'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 355
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:01:05-05:00'
sources: []
---

**Situation:**  
During a sprint to deploy an image‑classification model for our retail app, the data science team was convinced that adding a second convolutional layer would boost accuracy from 86 % to at least 90 %. The product manager had set a two‑week deadline for a demo.

**Task:**  
I needed to validate whether the extra layer truly improved performance without blowing up inference latency on mobile devices, and if not, pivot quickly so we could meet the release date.

**Action:**  
First, I ran a controlled experiment: trained both models on the same 80/20 split, monitored training curves, and performed k‑fold cross‑validation. The deeper model only gained 0.5 % accuracy but increased GPU usage by 35 % and latency by 18 ms—critical for our app’s user experience. I presented these findings in a short demo to stakeholders, explaining the trade‑off using ROC curves and profiling data. Together we decided to keep the shallower architecture and allocate the extra resources to augmenting the training set instead.

**Result:**  
We met the deadline with a 86 % accurate model that ran at <30 ms on-device, improving overall user satisfaction scores by 12 %. I learned the value of data‑driven decision making and the importance of communicating trade‑offs transparently—even when it means admitting you were wrong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
