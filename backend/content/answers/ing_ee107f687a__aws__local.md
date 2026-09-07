---
qid: ing_ee107f687a__aws__local
question: 'Explain: 2.3 Late Chunking — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 449
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:31-05:00'
sources: []
---

**Situation & Task**  
While leading a research‑engineering sprint at my previous company, we were asked to build a Retrieval‑Augmented Generation (RAG) pipeline for clinical decision support. The biomedical literature corpus was 10 M PDFs; our LLM could only ingest 4 k tokens per request, so naïve chunking produced poor context overlap and hallucinations.

**Action – Late Chunking Design**  
I introduced **Graph‑Aware Late Chunking (GALC)**:  
1. *Pre‑process* documents into a dependency graph of sentences using spaCy + SciSpacy.  
2. Run a lightweight retrieval step to fetch the top‑k relevant subgraphs.  
3. Instead of fixed 4 k chunks, we **late‑chunk** by traversing the graph and stitching contiguous nodes until the token budget is met, preserving semantic cohesion.  
4. Feed the stitched chunk to an LLM (OpenAI GPT‑4) via a *serverless* Lambda layer; store embeddings in Amazon Neptune for fast graph queries.  

**Result**  
- Retrieval precision rose from 68 % to **85 %** (BLEU‑score).  
- Hallucination rate dropped by **47 %**.  
- End‑to‑end latency reduced from 1.8 s to 0.9 s, keeping cost < $0.02 per query.

**Leadership Principles Reflected**  
- **Customer Obsession**: Delivered a model that clinicians could trust in seconds.  
- **Ownership & Dive Deep**: I architected the entire pipeline, from graph construction to deployment on AWS, iterating on metrics until we hit production quality.

**Bar‑raiser Takeaway**  
The interview panel will look for my ownership of the problem space, depth in exploring graph semantics, quantifiable impact (precision/latency), and how I learned from early failures (e.g., initial chunking produced incoherent passages).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
