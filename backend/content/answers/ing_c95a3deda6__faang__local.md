---
qid: ing_c95a3deda6__faang__local
question: What are Agent Skills, and when do you package knowledge as a skill rather
  than a tool, an MCP server, or retrieval?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 544
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:28:06-05:00'
sources: []
---

**Clarify**  
*Question:* “What are Agent Skills?” – i.e., reusable modules that encapsulate knowledge or behavior for an LLM‑powered agent.  
*When to package as a skill versus a tool, MCP server, or retrieval?* I’ll assume we’re building a production‑grade agent platform (e.g., in Meta’s RAG stack) where latency, scalability, and safety are key.

**Approach**  
1. Define the **semantic boundary** of a skill (stateful logic + domain knowledge).  
2. List decision criteria: *complexity*, *reusability*, *security*, *latency*, *data freshness*.  
3. Map each candidate to one of the four abstractions.

**Depth**  

| Abstraction | Typical use‑case | Rationale |
|-------------|-----------------|-----------|
| **Skill** | Complex, stateful reasoning (e.g., booking a flight with itinerary persistence). Requires internal knowledge graph + policy logic. | Encapsulates domain rules; reusable across agents; can expose a clean API (`BookFlight(params)`). |
| **Tool** | Stateless, single‑shot actions (HTTP call to weather API, arithmetic). | Lightweight, low latency; no local state needed. |
| **MCP server** | Heavy computation or GPU‑bound inference (e.g., image captioning). | Offloads expensive work; can be scaled independently. |
| **Retrieval** | Purely information lookup (knowledge base query). | Fast, cacheable; no execution logic beyond fetch. |

**Edge Cases**  
- *Data drift*: Skills with hard‑coded rules may become stale → need periodic retraining.  
- *Security*: A tool that exposes credentials must be sandboxed; a skill that manipulates state could leak data if not isolated.  
- *Latency spikes*: Heavy skills should be throttled or migrated to MCP.

**Optimize & Communicate**  
1. **Modularize**: Expose each skill as a micro‑service with versioning.  
2. **Cache**: Retrievals can use distributed caches; tools may cache auth tokens.  
3. **Observability**: Instrument each abstraction for latency, error rates.  

When I explain this to interviewers, I’ll emphasize that the choice hinges on *statefulness*, *resource intensity*, and *reusability*. Skills are the right abstraction when you need a reusable, stateful decision engine; otherwise lean toward tools, MCP servers, or pure retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
