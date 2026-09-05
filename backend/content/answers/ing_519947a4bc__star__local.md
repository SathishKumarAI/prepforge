---
qid: ing_519947a4bc__star__local
question: How do you evaluate an LLM? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:33-05:00'
sources: []
---

**Situation** – In my last role I was tasked with choosing a new large language model for our customer‑support chatbot. The existing solution had a 70 % accuracy on intent classification and latency of 1.2 s, which was hurting user satisfaction during peak hours.

**Task** – I needed to evaluate multiple LLM candidates (OpenAI GPT‑4o, Anthropic Claude 3, and a custom fine‑tuned Llama‑2) against performance, cost, and compliance metrics so we could pick the best fit for 500k monthly queries.

**Action** – First, I built a benchmark suite of 10k real support tickets, annotated for intent, sentiment, and required action. Using LangChain, I ran each model through the pipeline, capturing token usage, response time, and classification accuracy. I then performed a cost‑per‑query analysis (including GPU hours) and ran a GDPR‑compliance audit on data handling. To assess robustness, I introduced edge cases like code snippets and misspellings, measuring F1 scores.

**Result** – The fine‑tuned Llama‑2 achieved 88 % intent accuracy with an average latency of 0.8 s, costing $0.0006 per query versus $0.0015 for GPT‑4o. Adoption cut support response time by 35 % and reduced operator escalations by 22 %. I learned that a structured, metrics‑driven evaluation—combining real‑world data, cost analysis, and compliance checks—is essential when selecting an LLM for production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
