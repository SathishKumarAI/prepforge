---
qid: ing_3ab8f4417f__faang__local
question: How do you evaluate whether a pipeline change - parser, chunker, embedding
  model - made retrieval better or worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 374
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:55-05:00'
sources: []
---

**Clarify**  
We need to quantify the impact of a pipeline tweak (parser → chunker → embedding) on downstream retrieval quality. Key assumptions:  
1. Ground‑truth relevance judgments exist for a test set.  
2. Retrieval metric(s) are defined (e.g., MAP, NDCG@10).  
3. The system can be run in A/B or offline mode.

**Approach**  
1. **Baseline & Variant** – Run the original pipeline and the modified one on the same query–document set.  
2. **Metric Calculation** – Compute retrieval scores for each.  
3. **Statistical Test** – Use paired tests (e.g., Wilcoxon signed‑rank or bootstrap confidence intervals) to assess significance.  
4. **Error Analysis** – Inspect top‑k hits that changed to understand qualitative shifts.

**Depth**  
- *MAP* = average precision over queries; *NDCG@10* rewards higher ranks.  
- Complexity: O(Q·D) retrieval per run; negligible overhead for metric calculation.  
- Trade‑offs: A larger chunk size may increase recall but dilute embeddings, affecting precision.

**Edge Cases**  
- Queries with no relevant docs → treat as zero relevance.  
- Skewed query distribution → weight metrics or stratify samples.  
- Embedding dimensionality changes → ensure similarity measure remains valid (e.g., cosine).

**Optimize & Communicate**  
If the variant shows statistically significant improvement, roll it out; if not, revert and iterate on a different component. I’d document results in a shared dashboard and present a concise slide deck highlighting metric shifts, confidence intervals, and qualitative insights to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
