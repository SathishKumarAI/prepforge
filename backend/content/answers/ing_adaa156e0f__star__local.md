---
qid: ing_adaa156e0f__star__local
question: 'Explain: LLM and Generative AI Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 324
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:20-05:00'
sources: []
---

**Situation:** During my senior year capstone, our team was tasked with building a demo for an internal recruitment platform that could automatically generate tailored interview questions for machine learning roles. The client wanted the system to produce high‑quality prompts while staying within strict latency limits (under 200 ms per request).  

**Task:** I had to design and implement a lightweight large language model pipeline that could generate realistic LLM interview questions on demand, ensuring relevance, diversity, and factual accuracy, all while keeping inference time low.  

**Action:** I started by pruning a pre‑trained GPT‑2 checkpoint using knowledge distillation, reducing the token count from 1.5 B to 117 M parameters without losing more than 8% of perplexity on our ML interview corpus. I then built an efficient beam‑search decoder with top‑k sampling (k=50) and integrated a relevance scoring module that filtered out generic or redundant questions. For latency, I deployed the model using ONNX Runtime on a single GPU, achieving an average inference time of 140 ms per prompt.  

**Result:** The prototype generated diverse, role‑specific interview prompts with a precision rate of 92% (measured against a human‑annotated gold set). Client adoption increased their candidate engagement by 18%, and I learned how to balance model size, latency, and question quality in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
