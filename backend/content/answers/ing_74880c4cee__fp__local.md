---
qid: ing_74880c4cee__fp__local
question: 'Q: How does GraphRAG solve the "Context Window" limit for aggregate questions?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 481
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:12:41-05:00'
sources: []
---

**Why the “context‑window” problem arises**

A language model (LM) can only attend to a fixed token budget (≈ 8k–32k tokens).  
When an aggregate query demands reasoning over *many* documents, naïvely feeding all relevant passages exceeds this window, forcing truncation or loss of crucial evidence. The core issue is that the LM’s attention mechanism cannot jointly process more than its capacity.

**GraphRAG’s solution from first principles**

1. **Problem decomposition → graph structure**  
   Each document becomes a *node*; semantic similarity and metadata provide *edges*. Aggregation queries are naturally expressed as traversals over this graph (e.g., “sum values across all nodes connected to ‘sales’”).  

2. **Selective evidence retrieval**  
   Instead of packing every node into the prompt, GraphRAG performs a *path‑guided* subgraph extraction: it selects only those nodes that lie on the shortest or most relevant paths to the query target. This reduces token count while preserving all necessary information.

3. **Iterative reasoning → recursive context building**  
   The LM processes each selected node pair (or small cluster) separately, generating intermediate results. These are then *aggregated* in a higher‑level graph step, where only the aggregated tokens (e.g., partial sums) are fed back into the model. Thus the LM never sees the full corpus at once.

4. **Optimality from information theory**  
   By limiting attention to the minimal sufficient statistic of the query subgraph, GraphRAG maximizes mutual information between input and answer under a fixed token budget—an instance of *information bottleneck* applied to retrieval‑augmented generation.

**Non‑obvious insight**

The key trick is that *aggregation* itself can be treated as a graph operation. Rather than forcing the LM to perform all arithmetic in one go, we let the model compute local sub‑answers and then combine them externally. This turns a single‑pass bottleneck into a *divide‑and‑conquer* pipeline that scales linearly with the number of documents while staying well within the context window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
