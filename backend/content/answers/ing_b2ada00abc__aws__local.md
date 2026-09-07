---
qid: ing_b2ada00abc__aws__local
question: 'Explain: 3.3 Full-Text Evaluation Design — Graph-Aware Late Chunking for
  Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 402
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:50-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined the MedAI team, we were tasked with improving our Retrieval‑Augmented Generation (RAG) pipeline for clinical decision support. The existing system fetched entire PDFs as single chunks, causing hallucinations and latency spikes. We needed a *graph‑aware late chunking* strategy that would preserve biomedical context while keeping inference fast.

**Action (A)**  
I owned the redesign:  

1. **Graph Construction** – Built an entity‑relationship graph from PubMed abstracts using Amazon Neptune, indexing authors, MeSH terms, and citation links.  
2. **Late Chunking** – Implemented a two‑stage chunker in AWS Lambda that first splits documents into semantic blocks (using sentence embeddings from SageMaker’s `blenderbot-400M`), then expands each block by traversing the graph to pull related entities only when the downstream LLM requests them.  
3. **Evaluation Pipeline** – Deployed a full‑text evaluation harness on Amazon SageMaker Studio, scoring outputs against PubMedQA with BLEU and ROUGE-L metrics.

**Result (R)**  
- Latency dropped 65 % (from 1.8 s to 0.6 s per query).  
- Hallucination rate fell from 12 % to 3 %.  
- User satisfaction in a pilot study rose 28 % (NPS +15).  

**Learning & Bar‑raiser cues**  
I documented trade‑offs: graph storage cost (~$0.05/GB) vs. inference speed, and iterated on the chunk size after observing diminishing returns beyond 200 tokens. This deep dive demonstrates ownership, data‑driven impact, and continuous learning—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
