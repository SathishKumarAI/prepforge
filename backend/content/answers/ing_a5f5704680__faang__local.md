---
qid: ing_a5f5704680__faang__local
question: How do you make tool outputs token-efficient, and why does it matter so
  much for agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 463
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:10:46-05:00'
sources: []
---

**Clarify**  
We’re asked: *“How do we make tool‑output token‑efficient, and why is this critical for agents?”*  
Assumptions to confirm:  
1. The agent calls external tools (APIs, databases, code executors).  
2. Each call returns a JSON/text payload that the LLM consumes.  
3. Tokens are billed or limited per prompt/response.  

**Approach**  
1. **Compact representation** – use concise schemas and minimal keys.  
2. **Selective field extraction** – request only needed data via query params or filters.  
3. **Post‑processing compression** – summarize, deduplicate, or encode (e.g., base64 for binary).  
4. **Streaming & pagination** – fetch in chunks to avoid a single large payload.  

**Depth**  
- *Schema design*: Define a minimal JSON contract; e.g., `{id, title, score}` instead of the full record.  
- *API query tuning*: Use `fields=` or `$select` to limit returned columns.  
- *Compression*: Apply gzip/deflate before sending, letting LLM decompress internally (many models support it).  
- *Streaming*: Leverage server‑sent events; process tokens as they arrive, discarding unnecessary ones early.  
- **Complexity**: These techniques add O(1) overhead for filtering and compression but reduce payload size from `O(n)` to `O(k)` where `k << n`.  

**Edge Cases**  
- APIs that don’t support field selection → fallback to post‑filtering, incurring higher cost.  
- Compression may increase CPU; measure latency vs. token savings.  
- Streaming may break if the LLM expects a single response block.  

**Optimize & Communicate**  
Highlight that token efficiency directly translates to lower compute costs and faster inference for agents, enabling more calls per second or larger context windows. Explain trade‑offs: aggressive compression saves tokens but can add latency; minimal schemas save bandwidth but risk missing needed data if assumptions change. Conclude by recommending automated schema validation and dynamic field selection as first‑class patterns in agent tool design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
