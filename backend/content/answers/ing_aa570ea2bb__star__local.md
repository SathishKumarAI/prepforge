---
qid: ing_aa570ea2bb__star__local
question: 'Explain: Cost estimate (rough token math) — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 398
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:18-05:00'
sources: []
---

**Situation:**  
When launching a client‑facing document‑intelligence product at my previous company, the finance team required a clear budget estimate for the monthly usage of the OpenAI GPT‑4 model, because we were processing thousands of contracts per month and billing had to be accurate.

**Task:**  
I needed to calculate an approximate cost by estimating token consumption across all pipeline stages—pre‑processing, OCR extraction, semantic indexing, and query answering—so that the product could stay under a $5k/month cap while still delivering high accuracy.

**Action:**  
First, I logged a sample batch of 200 contracts and measured average tokens per stage: OCR output ~1.2 k tokens, embedding generation 0.8 k, prompt + context for GPT‑4 3 k, and final answer 0.5 k. Multiplying by 10,000 documents gave roughly 56 M tokens monthly. Using OpenAI’s pricing ($0.03/1K tokens for input, $0.06/1K for output), I calculated an expected spend of about $3,480/month. I then introduced a caching layer for embeddings and trimmed prompts to 2.5 k tokens, cutting usage by ~12% and bringing the estimate down to ~$3,080.

**Result:**  
The revised cost projection stayed comfortably below the budget while maintaining model performance (F1 score >0.92). I documented the token‑budget methodology in a reusable spreadsheet, enabling future projects to quickly adjust parameters for new models or volume spikes. This exercise also taught me how small prompt optimizations can have outsized financial impacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
