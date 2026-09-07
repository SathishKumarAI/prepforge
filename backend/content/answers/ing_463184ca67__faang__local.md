---
qid: ing_463184ca67__faang__local
question: How do you evaluate the generation side of RAG - faithfulness, relevance,
  and citation quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 504
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:27:08-05:00'
sources: []
---

**Clarify**  
The question asks how to assess a Retrieval‑Augmented Generation (RAG) system on three fronts: *faithfulness* (does it stay true to the retrieved facts?), *relevance* (is the answer aligned with the user query?), and *citation quality* (are sources properly referenced?). We’ll assume we have access to the original documents, a ground‑truth set of correct answers, and that the system outputs both text and source links.

**Approach**  
1. **Metric selection** – choose quantitative scores for each dimension.  
2. **Data pipeline** – automatically align generated text with retrieved snippets and citations.  
3. **Evaluation loop** – compute metrics, analyze failures, iterate on model or retrieval strategy.

**Depth**  

| Dimension | Metric | Computation |
|-----------|--------|-------------|
| Faithfulness | *Fact‑check Accuracy* (binary per fact) | Extract factual claims via OpenIE; compare against a verified knowledge base. |
| Relevance | *ROUGE/ BLEU + Retrieval‑based Recall* | Standard n‑gram overlap with reference answer, plus proportion of user query terms present. |
| Citation Quality | *Citation Precision & Coverage* | Verify that cited passages contain the claimed facts (exact match or semantic similarity). |

- **Complexity**: O(n) per document for extraction; overall linear in output length.  
- **Trade‑offs**: Full fact‑checking is expensive; use a lightweight heuristic first, then deep NLP only on flagged claims.

**Edge Cases**  

- *Ambiguous facts*: multiple sources claim different values → flag uncertainty.  
- *Noisy retrieval*: irrelevant snippets cause false positives in faithfulness checks.  
- *Citation formatting errors*: broken URLs or missing IDs – detect via regex and fallback to content hash.

**Optimize & Communicate**  

1. Cache extracted facts from the knowledge base to reduce repeated lookups.  
2. Use a hierarchical evaluation: quick surface‑level metrics first, then deeper analysis only on low‑scoring samples.  
3. Present results as a dashboard with heatmaps per dimension, enabling stakeholders to spot systemic biases or retrieval failures.

By combining lightweight heuristics with targeted deep checks, we achieve scalable, interpretable evaluations of RAG’s faithfulness, relevance, and citation quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
