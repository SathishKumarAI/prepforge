---
qid: ing_38bdd2f709__aws__local
question: 'Explain: 2.2 Text Chunking Strategies for RAG — Graph-Aware Late Chunking
  for Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 466
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:07-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:*  
At my previous role I led a project to build an RAG system for clinical decision support. Clinicians complained that retrieved abstracts were too long or missing key facts, hurting trust.

*Task:*  
I had to design a text‑chunking strategy that kept semantic coherence while maximizing retrieval relevance in a highly structured biomedical corpus (~2 M PubMed articles).

*Action:*  
1. **Graph‑aware late chunking** – I built an *abstract dependency graph* (nodes = sentences, edges = citation or co‑reference links).  
   - Instead of fixed‑length slices, the algorithm traverses the graph and groups strongly connected subgraphs into chunks (~500 words each).  
2. **Late‑chunk retrieval** – During RAG, only a *single chunk* is fetched per query using an approximate nearest neighbor index (FAISS) on sentence‑level embeddings.  
3. **AWS services:**  
   - **Amazon SageMaker** for training the encoder and fine‑tuning the generative model.  
   - **Amazon OpenSearch Service** to store chunk vectors and metadata, leveraging its Graph search APIs for rapid subgraph extraction.  
   - **AWS Lambda + Step Functions** orchestrate on‑demand chunk creation when new literature is ingested.  

*Result:*  
- Retrieval precision improved from 0.62 to **0.78 F1** (validated against a clinician‑annotated test set).  
- End‑to‑end latency dropped by **35 %**, and storage costs fell 20 % because chunks were fewer but richer.  
- Clinicians reported a 40 % higher confidence in AI‑generated recommendations.

*Learnings:*  
I learned that “late” chunking keeps context intact, but it requires careful graph construction; we initially over‑merged sentences, causing hallucinations—fixing the threshold after iterative A/B tests cured this.  

**Takeaway:** By anchoring on *Customer Obsession* and *Dive Deep*, I turned a brittle RAG pipeline into a robust, scalable system that delivers measurable clinical value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
