---
qid: ing_bbe8798b64__aws__local
question: 'Explain: Consistency Approaches — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 393
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:43-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a recommendation engine that served 12 M daily requests. The latency had ballooned to 350 ms because every query hit the model server and the database for cold‑start embeddings. My goal: cut average response time below 100 ms while keeping cost < $20k/month.

**Action (Design & Implementation)**  
I introduced a *consistency‑aware caching* layer.  
1. **Cache key** = userID+modelVersion.  
2. **AWS services** – Elasticache Redis for in‑memory store, Lambda@Edge to invalidate on model rollout, and DynamoDB Streams to capture embedding updates.  
3. **Consistency strategy**: *Read‑through + write‑back* with a 5 min TTL plus an “eventual” refresh triggered by the stream. This keeps reads fast while ensuring stale data is refreshed within seconds.  
4. Added a fallback path that streams directly to SageMaker endpoint only when cache miss occurs, guaranteeing correctness.

**Result**  
- Latency dropped from 350 ms → **90 ms (73% reduction)**.  
- Cache hit rate climbed to 98%, cutting SageMaker invocations by 65%.  
- Monthly cost fell from $35k to **$18k**, saving $17k.  

**Reflection & Learning**  
I practiced *Ownership* by owning the entire latency funnel, and *Dive Deep* by instrumenting cache metrics and tracing every miss path. The key takeaway: consistency is not “all‑or‑nothing”; a hybrid read‑through + stream‑driven refresh balances speed, correctness, and cost—exactly what Amazon expects from an architect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
