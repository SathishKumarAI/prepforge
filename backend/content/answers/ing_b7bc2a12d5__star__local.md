---
qid: ing_b7bc2a12d5__star__local
question: 'Explain: Glean — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 374
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:52-05:00'
sources: []
---

**Situation:**  
During my last semester I joined an AI‑startup called Glean that builds a knowledge‑base platform for enterprises. Our beta version was only 55 % accurate in extracting intent from customer emails, and the product owner asked us to raise it to at least 80 % before the next demo.

**Task:**  
I had to design a lightweight NLP pipeline that could run on the company’s existing GPU cluster, improve entity extraction, and reduce inference latency so the tool could be used in real time.

**Action:**  
First I profiled the current transformer model (BERT‑base) with PyTorch Lightning; it spent 70 % of its time on tokenization. I swapped to SentencePiece to cut that overhead by 40 %. Next, I fine‑tuned a DistilBERT variant on Glean’s proprietary email corpus and added a conditional random field layer for entity tagging, which boosted F1 from 0.58 to 0.78. To keep latency low, I used ONNX Runtime with quantization (int8) and deployed the model as a FastAPI microservice behind an Nginx reverse proxy. Finally, I set up A/B testing in the staging environment so we could monitor precision‑recall drift.

**Result:**  
The new pipeline achieved 82 % F1 on our validation set while cutting inference time from 350 ms to 120 ms per email. The demo impressed stakeholders and led to a $2 M funding round. I learned that profiling early, choosing the right model size, and integrating production tooling are as critical as algorithmic tweaks in AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
