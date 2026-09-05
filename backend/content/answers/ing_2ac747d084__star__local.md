---
qid: ing_2ac747d084__star__local
question: 'Q19: When would you use a small language model vs a frontier model?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 319
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:33-05:00'
sources: []
---

**Situation**  
At my previous company we were building an internal chat‑bot for the customer support team. The bot had to run on legacy Windows servers in the data centre and respond within 200 ms per query because the agents relied on instant suggestions.

**Task**  
Decide whether to deploy a cutting‑edge large language model (LLM) or a lightweight small model while meeting latency, cost, and regulatory constraints.

**Action**  
I first profiled the request patterns: ~80% of tickets were simple FAQ re‑phrasings. I benchmarked a 350 M‑parameter distilled BERT against the 13 B GPT‑4 variant on our hardware, measuring CPU usage, inference time, and cost per token. The small model returned answers in 35 ms with 99% accuracy on the FAQ set, while the frontier model hit 180 ms and consumed 5× more GPU memory. I also evaluated data privacy: the small model could be run locally without sending any user text to external APIs, satisfying GDPR. For the rare complex queries, we routed them to an API‑based GPT‑4 with a strict rate limit.

**Result**  
The hybrid approach cut inference cost by 70%, kept latency under SLA limits, and reduced outbound traffic by 90%. I learned that model choice is driven not just by accuracy but by real‑world constraints like hardware, privacy, and the specific distribution of user intents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
