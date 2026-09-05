---
qid: ing_a748f93331__star__local
question: 'Q: How would you evaluate models for a customer support chatbot?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 417
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:23-05:00'
sources: []
---

**Situation:** In my last role I was tasked with launching an AI‑powered customer support chatbot for our e‑commerce platform, which already handled over 1 M tickets per month. The existing manual queue had a 48 h average resolution time and a churn rate of 12 % during high‑traffic periods.

**Task:** My goal was to evaluate candidate language models—GPT‑4, LLaMA‑2, and an open‑source fine‑tuned BERT variant—to determine which could deliver the best balance of accuracy, latency, and cost while meeting SLA targets (≤3 s response time and ≥90 % first‑contact resolution).

**Action:** I designed a multi‑phase benchmark:  
1. Curated 10k real support transcripts and annotated intent/issue categories.  
2. Built an automated pipeline in Python using FastAPI, Docker, and NVIDIA A100 GPUs to run inference on each model.  
3. Measured precision‑recall for intent classification, BLEU scores for response quality, latency per request, and GPU memory usage.  
4. Ran a cost‑per‑request simulation based on our cloud pricing, factoring in compute hours and storage.

**Result:** GPT‑4 achieved 92 % F1 on intent detection but had an average latency of 6.5 s (exceeding SLA) and high inference costs ($0.03/request). LLaMA‑2 matched 90 % F1 with 3.2 s latency, costing $0.01/request. The fine‑tuned BERT variant hit 88 % F1 but lagged in response quality. I recommended deploying LLaMA‑2 with a caching layer for common queries, cutting average resolution time from 48 h to 12 h and reducing support tickets by 18 %. This exercise taught me the importance of aligning model choice with business KPIs and infrastructure constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
