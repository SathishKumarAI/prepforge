---
qid: ing_ca15657fa6__faang__local
question: 'Explain: Estimate the cost and turnaround of running your diligence workflow
  over a 5,000-document data room, and tell me which lever you would pull first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 516
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:29:36-05:00'
sources: []
---

**Clarify**  
You’re asking for an estimate of the *cost* (time‑to‑money) and *turnaround* (days needed) to run a full AI‑driven due diligence workflow on a **5,000‑document data room**. I’ll assume:  
- Documents are PDFs/Word with mixed structure.  
- You have an existing LLM‑powered extraction pipeline (OCR → embedding → semantic search).  
- You can deploy in the cloud and have a small analyst team (~2 people) to curate results.

**Approach**  
1. **Data ingestion & OCR** – 5 k docs × ~0.5 s each = ~70 min.  
2. **Embedding generation** – 5 k × 0.3 s = ~25 min.  
3. **Indexing & semantic search setup** – ~15 min.  
4. **Analyst review + QA** – 5 k docs, 1 hr per analyst → 2 hrs total.  
5. **Reporting & export** – 10 min.

Total ≈ 3–4 hours of compute; with a small team, the turnaround is ~**1 business day** (including buffer for manual checks). Cost: Cloud GPU inference (~$0.50 per 1k tokens) × avg 300 tokens/doc = ~$75 + storage/compute ≈ **$100–150**.

**Depth**  
- Use a multi‑stage pipeline: OCR → text extraction → chunking → embedding (e.g., OpenAI Ada or open‑source).  
- Index in a vector store (FAISS/Pinecone) for sub‑second retrieval.  
- Analyst interface with auto‑highlighted clauses, risk flags, and a confidence score.

**Edge Cases**  
- Poorly scanned PDFs → higher OCR cost.  
- Highly domain‑specific jargon requiring fine‑tuned embeddings.  
- Documents in non‑English languages → need multilingual models.

**Optimize & Communicate**  
First lever: **Automate the extraction step with a robust OCR + chunking strategy**—this cuts manual time by ~70 %. I’d explain that improving accuracy upstream reduces downstream QA load, yielding both cost and turnaround savings. If the budget allows, adding GPU scaling can shave compute time further while keeping analyst effort constant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
