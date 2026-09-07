---
qid: ing_2bde4ec9db__faang__local
question: Which retrieval metrics would you use - recall@k, MRR, nDCG - and when does
  each matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 624
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:58-05:00'
sources: []
---

**Clarify**

You’re asked which retrieval‑ranking metrics to employ—Recall@K, Mean Reciprocal Rank (MRR), or Normalized Discounted Cumulative Gain (nDCG)—and *when* each is appropriate.  
Assumptions: we have a ranked list of results for a query; relevance can be binary or graded; the goal could be search, recommendation, or question‑answering.

---

**Approach**

1. Identify the business objective (find any relevant item vs. top‑rank quality).  
2. Map that to a metric’s sensitivity: Recall@K cares about coverage in the first K positions; MRR focuses on the rank of *the first* relevant item; nDCG rewards graded relevance with position discounting.

---

**Depth**

| Metric | Formula (binary) | What it measures | Typical use case |
|--------|------------------|-----------------|-----------------|
| **Recall@K** | \( \frac{\#\text{relevant in top }K}{\#\text{relevant overall}} \) | Coverage of relevant items within first K. | Search engines, recommendation where users scan a short list. |
| **MRR** | \( \frac{1}{N}\sum_{i=1}^{N} \frac{1}{\text{rank}_i} \) | Rank of *first* relevant item. | QA systems, FAQ retrieval where the first hit matters most. |
| **nDCG@K** | \( \frac{\sum_{i=1}^{K}\frac{2^{rel_i}-1}{\log_2(i+1)}}{\text{IDCG}} \) | Graded relevance weighted by position. | Ranking products, news feeds where multiple items have varying importance. |

Complexities: all are O(K) per query; nDCG needs pre‑computed IDCG but negligible overhead.

---

**Edge Cases**

- No relevant items → Recall undefined, MRR = 0, nDCG = 0.  
- Extremely long relevance lists → recall may inflate if K is large; nDCG saturates.  
- Binary vs. graded labels: MRR collapses to rank of first hit; nDCG becomes more expressive.

---

**Optimize & Communicate**

Explain trade‑offs: Recall@K gives a quick “did we surface any?” signal, but ignores ranking quality. MRR is simple yet blind to subsequent hits—useful when the user stops at the first result. nDCG balances depth and quality, ideal for recommendation where users scroll but still care about top positions.

Conclude by recommending: start with Recall@K for coverage checks; add MRR if early stop behavior dominates; switch to nDCG when graded relevance and long‑tail engagement matter. This layered approach aligns with FAANG’s emphasis on clear reasoning and metric‑driven decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
