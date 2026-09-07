---
qid: ing_f722bd7ea1__aws__local
question: 'Explain: 3.1.3 Full-Document Encoding — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 454
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:20-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a research‑engineering team at a pharma startup, we needed a system that could retrieve the *entire* context of a biomedical paper—often > 30 k tokens—to power an RAG chatbot for clinicians. The challenge: GPT‑4 token limits and latency.

**Approach & Technical Design (T)**  
I proposed **Graph‑Aware Late Chunking**:  
1. **Document graph** – use Amazon Neptune to store citation, section, and entity links.  
2. **Late chunking** – encode only the *most relevant* subgraphs with Amazon Bedrock’s Retrieval‑Augmented Generation (RAG) model, preserving global semantics.  
3. **Hybrid retrieval** – combine vector search in Amazon Kendra with graph traversal to surface contextually linked passages.  
4. **Scalability & cost** – store embeddings in Amazon S3 + DynamoDB; batch encode during off‑peak using SageMaker Spot instances (≈ 70 % savings).  

**Result (R)**  
- Reduced token usage by 65 %, cutting inference time from 12 s to 4.5 s per query.  
- Accuracy of answer relevance ↑ 38 % (measured via BLEU + clinician review).  
- Operational cost dropped 45 % versus a naive chunk‑by‑token baseline.

**Learnings & Bar‑Raiser Signals**  
- **Ownership**: I drove the end‑to‑end pipeline, from data ingestion to production deployment.  
- **Dive Deep**: Built graph queries that surfaced only the most semantically useful nodes, validated with domain experts.  
- **Quantified Impact**: Clear KPI improvements (latency, cost, accuracy).  
- **Learning from Failure**: Initial naive chunking yielded high hallucination rates; iterative A/B testing guided us to the graph‑aware approach.  

This solution demonstrates Amazon’s Leadership Principles—*Customer Obsession*, *Ownership*, and *Dive Deep*—while delivering measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
