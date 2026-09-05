---
qid: ing_2bc37b6052__star__local
question: 'Explain: Pattern 2: Cost-Optimized with Prompt Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 344
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:27-05:00'
sources: []
---

**Situation** – In the last quarter we were launching a conversational AI product for a large retail client. The model’s per‑token cost hit $0.10/1k tokens and our usage forecast was 12 M tokens/month, which would exceed the budget by ~30 %.  

**Task** – I had to reduce the average token count per request without sacrificing user experience or model accuracy, staying within a fixed monthly spend.

**Action** – I implemented prompt‑caching:  
1. Analyzed the most common question templates (≈ 4,000 distinct prompts).  
2. Built an in‑memory LRU cache keyed by normalized prompt text and stored the full prompt string plus metadata.  
3. Updated the inference pipeline to first check the cache; on a hit we bypass the expensive tokenization step and directly feed the cached prompt to the model.  
4. For new prompts, we pre‑compute and store them asynchronously so subsequent requests benefit immediately.  
5. Added a lightweight telemetry layer to monitor cache hit rates and token savings.

**Result** – The cache hit rate climbed to 82 %, cutting average tokens per request from 1,200 to 240—an 80 % reduction. Monthly spend dropped from $12k to $2.4k while latency improved by ~30 ms. I learned that thoughtful caching not only slashes costs but also simplifies the inference workflow, and that continuous monitoring is key to maintaining high hit rates as user behavior evolves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
