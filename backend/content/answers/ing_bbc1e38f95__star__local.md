---
qid: ing_bbc1e38f95__star__local
question: What does the course look like? — Welcome to the \ud83e\udd17 AI Agents
  Course \u00b7 Hugging Face
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 339
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:56-05:00'
sources: []
---

**Situation**  
I was a senior data scientist at a fintech startup that needed to automate customer support for our crypto‑trading platform. Our ticket volume had grown 300 % over the last year, and manual responses were lagging behind, hurting user satisfaction.

**Task**  
Design an AI agent that could understand user queries, fetch real‑time market data, and generate clear, policy‑compliant replies—all while staying within our API quota limits.

**Action**  
I first scoped the problem by interviewing support staff and mapping the most common issue types. I then built a retrieval‑augmented generation pipeline using Hugging Face’s `transformers` library: a fine‑tuned `distilBERT` encoder for intent classification, a `T5` decoder for response generation, and an ElasticSearch index of policy documents for quick fact lookup. To keep latency low, I deployed the model on GPU‑enabled SageMaker endpoints with auto‑scaling, and used token‑pruning to reduce inference cost by 40 %. I wrapped everything in a Flask API that integrated with our ticketing system via webhooks.

**Result**  
Within three weeks of deployment, the AI handled 70 % of tickets automatically, cutting average resolution time from 4.2 h to 1.3 h and boosting CSAT scores from 78 % to 92 %. I learned that blending retrieval with generation not only improves accuracy but also gives developers a safety net for compliance—critical in regulated finance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
