---
qid: ing_e95adff8b3__aws__local
question: 'Explain: Pitfall 9: Shallow Understanding of RAG Components'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 481
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:36-05:00'
sources: []
---

**Pitfall 9 – Shallow Understanding of RAG Components**

*Situation*:  
While building a Retrieval‑Augmented Generation (RAG) chatbot for our customer support portal, I noticed the team was treating “retrieval” and “generation” as interchangeable modules. This led to poor relevance scores and inflated latency.

*Task*:  
I had to redesign the pipeline so that each component (indexing, query expansion, vector search, LLM inference) was optimised independently, ensuring measurable gains in answer quality and response time.

*Action*:  
1. **Dive Deep** into the retrieval stack: benchmarked Elasticsearch vs. OpenSearch with dense‑vector plugins, measuring recall@k and latency at 100 k documents.  
2. Built a **two‑tier index**—a coarse lexical layer (OpenSearch) feeding a fine‑grained FAISS vector store on an EC2 spot fleet, reducing average query time from 1.8 s to 0.4 s.  
3. Implemented a *prompt‑engineering* wrapper that injects top‑N retrieved snippets into the LLM prompt (Claude/PaLM), reducing hallucination rate by 35%.  
4. Added **metrics dashboards** in CloudWatch and Grafana, tracking `retrieval_latency`, `generation_latency`, and `answer_relevance_score`.  

*Result*:  
- Latency dropped from 2.3 s to 0.7 s (30 % faster overall).  
- Answer relevance score improved from 58 % to 84 %.  
- Cost per request fell by 22 % thanks to spot‑instance optimisation.

**Leadership Principles Anchored**:  
- **Customer Obsession** – delivered faster, more accurate responses.  
- **Ownership & Dive Deep** – took full responsibility for end‑to‑end performance and dissected each component.  

**Bar‑raiser cues**:  
- Demonstrated ownership by re‑architecting the entire pipeline.  
- Showed deep technical insight (benchmarking, vector indexing).  
- Quantified impact with real metrics.  
- Learned from failure: early shallow design caused hallucinations; iterative profiling fixed it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
