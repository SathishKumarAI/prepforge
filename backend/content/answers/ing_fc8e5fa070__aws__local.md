---
qid: ing_fc8e5fa070__aws__local
question: 'Explain: Explore more from Algorithms — Generative AI with Large Language
  Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 347
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:53-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to pilot a generative‑AI pilot for an internal knowledge base. The goal: reduce support ticket volume by leveraging Large Language Models (LLMs) and automate content generation.

**Action**  
*Ownership*: I scoped the solution, drafted a 2‑week sprint plan, and owned all vendor decisions.  
*Dive Deep & Technical Design*: I chose **Amazon Bedrock** for model hosting (Claude 3 / GPT‑4o) and paired it with **Amazon SageMaker Pipelines** to ingest and preprocess internal documents. For real‑time inference I added **AWS Lambda + API Gateway**, caching responses in **DynamoDB** with TTL, and used **Amazon CloudWatch** for observability.  
*Bias for Action*: I built a minimal viable product (MVP) within 10 days, iterated on prompt engineering, and conducted A/B testing against the legacy FAQ system.

**Result**  
- Achieved a **43 % drop in support tickets** over three months.  
- Latency stayed under **200 ms** for 95 % of requests, meeting SLA.  
- Cost per inference was **$0.0008**, below the $0.001 target.

**Learning & Bar‑raiser Insight**  
I documented failure modes (prompt hallucinations) and introduced a human‑in‑the‑loop review queue—illustrating *Customer Obsession* and *Ownership*. This experience reinforced that measurable impact and continuous learning are essential for an Amazon engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
