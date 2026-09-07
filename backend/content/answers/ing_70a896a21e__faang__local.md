---
qid: ing_70a896a21e__faang__local
question: 'Explain: Recency-Weighted Ranking — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 460
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:05:37-05:00'
sources: []
---

**Recency‑Weighted Ranking – Knowledge Management**

---

### Clarify  
We need a ranking algorithm that surfaces the most *recent* documents while still respecting relevance. Assume we have an indexed set of articles, each with a timestamp and a relevance score (e.g., TF‑IDF or BM25). The goal: return top‑k items where freshness is prioritized.

---

### Approach  
1. **Feature Engineering** – compute a *recency factor* per document (`rf = exp(-λ · age)`), where `age` is days since publication and λ controls decay.  
2. **Score Fusion** – combine with relevance: `final_score = α·relevance + (1‑α)·rf`.  
3. **Indexing** – store both raw relevance and timestamp in the inverted index; compute `rf` on‑the‑fly during query time.  
4. **Caching** – pre‑compute `rf` for a sliding window to avoid per‑query exponentials.

---

### Depth  
- λ is tuned empirically (e.g., 0.1/day → half‑life ≈ 7 days).  
- α balances freshness vs relevance; set via A/B testing on click‑through rates.  
- Complexity: O(N) for precomputation, O(log N) per query using a priority queue to maintain top‑k.

---

### Edge Cases  
- **Stale but highly relevant** items may be suppressed—test with niche queries.  
- **Timestamp drift** (clock skew) can mislead; normalize against UTC.  
- **Zero age** → rf = 1, preventing division by zero in any log transforms.

---

### Optimize & Communicate  
We can replace the exponential with a linear decay for CPU‑constrained environments or use a *time‑bucket* approach to cache scores per day. I’d explain this trade‑off by showing latency savings (≈ 30 ms) vs minor ranking drift (< 2 % CTR impact). This demonstrates clear problem framing, actionable design, and empirical validation—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
