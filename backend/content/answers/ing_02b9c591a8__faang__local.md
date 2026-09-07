---
qid: ing_02b9c591a8__faang__local
question: 'Explain: Performance Risks with GraphQL — REST vs GraphQL - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 587
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:50:25-05:00'
sources: []
---

**Clarify**  
The question asks why a GraphQL API can pose *performance risks* compared to a traditional RESTful design, and what those risks are in practice. I’ll assume the client is a web/mobile app that calls an internal service layer, and that we’re concerned with latency, bandwidth, and resource utilization.

**Approach**  
1. Enumerate typical GraphQL pitfalls (over‑fetching, under‑fetching, complex queries).  
2. Contrast each with REST’s fixed contract.  
3. Quantify impact on compute, network, and caching layers.  
4. Suggest mitigations.

**Depth**  

| Risk | Why it hurts performance | Rest vs GraphQL |
|------|--------------------------|-----------------|
| **Variable query shape** | Each request can hit arbitrary fields → unpredictable cache hits; backend must parse & resolve a new execution plan per call. | REST endpoints are static; same response for the same URL, easy to cache. |
| **Deep nesting/joins** | Recursive resolvers may trigger N+1 DB calls or expensive joins; cost grows with depth. | REST usually fetches flat resources; heavy joins are deferred to a dedicated service. |
| **Large payloads** | Clients can request everything in one shot → over‑fetching, more data traversed over the wire and processed by clients. | REST endpoints expose only what’s needed per resource; payload size is bounded. |
| **Rate‑limit abuse** | Malicious or accidental complex queries can consume CPU/DB cycles disproportionally to bytes returned. | REST limits are straightforward (HTTP status codes, fixed URLs). |

*Complexity*: GraphQL execution time is O(#resolvers × avg resolver cost); caching granularity shrinks from whole‑resource to field‑level, increasing cache misses.

**Edge cases**  
- **High‑cardinality relationships**: a single query can return millions of rows.  
- **Recursive types** (e.g., comments → replies) lead to infinite loops if not capped.  
- **Client misbehaviour**: sending identical large queries in bursts.

**Optimize & communicate**  
1. Implement *query complexity limits* and depth‑capping middleware.  
2. Use a *batching/union resolver* pattern (DataLoader) to mitigate N+1 problems.  
3. Cache responses at field level but expose a “max‑depth” header to let clients know when they’ll hit cache misses.  
4. Monitor query patterns; auto‑ban or throttle unusual ones.

When explaining, I’d start with the core problem (unpredictable load), show concrete examples (deep joins), quantify impact, then outline practical safeguards—mirroring how a FAANG interview expects structured reasoning and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
