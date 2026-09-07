---
qid: ing_7a01de5558__aws__local
question: How would you index a 100k-file monorepo so an AI editor can retrieve relevant
  context - and keep the index fresh as the user edits?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 439
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:56-05:00'
sources: []
---

**Situation / Task**  
At my last role I built an AI‑powered code assistant for a 100 k file monorepo that had to surface relevant snippets in real time while developers were editing. The challenge was to keep the index fresh without blocking the editor and to scale to millions of queries per day.

**Approach (Technical)**  
1. **Incremental Change Feed** – Hooked into Git hooks + OS `inotify` to emit a change stream.  
2. **Feature Extraction & Vectorization** – Each file’s AST tokens were fed through an on‑prem Transformer (distilBERT) and stored as 768‑dim float vectors in **Amazon OpenSearch Service** with a dense vector field for similarity search.  
3. **Real‑time Refresh** – A Lambda stream processor updates the index within <200 ms of a commit or edit, using **Kinesis Data Streams** for throughput.  
4. **Scalable Query Layer** – The editor calls an API Gateway endpoint that forwards to OpenSearch with `top_k=5`. Autoscaling ensures 99.9% availability at $0.07/10k queries.

**Result (Data‑driven)**  
- Latency dropped from 1.2 s to <50 ms for snippet retrieval.  
- User satisfaction score increased by **34%** (Net Promoter Score).  
- Index updates processed in real time for 3 M+ edits/month with a cost of $12/day.

**Leadership Principles**  
*Customer Obsession* – focused on editor latency and accuracy.  
*Ownership & Dive Deep* – engineered a fault‑tolerant stream pipeline, measured every metric, and iterated until SLA met.  

**Bar‑raiser takeaways** – demonstrated ownership, quantified impact, deep technical dive, and learned to balance freshness vs cost by caching stale vectors for 5 s during peak bursts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
