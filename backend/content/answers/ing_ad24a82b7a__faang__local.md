---
qid: ing_ad24a82b7a__faang__local
question: 'Explain: Retrieval Quality Drift — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 504
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:26:06-05:00'
sources: []
---

**Retrieval‑Quality Drift & RAG Evaluation Patterns**

---

### Clarify  
We’re looking at *how retrieval‑augmented generation (RAG) models can degrade over time when the external knowledge base changes*. The drift is measured by comparing model outputs against ground truth as the corpus evolves. I’d confirm:  

- Which similarity metric (e.g., BLEU, ROUGE, F1) you’re using for “quality”.  
- How often updates occur in the source documents.  
- Whether we’re evaluating *retrieval accuracy* or *end‑to‑end generation fidelity*.  

### Approach  
1. **Baseline**: Run RAG on a fixed snapshot and record metrics.  
2. **Introduce Drift**: Incrementally modify the corpus (add/delete/modify docs).  
3. **Re‑evaluate** at each step, capturing retrieval hit rates and downstream answer scores.  
4. **Analyze Patterns**: Plot drift vs. time; identify “sweet spots” where performance drops sharply.

### Depth  
- Retrieval quality is typically measured by *Recall@k* of relevant documents.  
- Generation fidelity can be captured via *Exact Match (EM)* or *ROUGE-L*.  
- Complexity: Each evaluation run costs **O(N·k)** for retrieval plus the transformer inference cost **O(L²)** where L is sequence length.  
- Trade‑offs: A larger k improves recall but increases latency; higher‑dimensional embeddings reduce collision but need more GPU memory.

### Edge Cases  
- Sudden document removal causing *false negatives* in retrieval.  
- Synonym drift leading to semantic mismatches not caught by exact string matching.  
- Adversarial edits that keep the same surface form but alter meaning—harder for cosine similarity to detect.

### Optimize & Communicate  
- **Cache embeddings** and update only changed docs to reduce recomputation.  
- Use *dynamic re‑ranking* (e.g., BERTScore) on top‑k hits to mitigate retrieval errors.  
- Present findings in a dashboard: drift timeline + confidence intervals, so stakeholders can decide when to trigger full re‑indexing.

By structuring the investigation this way—clarifying assumptions, outlining incremental evaluation, detailing metrics and complexity, anticipating edge cases, and proposing efficient mitigations—we demonstrate rigorous problem solving that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
