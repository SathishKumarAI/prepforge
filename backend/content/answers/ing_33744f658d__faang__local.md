---
qid: ing_33744f658d__faang__local
question: 'Q: How would you evaluate a RAG system? — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 522
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:44:28-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a rubric for *RAG* (Retrieval‑Augmented Generation) systems that balances **accuracy**, **relevance**, and **robustness**. Key assumptions:  

- The system uses a fixed knowledge base or dynamic web‑search API.  
- Ground truth documents or answers are available for benchmarking.  
- Evaluation should be automated, repeatable, and interpretable by stakeholders.

**2️⃣ Approach**  
1. Define *metric categories* (accuracy, relevance, coverage, latency).  
2. Build a benchmark set: queries + gold‑retrieved docs + expected responses.  
3. Run the RAG pipeline on each query; capture retrieval hits, generated text, and timing.  
4. Apply automated scoring per category, then aggregate into an overall score.

**3️⃣ Depth**  

| Category | Metric | Calculation | Complexity |
|----------|--------|-------------|------------|
| Retrieval Accuracy | Recall@k / Precision@k | Count relevant docs in top‑k | O(N log N) for ranking |
| Generation Relevance | ROUGE/LCS vs. gold answer | Token overlap | O(L²) per pair |
| Faithfulness | Factual consistency (BERTScore + external QA check) | Compare model output to known facts | O(L) with pre‑computed embeddings |
| Latency | Avg. inference time | Measure end‑to‑end | O(1) per query |

Aggregate: `score = w₁·recall + w₂·rouge + w₃·faithfulness – w₄·latency`.

**4️⃣ Edge Cases**  
- **Non‑existent facts** → retrieval precision drops; fallback to “I don’t know.”  
- **Ambiguous queries** → multiple relevant docs; test disambiguation.  
- **Adversarial prompts** → ensure model doesn’t hallucinate from retrieved context.

**5️⃣ Optimize & Communicate**  
*Improvements*: cache embeddings, use approximate nearest neighbors for retrieval speed, fine‑tune the generator on retrieved‑context data.  
*Narrative*: “We first quantify how well the system pulls correct documents (Recall@k), then measure whether the generated answer faithfully reflects those docs (ROUGE + faithfulness). Finally we penalize latency to ensure real‑time usability.”  

This structured pipeline yields transparent, actionable insights for product and research teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
