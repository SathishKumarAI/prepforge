---
qid: ing_0542bb261a__fp__local
question: 'Explain: Interval Merging and Processing — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 414
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:16:48-05:00'
sources: []
---

In a distributed service that logs events—say, “user X was online from t₁ to t₂”—the fundamental problem is *time‑to‑value* conversion: we want the total active time per user or per region without double‑counting overlaps.  
Mathematically, each record is an interval \([l_i,r_i)\). The desired aggregate is  

\[
A = \bigcup_{i=1}^{n} [l_i,r_i)
\]

and its length \(|A|\).  
If we naïvely sum all \((r_i-l_i)\), overlapping portions inflate the answer. Thus we must *merge* intervals into a minimal set of disjoint segments.  

**Why merge?**  
- **Linearity of measure:** Lebesgue measure (here, total time) is additive over disjoint sets; merging restores additivity.  
- **Complexity reduction:** After sorting endpoints once (\(O(n\log n)\)), we scan linearly to collapse overlaps, yielding \(O(n)\) memory and time per batch.  

**System‑design twist:** In a stream of millions of intervals, we cannot hold all in RAM. Instead, we partition by key (user id), buffer up to a threshold, sort locally, merge, then emit partial aggregates. The final total is the sum of these disjoint segments across partitions—exactly what a *MapReduce* job would do.

**Non‑obvious insight:**  
When intervals are sorted, *the right endpoint of the current merged block never decreases*. This monotonicity allows us to detect overlap with a single comparison per interval. It also means we can stream the input and emit merged segments on the fly—no need to materialize all endpoints—crucial for low‑latency services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
