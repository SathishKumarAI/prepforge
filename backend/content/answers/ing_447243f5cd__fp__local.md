---
qid: ing_447243f5cd__fp__local
question: 'Explain: A customer 10x''d their indexed documents and reports answer quality
  "got noticeably worse." Drive the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 625
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:31:25-05:00'
sources: []
---

**Why does scaling a document index often hurt answer quality?**

When you *ten‑fold* an indexed corpus, you change the **information density** that each query must sift through. A search engine’s ranking function is essentially a weighted similarity estimator:  
\(score(q,d)=\sum_{t \in q}\alpha_t\,\text{tf}_{t,d}\,\text{idf}_t\).  
The idf term, \(idf_t=\log\frac{N}{df_t+1}\), shrinks as the document count \(N\) rises unless the term’s document frequency \(df_t\) grows proportionally. Thus a word that was rare (high idf) becomes common, diluting its discriminative power. If your expansion adds many *generic* documents—news articles, blog posts, or repetitive templates—the idf of useful terms drops and the ranking algorithm starts favoring high‑frequency, low‑signal documents.

**Investigation steps**

1. **Corpus audit**  
   • Compute \(df_t\) before/after scaling.  
   • Identify terms whose idf fell below a threshold; flag them as “noise generators.”  
2. **Query‑by‑query profiling**  
   • For each query, compare top‑k hits pre/post expansion.  
   • Measure overlap (Jaccard), precision at k, and content relevance via a small human panel or automatic ROUGE/BLANC against gold answers.
3. **Model diagnostics**  
   • Plot score distributions; look for “score crowding” where many documents receive similar high scores.  
   • Check if the ranking model’s hyperparameters (e.g., BM25 \(k_1, b\)) were tuned on a smaller corpus and now mis‑scale.
4. **Feature importance analysis**  
   • Use SHAP or LIME to see which terms drive predictions; confirm that noisy terms dominate post‑expansion.
5. **Controlled ablation**  
   • Re‑index in batches: add 1×, 2×, … up to 10× of the new docs while monitoring quality metrics.  
   • Identify the point where degradation begins; this often reveals a “sweet spot” before saturation.

**Non‑obvious insight**

The *optimal* index size is not simply “more data = better.” Because ranking functions are implicitly normalized by corpus statistics, adding bulk without adjusting normalization can create a **self‑reinforcing bias**: the more documents you add, the lower idf becomes for all terms, making every document appear equally relevant. The remedy is to *renormalize*—either by re‑tuning idf (e.g., using a fixed reference corpus), employing a learning‑to‑rank model that learns term importance from the expanded set, or introducing a **topic‑aware filter** that keeps only documents semantically close to the query domain. This restores discriminative power and recovers answer quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
