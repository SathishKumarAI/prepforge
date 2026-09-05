---
qid: ing_a02b41d1fb__star__local
question: 'Explain: 2 Large Language Models (LLMs) — AI Concepts - by Neo Kim and
  Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 369
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:38-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a customer‑support chatbot that needed both high‑accuracy intent recognition and natural‑language generation for follow‑up answers. Our existing rule‑based engine was only 68 % accurate, so the product manager set a goal of 90 % accuracy within six months.

**Task:**  
I had to select and integrate two large language models—one for understanding (BERT) and one for generating responses (GPT‑4)—and build a seamless pipeline that could handle ~200k tickets per month without exceeding our $5,000/month GPU budget.

**Action:**  
First, I fine‑tuned a DistilBERT on our labeled intent dataset using Hugging Face’s Trainer API, reducing inference latency to 35 ms per request. Next, I wrapped the GPT‑4 API with a custom prompt template that fed the BERT‑predicted intent and contextual keywords, then post‑processed the output with regex rules to enforce compliance language. To stay within budget, I deployed the DistilBERT model on an AWS Lambda layer and used GPT‑4 only for high‑confidence cases (top 20 % of tickets), throttling requests via a token bucket algorithm.

**Result:**  
Accuracy jumped from 68 % to 93 %, and response time averaged 48 ms. Monthly GPU spend fell to $3,200, freeing $1,800 for future feature work. I learned that pairing a lightweight encoder with an expressive decoder can deliver enterprise‑grade performance while staying cost‑efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
