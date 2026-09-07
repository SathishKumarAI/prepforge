---
qid: ing_74880c4cee__faang__local
question: 'Q: How does GraphRAG solve the "Context Window" limit for aggregate questions?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 434
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:15:19-05:00'
sources: []
---

**Clarify**  
*Question*: “How does GraphRAG solve the *context window* limitation when answering aggregate queries?”  
I’ll assume we’re dealing with large‑scale LLMs whose prompt size caps at ~32k tokens, yet an aggregate question may require pulling together many facts spread across a knowledge graph.

**Approach**  
1. Identify all entities relevant to the query.  
2. Traverse the graph to collect only the *necessary* sub‑graph (pruned by relevance).  
3. Serialize this sub‑graph into a compact, token‑efficient format.  
4. Feed that serialized chunk as context to the LLM.

**Depth**  
GraphRAG first runs a lightweight semantic encoder on the query to rank graph nodes/edges by relevance. It then performs a bounded BFS (e.g., depth = 2 or 3) from each top node, stopping when the accumulated token count would exceed the window. The selected sub‑graph is converted into a “knowledge snippet” using a deterministic schema (node → attributes + outgoing edge labels). This snippet is typically < 10k tokens, far below the limit.  
The LLM receives:  
`[QUERY] … [KNOWLEDGE_SNIPPET]`  
and can aggregate across the snippet without hitting the context ceiling.

**Edge Cases**  
- *Over‑pruning*: If the sub‑graph is too small, the answer may be incomplete—test with varying depth thresholds.  
- *Duplicate entities*: Ensure de‑duplication to avoid token waste.  
- *Very large graphs*: Use approximate nearest‑neighbor indexing to keep retrieval fast.

**Optimize & Communicate**  
Future improvements: cache frequently used sub‑graphs; compress snippets via learned embeddings. When explaining, I’d highlight that GraphRAG trades a bit of retrieval time for guaranteed context coverage, making aggregate reasoning feasible within token limits. This shows clear problem understanding, systematic solution design, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
