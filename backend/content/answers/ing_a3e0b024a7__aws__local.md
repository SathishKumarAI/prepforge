---
qid: ing_a3e0b024a7__aws__local
question: 'Q: What is the "Property Graph" in LlamaIndex and why is it superior to
  basic Vector RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 474
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:05-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science squad at a fintech startup, we needed to answer regulatory queries in real time. Our baseline was a **Vector RAG** model that stored embeddings in an S3‑based vector index (Pinecone). Latency hit 750 ms on average and recall dropped below 65 % for multi‑hop legal questions.

**Action**  
I proposed shifting to LlamaIndex’s **Property Graph** representation. The graph stores entities (accounts, transactions) as nodes and relationships (“transfers”, “holds”) as edges, with each node/edge carrying semantic embeddings. We built the graph in **Amazon Neptune**, used **SageMaker Neo** for inference, and leveraged **Lambda** to materialize edge weights on demand.

*Why it’s superior:*  
- **Explicit reasoning paths**: queries traverse relationships, yielding 3‑fold higher recall (≈ 82 %) because the model can infer multi‑step facts.  
- **Scalability**: Neptune scales to millions of nodes with sub‑second traversal; vector search remains in S3/Pinecone for bulk similarity.  
- **Cost**: We reduced SageMaker endpoint hours by 40 % by offloading simple similarity lookups to Pinecone and reserving GPU time only for graph inference.

**Result**  
Post‑migration, query latency dropped to 200 ms, recall climbed to 82 %, and our compliance team reported a 30 % reduction in manual review effort. The architecture now supports elastic scaling via Neptune auto‑scaling and S3 lifecycle policies, keeping monthly spend under $12k.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivering faster, more accurate answers to regulators.  
- **Ownership & Dive Deep**: Architecting a hybrid graph/vector system that balances performance and cost.  

*Bar‑raiser takeaway:* Clear ownership of the end‑to‑end pipeline, depth in understanding graph semantics vs. vector similarity, and measurable impact on latency/recall are non‑negotiable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
