---
qid: ing_841d7082c7__faang__local
question: 'Explain: Memory and context management — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 429
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:52:03-05:00'
sources: []
---

**Clarify**  
You’re asking how an LLM‑based agent remembers past interactions (context) while calling external tools (API calls, databases). Key assumptions: *(1)* the agent operates in a stateless request/response cycle; *(2)* it can store and retrieve key facts; *(3)* tool calls are deterministic or have side‑effects.  

**Approach**  
1. **State persistence** – keep a structured memory (e.g., vector DB, RAG index) keyed by session ID.  
2. **Context window management** – truncate older messages while preserving high‑value chunks via semantic similarity.  
3. **Tool invocation protocol** – embed “tool calls” in the prompt, parse responses, and update memory with results.  

**Depth**  
- *Memory:* Use embeddings + LRU or TFIDF ranking to fetch top‑k relevant snippets; store metadata (source, timestamp).  
- *Context:* Keep the last ~4–8 k tokens for the model, augmenting with retrieved snippets as “retrieval‑augmented generation.”  
- *Tool use:* Define a JSON schema: `{"name":"search","arguments":{"query":"..."} }`. After execution, append result to memory and continue. Complexity is O(log n) for retrieval (inverted index) and constant for tool calls.  

**Edge Cases**  
- **Memory overflow:** when too many facts accumulate; test with high‑frequency sessions.  
- **Tool failure or latency:** fallback to cached results; test retry logic.  
- **Hallucinations:** verify retrieved facts against authoritative sources.  

**Optimize & Communicate**  
- Batch tool calls to reduce round‑trips.  
- Compress embeddings (FAISS) for speed.  
- Log each interaction for auditability.  
Explain this flow to interviewers, highlighting trade‑offs between freshness vs. latency and how you’d monitor performance in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
