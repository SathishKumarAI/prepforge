---
qid: ing_91bed0b07d__think__local
question: 'Explain: RAG Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 538
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:43:10-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What is “RAG”?* – Retrieval‑Augmented Generation, a hybrid of retrieval (e.g., vector DB) and generative LLM.  
   - *“Evaluation patterns”* – methods or metrics used to judge RAG systems’ performance.  
   - Assume the user wants a high‑level overview, not code, and that we can cite common benchmarks.

**2️⃣ Choose a mental framework**  
   1. **Task dimension** – classification, QA, summarisation, etc.  
   2. **Evaluation axis** – *retrieval quality*, *generation quality*, *end‑to‑end* (overall).  
   3. **Metric families** – quantitative scores (accuracy, BLEU, ROUGE), qualitative judgments (human relevance, faithfulness).

**3️⃣ Build the answer step‑by‑step**  
   - Start with a brief recap of RAG architecture.  
   - List retrieval‑centric metrics: Recall@k, MRR, Precision@k, BM25 F1.  
   - Move to generation‑centric scores: BLEU, ROUGE‑L, METEOR, BERTScore, perplexity.  
   - End‑to‑end composites: Exact Match (EM) for QA, overall accuracy, or custom “Faithfulness” metrics (e.g., HUME).  
   - Mention human evaluation pipelines: Likert scales on relevance, correctness, hallucination rate.  
   - Highlight recent benchmarks (MS MARCO, Natural Questions) and open‑source libraries (OpenNMT‑Eval, evaluate.py).

**4️⃣ Avoid common pitfalls**  
   - Don’t conflate retrieval recall with final answer quality; a perfect retrieval can still lead to hallucinations.  
   - Beware of over‑relying on BLEU/ROUGE for generative QA—they penalise paraphrasing.  
   - Skip trivial “accuracy” numbers without context (e.g., dataset difficulty, baseline).  
   - Don’t ignore the cost of human studies; they’re essential but resource‑heavy.

**5️⃣ Sanity‑check & articulate clearly**  
   - Re‑read each metric’s definition to ensure correctness.  
   - Use a simple example (retrieving “Paris” for “capital of France”) to illustrate how metrics would evaluate it.  
   - End with a concise takeaway: RAG evaluation blends retrieval stats, generative scores, and human judgments; balanced use gives the most trustworthy assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
