---
qid: ing_879116cdf5__star__local
question: 'Q: Why is a Semantic Cache sometimes *more* expensive than a raw LLM call
  at low volume?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 377
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:03:41-05:00'
sources: []
---

**Situation:**  
At my last startup we launched a chatbot for customer support that ran on an OpenAI GPT‑4 model. We added a semantic cache in ElasticSearch to speed up repeated queries and cut token costs.

**Task:**  
When usage dropped after the launch, we had to investigate why the cache was actually costing more than just calling GPT‑4 directly for each request.

**Action:**  
I profiled the pipeline: every user query first hit the cache layer (Redis + vector search), which involved serializing the prompt, computing a dense embedding with a local model, querying the index, and then re‑serializing the cached response. For low traffic (~50 QPS) this added ~30 ms latency per request and consumed ~200 MB of RAM just to hold the embeddings. The cost of maintaining that infrastructure (Redis license + ElasticSearch cluster) was $0.15 per hour, while a raw GPT‑4 call at 10 K tokens cost ~$0.05. I re‑engineered the flow to bypass the cache when token count < 200 and traffic < 20 QPS, using a simple in‑memory LRU list instead.

**Result:**  
Cache usage dropped by 70%, cutting infrastructure spend from $108/month to $32/month. The overall response time improved from 350 ms to 220 ms on average. I learned that semantic caching is great at scale, but the per‑request overhead can outweigh its benefits when volume is low and cost of embeddings + storage dominates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
