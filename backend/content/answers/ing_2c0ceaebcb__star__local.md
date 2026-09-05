---
qid: ing_2c0ceaebcb__star__local
question: 'Explain: Fine-Tuning and Parameter-Efficient Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 345
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:12-05:00'
sources: []
---

**Situation** – At my previous company we were building a customer‑support chatbot that needed to understand industry jargon. The base GPT‑3 model performed well on generic queries but misinterpreted key terms, hurting our SLA from 95 % to 80 %.  

**Task** – I had to improve domain accuracy without exceeding our GPU budget or extending the deployment pipeline.

**Action** – First, I ran a quick fine‑tuning run: 3 M tokens of annotated logs, 4 epochs, learning rate 1e-5. The model’s perplexity dropped by 12 %, but inference latency increased 25 % and we had to provision an extra GPU cluster for real‑time serving.  
Next, I switched to a parameter‑efficient approach: LoRA (Low‑Rank Adaptation) with rank = 8 on the transformer’s attention layers. This added only ~0.5 M trainable parameters (~1 % of the base model), kept latency unchanged, and improved accuracy by 9 %. I also experimented with QLoRA to reduce memory usage during fine‑tuning.

**Result** – The LoRA‑based chatbot achieved a 93 % accuracy on our test set, restored SLA to 94 %, and cut inference cost by 30 %. I learned that while full fine‑tuning can yield marginal gains, parameter‑efficient methods often give the best trade‑off between performance, cost, and deployment speed in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
