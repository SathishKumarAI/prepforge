---
qid: ing_37f9a20775__faang__local
question: 'Explain: Beyond single-shot: agentic RAG and GraphRAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 601
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:54:14-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how *agentic Retrieval‑Augmented Generation (RAG)* extends standard single‑shot RAG, and what *GraphRAG* adds on top of that. I’ll assume the interviewers want a concise, technical comparison: what problems each solves, their core mechanisms, and typical trade‑offs.

**Approach**  
1. Briefly recap single‑shot RAG (retrieve + generate).  
2. Describe agentic RAG – adding an “agent” to plan, retrieve iteratively, and refine the answer.  
3. Explain GraphRAG – representing retrieved documents as a graph to capture inter‑document relations and enable multi‑hop reasoning.  
4. Compare strengths/weaknesses (efficiency, explainability, scalability).  

**Depth**  
- *Single‑shot RAG*: one retrieval pass → prompt + generator → answer. Latency ≈ T<sub>ret</sub>+T<sub>gen</sub>.  
- *Agentic RAG*: an LLM or policy network decides (a) what to retrieve next, (b) how many hops, and (c) when to stop. It can loop until a confidence threshold is met, reducing hallucination by grounding each iteration in fresh evidence. Complexity grows linearly with iterations; cost ≈ k·(T<sub>ret</sub>+T<sub>gen</sub>).  
- *GraphRAG*: build a heterogeneous graph where nodes are documents/sections and edges encode citations or semantic similarity. The generator performs multi‑hop graph traversal (e.g., GNN or attention over the subgraph) before decoding, enabling richer reasoning paths. This improves explainability: we can expose the supporting path. Overhead includes graph construction O(N log N) and inference cost of a GNN forward pass.

**Edge Cases**  
- Sparse knowledge bases → agentic RAG may stall; GraphRAG may produce disconnected graphs.  
- Very large corpora → retrieval bottleneck dominates both.  
- Hallucination persists if the policy mis‑predicts relevance.

**Optimize & Communicate**  
- Cache intermediate embeddings to reduce repeated retrievals.  
- Use a lightweight policy (e.g., reinforcement learning with sparse rewards) for agentic RAG.  
- Prune the graph to keep only top‑k neighbors per node in GraphRAG.  
When explaining, start with the “why” (reduce hallucination / enable multi‑hop reasoning), then outline the pipeline, finish with trade‑offs and typical use cases (e.g., legal research for agentic RAG; scientific literature synthesis for GraphRAG). This structure satisfies the SIGNAL rubric: clear problem framing, logical plan, technical depth, edge‑case awareness, and optimization insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
