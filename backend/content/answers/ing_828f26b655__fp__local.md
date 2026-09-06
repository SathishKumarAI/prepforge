---
qid: ing_828f26b655__fp__local
question: 'Explain: Endpoint: GET /users/{user_id}/presence — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 332
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:02-05:00'
sources: []
---

**Why the path matters**

The fundamental problem is *identifying a single user’s real‑time presence state* (online/offline/typing).  
In RESTful systems we encode that identity in the URL: `/users/{user_id}`. This satisfies three deep principles:

1. **Uniform interface** – each resource has a canonical address, so caches and intermediaries can treat it generically.  
2. **Idempotence & safety** – GET never mutates state; the same URI always yields the same representation (unless the underlying presence changes).  
3. **Scalability via sharding** – `{user_id}` can be hashed to a partition, letting multiple servers serve presence without central coordination.

Adding `/presence` makes the intent explicit: it’s not “get user profile” but “query the presence sub‑resource.” This keeps the API self‑describing and aligns with HATEOAS; a client can discover that `GET /users/123/presence` is available by following a link in the user representation.

**Non‑obvious insight**

Most designs treat presence as a separate service with its own endpoints. By nesting it under `/users`, we automatically inherit all user‑centric access controls and rate limits, avoiding an extra lookup layer. Moreover, caching layers can now cache `GET /users/123/presence` independently of the user profile, yet still respect the same partitioning logic—an elegant synergy between resource hierarchy and distributed storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
