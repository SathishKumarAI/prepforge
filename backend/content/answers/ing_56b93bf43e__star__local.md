---
qid: ing_56b93bf43e__star__local
question: 'Explain: Structured output and small models — GitHub - getzep/graphiti:
  Build Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 332
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:26-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with adding a real‑time recommendation engine for a news platform that served 2 M daily users. The existing ML pipeline used large transformer models which were too slow and memory‑hungry to run on our edge servers.

**Task:**  
I needed to redesign the system so it could produce structured output—user–article relevance triples—while keeping inference latency under 50 ms and model size below 15 MB, all without sacrificing accuracy.

**Action:**  
I built a lightweight graph‑based model using Graphiti’s knowledge‑graph framework. First, I encoded articles and users as nodes with embeddings from a distilled BERT encoder (≈1 M parameters). Then I applied a small GCN layer to propagate relevance signals across the user–article graph, producing structured output in the form of ranked triples. To keep the model tiny, I pruned low‑importance edges and quantized weights to 8‑bit integers. Finally, I wrapped the inference loop in Rust for micro‑second execution and deployed it on our CDN edge nodes.

**Result:**  
Latency dropped from 300 ms to 35 ms and model size shrank to 12 MB. Accuracy improved by 4% in AUC, driving a 7% lift in click‑through rate. I learned that marrying knowledge graphs with aggressive pruning can yield high‑quality structured predictions even on constrained hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
