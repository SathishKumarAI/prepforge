---
qid: ing_15dfcbc89e__faang__local
question: 'Explain: Subgraph Error Masking in Hive Router — GraphQL (The Guild)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 488
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:00-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Subgraph Error Masking* within the **Hive Router** of a GraphQL service (The Guild).  
Assumptions:  
1. The Hive Router aggregates multiple subgraphs (micro‑services) into one schema.  
2. Errors can bubble up from any subgraph; we need a policy that hides or rewrites them for clients.  

**Approach**  
1. Describe the role of the router in request routing and error handling.  
2. Explain how subgraph errors are captured (GraphQL‑spec `errors` array).  
3. Detail the masking strategy: replace internal messages with generic ones, optionally attach a custom `errorCode`.  
4. Show how the router configures a `ErrorMaskingPolicy` per subgraph or globally.  

**Depth**  
- The router intercepts responses from each subgraph, merges data, and aggregates errors.  
- Masking is implemented via middleware that inspects each error’s `extensions.code`. If it matches an *internal* list (e.g., `DB_ERROR`, `TIMEOUT`), the middleware substitutes a public message: `"An unexpected error occurred."` and optionally adds a non‑disclosing code like `INTERNAL_SERVER_ERROR`.  
- The policy can be fine‑tuned: *strict* (hide all), *partial* (hide only sensitive fields).  
- Complexity: O(n) over errors per request; negligible overhead compared to query execution.  

**Edge Cases**  
- Errors with user‑supplied data that accidentally leak secrets.  
- Multiple subgraphs returning the same error type—ensure deduplication.  
- Clients expecting detailed diagnostics (e.g., developers in staging). Test with varied `extensions.code` sets and verify no leakage.  

**Optimize & Communicate**  
- Cache the masking policy to avoid repeated parsing.  
- Log masked errors server‑side for debugging while keeping client output clean.  
- Explain trade‑offs: tighter masking → less info for debugging; looser masking → potential data leaks.  

By structuring the answer this way, I demonstrate clear communication, deep technical insight, and an awareness of operational concerns—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
