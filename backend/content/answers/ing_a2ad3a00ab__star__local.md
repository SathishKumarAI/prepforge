---
qid: ing_a2ad3a00ab__star__local
question: 'Explain: Explain distillation for LLMs - black-box vs logit distillation
  - and the licensing caveats.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 361
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:58:08-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a conversational AI for customer support. Our flagship model was a proprietary LLM that cost $2 M to run per month and was licensed under a restrictive “non‑commercial use” clause. The product team needed a lighter, cheaper version that could be deployed on edge devices.

**Task:**  
I had to create an efficient distilled model that preserved 90 % of the original accuracy while staying within the licensing constraints, and decide whether to do black‑box or logit distillation.

**Action:**  
First I reviewed the license: it forbade redistributing any derivative models. So I opted for **black‑box distillation**, treating the LLM as a service that only provided logits via an API call. I trained a 1/10th sized student network on the teacher’s output distributions, using knowledge‑distillation loss plus temperature scaling to capture soft probabilities. To avoid violating the license, I never stored or replicated any weights from the teacher; all training data flowed through the API in real time. I also implemented differential privacy noise during distillation to add an extra layer of separation.

**Result:**  
The distilled model ran at 4× lower latency and reduced inference cost by 80 %. Accuracy dropped only 2 % (from 92 % to 90 %) on our validation set. I learned that respecting licensing can dictate the choice of distillation technique, and black‑box methods let you leverage powerful models without breaching terms while still delivering production‑ready AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
