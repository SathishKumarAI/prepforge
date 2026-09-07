---
qid: ing_330b785e50__aws__local
question: 'Explain: Using Prompt Caching to reduce the costs of Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 380
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:43-05:00'
sources: []
---

**Prompt Caching to Cut Contextual Retrieval Costs**  
*Leadership Principles: Ownership & Dive Deep*

**Situation:** Our recommendation engine served 2 M active users nightly, each query pulled a 30‑page context from DynamoDB and sent it to Bedrock for inference—$3.6 M/month in LLM calls.

**Task:** Own the cost curve and deliver results by reducing per‑query compute without sacrificing relevance.

**Action:**  
1. **Cache Prompts** – Stored the most frequent 5 K prompt–context pairs in ElastiCache Redis (cluster mode).  
2. **Lambda Cache Layer** – Wrapped Bedrock invocation with a Lambda that first checks Redis; on cache hit, returns pre‑computed embeddings + answer, bypassing Bedrock.  
3. **EventBridge Scheduler** – Periodically refreshed stale entries from DynamoDB, keeping freshness < 12 hrs.  
4. **Metrics Dashboard** – Monitored cache hit ratio and cost per request in CloudWatch.

**Result:** Cache hit rate rose to 78%, cutting Bedrock calls by 65% and monthly inference spend from $3.6 M to $1.2 M—a 66% savings—while latency dropped from 850 ms to 420 ms.  

*Learning:* Early assumptions about “one‑size‑fits‑all” caching failed; a small, targeted cache with warm‑up logic delivered the biggest bang for buck. This demonstrates true ownership: I scoped, engineered, and quantified impact, then iterated on failure points to reach production excellence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
