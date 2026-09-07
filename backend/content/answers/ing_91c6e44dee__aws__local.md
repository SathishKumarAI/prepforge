---
qid: ing_91c6e44dee__aws__local
question: 'Explain: Stop stuffing the context window. (Newsletter partner).'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 446
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:34-05:00'
sources: []
---

**Situation & Task**  
While revamping a newsletter‑generation service for 2 M daily subscribers, I discovered that feeding the entire article into the LLM caused token limits to be hit on ~18 % of requests, leading to “context overflow” errors and a 12 % drop in user engagement.

**Action**  
1. **Chunk & Summarize** – Implemented a two‑stage pipeline:  
   * Stage 1 (Lambda + Comprehend) → extract key sentences per paragraph (≤200 tokens).  
   * Stage 2 (SageMaker Endpoint) → generate concise bullet points (≈50 tokens).  
2. **Context Window Management** – Stored the summary in DynamoDB and fetched only the most recent 5 bullets when invoking Bedrock’s LLM, keeping total token usage < 4 k.  
3. **Automated Roll‑out** – Deployed via CloudFormation with Step Functions for canary testing (10 % traffic) before full switch.

**Result**  
- Reduced context‑overflow errors from 18 % to < 1 %.  
- Increased newsletter open rate by 7 % and click‑through by 4 % within two weeks.  
- Cut LLM invocation cost by ~35 % (less token usage per request).  

**Leadership Principles Highlighted**  
* **Customer Obsession** – Delivered a more reliable, engaging experience for millions of readers.  
* **Dive Deep & Ownership** – Investigated root cause, engineered end‑to‑end solution, and owned the full deployment pipeline.  

Bar‑raiser notes: clear ownership, quantitative impact, depth in technical choices (chunking vs raw context), learning loop from failure (token limits) to optimize cost & performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
