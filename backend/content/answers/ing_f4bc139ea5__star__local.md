---
qid: ing_f4bc139ea5__star__local
question: 'Explain: Query Classification with TransformersTextRouter and TransformersZeroShotTextRouter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 355
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:37:59-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with building a customer support chatbot that could route incoming text queries to the correct department (Billing, Technical Support, Sales). The ticket volume grew by 40 % last quarter, and our manual routing took too long for real‑time responses.

**Task:**  
I needed to implement an automated query classifier that would map each user message to one of 12 intent categories with >90 % accuracy, while keeping inference latency under 200 ms on a single GPU.

**Action:**  
I leveraged Hugging Face’s `TransformersTextRouter` for in‑domain training: fine‑tuned a RoBERTa base model on our labeled dataset (≈15k examples), added a classification head with label smoothing, and used early stopping to avoid overfitting. For unseen intents or new departments, I switched to `TransformersZeroShotTextRouter`, feeding it prompt templates (“This query is about {label}”) and letting the model score each candidate label via CLIP‑style embeddings. I wrapped both routers in a lightweight FastAPI service, batched requests, and monitored latency with Prometheus.

**Result:**  
The combined system achieved 92 % top‑1 accuracy on our validation set and reduced routing time from 3.5 s to <150 ms per query. Deployment cut support ticket backlog by 25 % in the first month, and I learned how zero‑shot techniques can complement fine‑tuned models for dynamic intent expansion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
