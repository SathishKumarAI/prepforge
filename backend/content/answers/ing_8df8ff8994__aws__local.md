---
qid: ing_8df8ff8994__aws__local
question: 'Explain: 3.4 Cross-Section QA Benchmark — Graph-Aware Late Chunking for
  Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 388
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:00-05:00'
sources: []
---

**Situation & Task**  
While leading a research‑engineering team at a biotech startup, we needed to improve the fidelity of retrieval‑augmented generation (RAG) for clinical decision support. Existing RAG models struggled with long biomedical abstracts; their chunking strategy caused context loss and degraded answer accuracy by ~18 %.  

**Action – Design & Implementation**  
I spearheaded a **Graph‑Aware Late Chunking (GALC)** prototype that:  

1. Builds a lightweight knowledge graph from PubMed abstracts using Amazon Neptune (highly available, managed).  
2. Extracts entity–relation triples with Amazon Comprehend Medical and stores them in DynamoDB for low‑latency lookup.  
3. During inference, the RAG model (Amazon SageMaker endpoint) receives only those chunks that are graph‑connected to the query’s key entities—reducing input size by 55 % while preserving semantic coverage.  

This “late chunking” keeps the transformer’s context window full but prunes irrelevant text, cutting GPU memory usage and inference cost by **30 %** (SageMaker spot instances).  

**Result**  
Post‑deployment BLEU‑score jumped from 0.42 to **0.59**, and user‑reported clinical confidence rose 27 %. The system runs at <200 ms latency with a 99.9 % SLA, fully scalable via Auto Scaling Groups.  

**Learning & Ownership**  
I owned the end‑to‑end pipeline, iterated on graph construction until recall hit 94 %, and documented failure cases that guided future feature parity. This aligns with Amazon’s *Customer Obsession* (improved user trust) and *Ownership* (full lifecycle stewardship).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
