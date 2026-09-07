---
qid: ing_b476e32262__aws__local
question: Why GPT-4o-mini Instead of GPT-4o? — Real Time Search
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 394
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:12:36-05:00'
sources: []
---

**Situation:**  
I was leading a proof‑of‑concept for an Alexa‑style voice assistant that needed real‑time web search and instant response generation. The team had two options: GPT‑4o (full‑size) or the newer GPT‑4o‑mini.

**Task:**  
Select the model that maximized customer experience while staying within our $0.05/100 tokens cost cap and 200 ms latency SLA for 1M concurrent users.

**Action:**  
* *Customer Obsession & Ownership*: I ran a head‑to‑head benchmark on 500 real user queries, measuring latency, relevance (BLEU‑score), and cost per request.  
* *Dive Deep*: GPT‑4o delivered 93 % relevance but at 0.12 $/100 tokens and 350 ms latency. GPT‑4o‑mini scored 90 % relevance, 0.04 $/100 tokens, and 120 ms latency.  
* *Bias for Action*: I provisioned a Spot Fleet of p3.2xlarge instances with SageMaker endpoints, scaling horizontally to meet peak load.  
* *Invent & Simplify*: Added a lightweight caching layer (Redis) for top‑10 queries, cutting cost by an extra 15 %.  

**Result:**  
We launched within two weeks, achieved <200 ms average latency, and kept the cost at $0.045/100 tokens—30 % below budget—while maintaining >88 % user satisfaction on post‑launch surveys.

*Bar‑raiser notes:* The answer shows ownership (direct benchmark), depth (specific metrics, trade‑offs), quantified impact (latency & cost numbers), and learning from the pilot to iterate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
