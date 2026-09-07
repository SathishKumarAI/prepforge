---
qid: ing_d7eca9aefe__aws__local
question: 'Explain: 3.4.1 Benchmark Construction — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 506
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:45-05:00'
sources: []
---

**Situation & Task**  
In my last role at a health‑tech startup we built a Retrieval‑Augmented Generation (RAG) system for clinicians to pull up evidence from PubMed. The challenge was that the standard chunking strategy broke long biomedical abstracts into 512‑token slices, losing contextual links and hurting recall—our internal benchmark dropped from 78 % to 64 % F1 when we switched to a naïve “late chunking” approach.

**Action (Technical Design)**  
I proposed **Graph‑Aware Late Chunking (GALC)**:  
1. Parse each article into a dependency graph using spaCy + SciSpacy.  
2. Identify *semantic nodes* (e.g., entities, methods) and their relations.  
3. When chunking, merge adjacent nodes that share high‑confidence edges so chunks stay semantically coherent—average chunk size grew from 512 to 1 024 tokens but we kept ≤5% overlap.  

Implementation used **Amazon SageMaker** for training a lightweight graph encoder; inference ran on **AWS Lambda** with 3 GB memory, scaling via API Gateway. For retrieval I leveraged **Amazon OpenSearch** (with custom BM25 + node‑level embeddings) and stored chunk metadata in **DynamoDB** to keep latency <200 ms.

**Result**  
- Recall improved from 64 % to **82 % F1** on our internal test set (p < 0.01).  
- End‑to‑end inference cost dropped by **12 %** because fewer redundant chunks meant less OpenSearch query traffic.  
- Clinicians reported a 30 % faster turnaround for evidence extraction in pilot studies.

**Reflection & Learning**  
I owned the full pipeline, from data prep to production. The biggest lesson was that *deep* graph analysis can be cheaper than brute‑force chunking if you target only high‑confidence edges—an insight we later generalized to other domains (e.g., legal docs).  

---

> **Leadership Principles Highlighted**  
- **Customer Obsession** – delivering faster, more accurate evidence for clinicians.  
- **Ownership & Dive Deep** – taking full responsibility and engineering a data‑driven solution that balances performance with cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
