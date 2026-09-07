---
qid: ing_73d3be26d3__faang__local
question: 'Explain: Corrective RAG (CRAG) — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 404
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:13:51-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *Corrective Retrieval‑Augmented Generation* (CRAG), a variant of agentic RAG that lets an AI system actively correct its own hallucinations by querying external knowledge sources. Key assumptions: the model can access a retriever, has a policy for when to ask, and receives labeled corrections during training.

**Approach**  
1. Define the problem of hallucination in vanilla RAG.  
2. Introduce CRAG’s corrective loop: generate → evaluate → retrieve evidence → revise.  
3. Outline the components (policy network, retriever, verifier).  

**Depth**  
CRAG augments a standard RAG pipeline with an *agent* that monitors confidence scores and content‑quality metrics. When a threshold is breached, it issues a query to an external knowledge base (e.g., Wikipedia, domain‑specific API). The retrieved passages are fed back into the generator as context. A lightweight verifier—often a supervised classifier or a second transformer—scores the revised output against factuality benchmarks. Training uses reinforcement learning where rewards come from alignment with ground truth and reduction of hallucinated facts.

**Edge Cases**  
- Over‑retrieval leading to noisy context.  
- Circular corrections if retrieved evidence is also flawed.  
- Latency spikes when frequent queries are made.  
Testing involves synthetic prompts with known false statements, measuring factual accuracy before/after CRAG, and profiling latency.

**Optimize & Communicate**  
To improve efficiency, cache high‑confidence retrievals and limit query frequency via a learned gating policy. For clarity to stakeholders, I’d present a diagram of the corrective loop, benchmark tables showing % hallucination reduction, and a trade‑off curve between accuracy and inference time. This demonstrates structured reasoning, depth in algorithmic design, and practical awareness—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
