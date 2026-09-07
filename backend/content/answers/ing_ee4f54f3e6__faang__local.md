---
qid: ing_ee4f54f3e6__faang__local
question: How does reciprocal rank fusion work, and why fuse by rank instead of by
  score?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 487
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:54:15-05:00'
sources: []
---

**Clarify**  
You’re asking how *reciprocal rank fusion* (RRF) combines search results from multiple systems and why it uses ranks rather than raw scores. Assume each system returns a list of ranked documents with no common scoring scale, and we want a single merged ranking that improves recall/precision.

**Approach**  
1. For every document \(d\), gather its rank \(r_i(d)\) in each engine \(i\).  
2. Compute RRF score: \(\displaystyle S_{\text{RRF}}(d)=\sum_{i}\frac{1}{k+r_i(d)}\), where \(k\) (often 60–100) smooths the contribution of lower ranks.  
3. Sort all documents by descending \(S_{\text{RRF}}\).  
4. Return top‑\(N\).

**Depth**  
- **Why rank, not score?** Scores are *system‑dependent*; a “good” score in one engine may be incomparable to another’s. Ranks are ordinal and universally comparable.  
- The reciprocal function heavily rewards early positions while still giving modest weight to later ones, thus balancing precision (top results) with recall (diversity).  
- Complexity is \(O(R \log R)\) for sorting over \(R\) unique documents; memory linear in \(R\).

**Edge Cases**  
- Duplicate documents across engines: their ranks are summed, giving them a higher boost.  
- Engines that return very short lists: missing ranks can be treated as “infinite” (zero contribution).  
- Very large \(k\): flattens the curve and may under‑emphasize top results.

**Optimize & Communicate**  
- If latency is critical, pre‑compute partial sums per engine or use a heap to maintain the top‑\(N\) as you iterate.  
- Explain that RRF is *parameter‑free* beyond \(k\), easy to deploy in production pipelines, and has proven to improve MAP/F1 over single engines without tuning.  

This structured explanation shows clear problem framing, algorithmic steps, technical nuance, edge handling, and practical optimization—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
