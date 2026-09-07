---
qid: ing_b3ee60895b__faang__local
question: What retrieval metrics would you track - recall@k, MRR, nDCG - and what
  does each actually tell you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 576
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:20-05:00'
sources: []
---

**Clarify**  
You’re asking which *retrieval* metrics are useful for an AI‑driven search or recommendation system and what each metric actually reveals about model performance. I’ll assume we have a ranked list of results per query, and we care both about relevance (recall) and ranking quality.

**Approach**  
1. List the three metrics: Recall@k, Mean Reciprocal Rank (MRR), nDCG.  
2. For each, define it mathematically, explain intuition, and state typical use‑cases.  
3. Highlight what a high/low score means in practice.

**Depth**

| Metric | Formula (simplified) | What it tells you |
|--------|----------------------|-------------------|
| **Recall@k** | `|Relevant ∩ Top k| / |Relevant|` | Fraction of *all* relevant items that appear within the first *k* results. Good for measuring coverage: if Recall@10 is 0.3, only 30 % of true positives show up early. |
| **MRR** | `1 / rank_of_first_relevant` (averaged over queries) | Captures how quickly a user finds *the first* relevant item. A higher MRR means the top‑ranked results are more likely to be correct, which is critical when users stop after the first hit. |
| **nDCG@k** | `∑_{i=1}^k (2^{rel_i}-1)/log₂(i+1)` normalized by ideal DCG | Balances *relevance* and *position*: highly relevant items at rank 1 weigh more than the same item at rank 10. Useful when multiple relevant results matter, e.g., product recommendations or search engines. |

**Edge Cases**  
- If no relevant items exist for a query, Recall@k is undefined; we usually skip such queries.  
- MRR penalizes missing any relevant result entirely—useful only when a single hit suffices.  
- nDCG requires graded relevance labels; binary labels reduce it to DCG.

**Optimize & Communicate**  
- Combine metrics: high Recall@10 + high MRR → good coverage and quick hits.  
- For long‑tail queries, emphasize nDCG to reward diverse relevant results.  
- Explain trade‑offs: optimizing for Recall may hurt rank quality; vice versa for MRR.  

By tracking all three, we gain a holistic view—coverage, speed of first hit, and overall ranking fidelity—aligning with what FAANG interviewers expect in a structured, communicative answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
