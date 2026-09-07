---
qid: ing_2c1e67f191__faang__local
question: 'Pair-programming: build a service that takes a user question, enriches
  it with data from a third-party API, and answers via a chat-model API. How do you
  structure it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 472
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:25:49-05:00'
sources: []
---

**1️⃣ Clarify**  
We need an end‑to‑end service:  
* Input – user query (text).  
* Enrichment – fetch relevant facts from a third‑party API (e.g., knowledge graph).  
* Generation – send the combined prompt to a chat‑model API and return its answer.  
Assumptions:  
- Third‑party API is RESTful, rate‑limited, returns JSON.  
- Chat‑model API accepts a prompt string and streams back tokens.  
- Latency tolerance ≈ 1–2 s; we can cache results.

**2️⃣ Approach**  
*Front‑end → API Gateway → Service Layer → Enrichment → Generation → Response.*  
Use async I/O (Node.js, Python `asyncio`) to parallelize enrichment and model calls. Cache enrichment responses in Redis keyed by query hash. Use circuit breaker for external APIs.

**3️⃣ Depth**  
```python
async def handle_query(q):
    key = md5(q.encode()).hexdigest()
    enriched = await redis.get(key)
    if not enriched:
        enriched = await enrich_with_api(q)      # async HTTP call
        await redis.setex(key, 3600, enriched)
    prompt = f"User: {q}\nContext: {enriched}"
    answer = await chat_model(prompt)           # stream tokens
    return answer
```
*Complexity*: O(1) cache lookup + O(n) API request.  
*Trade‑offs*: Caching reduces cost but may stale data; circuit breaker prevents cascading failures.

**4️⃣ Edge Cases**  
- API timeout → fallback to “I’m sorry, I can’t fetch info right now.”  
- Empty enrichment → proceed with bare prompt.  
- Rate limits exceeded → exponential backoff and user retry message.  
- Very long queries → truncate or chunk.

**5️⃣ Optimize & Communicate**  
Explain why async reduces wall‑time; caching cuts cost by ~70 %. Show latency profile: 200 ms cache hit, 800 ms API call, 1 s model response. End with a simple diagram and mention monitoring (Prometheus) for SLA compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
