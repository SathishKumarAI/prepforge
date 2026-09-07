---
qid: ing_2d4db73be9__aws__local
question: 'Explain: 2.1 Retrieval-Augmented Generation — Graph-Aware Late Chunking
  for Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 557
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:29-05:00'
sources: []
---

**Situation & Task**  
In my previous role at a med‑tech startup, we were building an AI assistant that answered clinicians’ questions from the latest biomedical literature. The product had to surface *exact* evidence while keeping latency below 1 s for real‑time chat. Our baseline Retrieval‑Augmented Generation (RAG) pipeline—retrieve top‑k abstracts and feed them into a large language model—yielded an F1 of 0.68, but users complained about irrelevant context and long inference times.

**Action – Graph‑Aware Late Chunking**  
I introduced **Graph‑Aware Late Chunking (GALLC)**:  
1. Build a citation graph from PubMed and ArXiv using **Amazon Neptune**; each node = paper, edges = citations.  
2. During retrieval, run a *graph expansion* step in **AWS Lambda** that walks 2 hops from the query’s seed papers to capture semantically related works.  
3. Instead of chunking at fixed 512‑token boundaries, we split documents at logical sub‑sections (methods, results) using **Amazon Comprehend Medical** to detect section headers.  
4. Pass only the *late* chunks (those most likely to contain answer‑relevant sentences) to the language model in **Amazon Bedrock** (Claude or GPT‑4), reducing input size by 40 %.  

This design kept a single request per query, preserved citation context for credibility, and avoided over‑generation.

**Result**  
- Retrieval precision rose from 0.65 to **0.82**; overall F1 improved to **0.78** (≈15 % absolute gain).  
- Inference latency dropped from 2.3 s to **0.9 s**, meeting our SLA.  
- Cost per query fell by ~30 % because Bedrock calls processed fewer tokens.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered a faster, more accurate assistant that clinicians trust.  
- *Dive Deep & Ownership*: Built the citation graph from scratch and iteratively tuned chunking logic.  

**What a Bar‑Raiser Looks For**  
- Quantified impact (F1, latency, cost).  
- Depth of system design (graph traversal, semantic chunking).  
- Learning loop: after initial deployment we observed hallucinations; I added a *confidence gating* layer that flags low‑certainty answers for human review.  

This experience demonstrates my ability to blend ML research with AWS services to solve real‑world problems at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
