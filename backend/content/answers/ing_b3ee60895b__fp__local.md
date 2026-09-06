---
qid: ing_b3ee60895b__fp__local
question: What retrieval metrics would you track - recall@k, MRR, nDCG - and what
  does each actually tell you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 720
total_tokens: 905
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:42-05:00'
sources: []
---

**Why we need a metric in the first place**

A retrieval system is an *optimization* problem: we want to maximize the probability that a user’s intent will be satisfied by one of the top‑\(k\) items shown. The objective is inherently **rank‑sensitive**—the closer the relevant item, the higher the chance it will be clicked or read. Thus any metric must encode two things:

1. *Relevance*: whether an item truly satisfies the query.
2. *Rank awareness*: how the position of that relevance affects user satisfaction.

The classic trio of metrics each captures a different slice of this trade‑off.

---

### 1. Recall@k

\[
\text{Recall}@k = \frac{\#\text{relevant items in top } k}{\#\text{all relevant items}}
\]

- **What it tells**: *Coverage*—what fraction of the ground truth we actually surface in the first \(k\) slots.  
- **When to use**: When the cost of missing a relevant item is high (e.g., medical diagnosis, legal research).  
- **Non‑obvious insight**: Recall@k ignores rank within the top \(k\); if you push a highly relevant document down from 1st to 10th place, recall stays unchanged. Hence it can mask poor ordering.

### 2. MRR (Mean Reciprocal Rank)

\[
\text{MRR} = \frac{1}{N}\sum_{i=1}^{N}\frac{1}{\text{rank}_i}
\]

- **What it tells**: *First‑hit quality*—the expected reciprocal of the rank of the first relevant item.  
- **When to use**: For single‑answer or highly focused queries where users expect an immediate hit (e.g., Q&A bots).  
- **Non‑obvious insight**: MRR is extremely sensitive to a few top ranks; adding irrelevant items at position 2 can halve the score, even if many other relevant items follow.

### 3. nDCG (normalized Discounted Cumulative Gain)

\[
\text{nDCG}@k = \frac{\sum_{i=1}^{k}\frac{2^{rel_i}-1}{\log_2(i+1)}}{\text{IDCG}}
\]

- **What it tells**: *Utility‑weighted, rank‑discounted relevance*—it rewards highly relevant items higher up while still penalizing lower placements.  
- **When to use**: When relevance is graded (e.g., “very useful” vs. “somewhat useful”) and you care about overall user experience across the list.  
- **Non‑obvious insight**: The logarithmic discount reflects diminishing returns; after a certain depth, adding more relevant items barely improves nDCG because users rarely scan beyond the 10th result.

---

**Bottom line:** Recall@k is a blunt instrument for coverage, MRR is a knife‑sharp focus on the first hit, and nDCG balances graded relevance with rank decay. Choosing among them hinges on *what user behaviour you’re modeling*—coverage vs. immediate success vs. overall satisfaction—and remembering that each metric hides a different bias about rank importance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
