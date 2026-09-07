---
qid: ing_b67a634ff7__faang__local
question: You are exposing retrieval as a tool to an agent, over MCP. How does designing
  a tool interface differ from designing a retrieval API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 441
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:47:14-05:00'
sources: []
---

**Clarify**  
You’re giving an LLM access to *retrieval* via a **tool** (e.g., `search(query)`) that the agent can invoke on demand, versus exposing a plain REST/GraphQL retrieval API for arbitrary clients. Key assumptions:  
- The tool is called from within the agent’s prompt loop and must return text or JSON.  
- Latency tolerance, rate limits, and security policies differ between internal calls vs public APIs.

**Approach**  
1. Define the **tool contract** (method name, arguments, response schema).  
2. Map that to an underlying retrieval service (e.g., ElasticSearch, Pinecone).  
3. Wrap the call with safety checks (prompt injection guard, user‑role filtering).  
4. Expose a lightweight interface for the agent; no HTTP overhead.

**Depth**  
- **Tool signature**: `search(query: str) -> List[Doc]`.  
- Validate `query` length and sanitize to avoid injection.  
- Cache recent results per session (LRU, TTL = 30s).  
- Rate‑limit per agent (e.g., 5 calls/second).  
- Use async I/O so the agent can continue generating while awaiting.  
Complexity: O(1) for cache hit; otherwise O(log N + k) for vector search. Trade‑off: higher latency vs richer context.

**Edge Cases**  
- Empty or nonsensical queries → return empty list with a warning.  
- Retrieval failures (timeout, 5xx) → retry once, then fallback to canned response.  
- Exceeding rate limit → raise `ToolRateLimitError`.

**Optimize & Communicate**  
Explain that the tool interface is *lightweight* and *synchronous from the agent’s view*, hiding network details, whereas a retrieval API must expose HTTP semantics, authentication, pagination, and broader usage patterns. Emphasize how caching, sanitization, and per‑agent rate limits keep the system safe and performant for internal use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
