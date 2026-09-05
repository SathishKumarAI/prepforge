---
qid: ing_b92ab82a12__star__local
question: 'Explain: Cost estimate — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 388
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:34-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new knowledge‑base feature for our SaaS platform. The product team wanted to replace the keyword‑only search with a semantic search engine powered by OpenAI’s embeddings, but they needed a clear cost estimate before committing the budget.

**Task:**  
I was tasked with delivering a detailed cost projection that covered API usage, compute resources, and maintenance over a one‑year horizon, while also outlining potential savings from reduced support tickets.

**Action:**  
First I benchmarked our current search traffic (≈ 200k queries/month) and mapped each query to an embedding call. Using OpenAI’s pricing model ($0.02 per 1K tokens for embeddings), I calculated the monthly token usage (~ 5M tokens → $100). Then I set up a test environment on AWS SageMaker, noting that inference cost would be about $0.10 per 1k requests, adding another ~$50/month. I factored in a 20% buffer for peak traffic and a one‑time migration cost of $3,000. Finally, I built a spreadsheet that automatically updated costs as usage grew.

**Result:**  
The final estimate came to roughly **$180/month + $3k upfront**, projecting a 15% reduction in support tickets within six months. The product team approved the budget, and we rolled out semantic search with a clear cost model that stayed under budget by 12% thanks to early optimization of token usage. This experience taught me how to translate technical requirements into actionable financial plans while keeping stakeholders aligned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
