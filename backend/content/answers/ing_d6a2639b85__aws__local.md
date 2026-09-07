---
qid: ing_d6a2639b85__aws__local
question: 'Q: What is "Label Bias" in In-Context Learning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 456
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:37-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation** – I was leading a research sprint to deploy an LLM‑based FAQ bot for our e‑commerce platform. The team noticed that the model’s in‑context predictions drifted toward certain answer labels, even when the prompt contained balanced examples.

**Task** – Identify and mitigate *label bias* so the bot could treat all product categories equally while keeping latency < 200 ms on AWS.

**Action**  
1. **Dive Deep into the prompt** – I profiled token usage per label (e.g., “Return Policy” vs. “Shipping”). The “Return Policy” label consumed ~35% of the context window, leaving fewer tokens for other classes.  
2. **Redesign prompt engineering** – Re‑ordered examples to give each class equal token weight and added a *label counter* token (“[COUNT]”) that normalizes representation.  
3. **AWS Implementation** – Deployed the LLM via Amazon Bedrock with a Lambda edge layer for on‑edge inference, ensuring sub‑200 ms latency. I stored prompt templates in S3 + CloudFront for cache consistency.  
4. **Bias Quantification** – Ran A/B tests: bias score (label frequency / expected uniformity) dropped from 0.68 to 0.12; user satisfaction rose by 14% and response accuracy improved by 9%.

**Result** – The bot served 1.2 M queries/day with 99.8% availability, while cutting compute cost by 18% through better prompt efficiency.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered a fair, high‑quality experience for all customers.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility to diagnose and fix the subtle bias issue.  

*Bar‑raiser notes:* Looked for clear ownership, deep technical analysis, measurable impact, and lessons learned from an initially unseen systemic problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
