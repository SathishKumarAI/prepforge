---
qid: ing_b3ee60895b__think__local
question: What retrieval metrics would you track - recall@k, MRR, nDCG - and what
  does each actually tell you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 456
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:52:21-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   *What do we want to measure?* We’re evaluating a retrieval system (e.g., search or recommendation). Assume relevance judgments exist for top‑k results per query and that queries are independent.  

**2️⃣ Mental model: ranking metrics vs. set metrics**  
   *Ranking metrics* care about order (nDCG, MRR), while *set metrics* ignore order (Recall@k). Think of a staircase: recall tells how many stairs you hit; nDCG shows how high you climb on each step; MRR captures the first stair you reach.  

**3️⃣ Step‑by‑step reasoning**  
   - **Recall@k** = (# relevant docs retrieved in top k) / (total relevant docs). It answers “Did we fetch enough useful items?”  
   - **MRR** = 1 / rank of first relevant doc; it tells “How quickly do users hit their first hit?”  
   - **nDCG@k** = Σ (rel_i / log₂(i+1)) / Σ (ideal rel_i / log₂(i+1)). It measures overall ranking quality, rewarding high relevance early and penalizing late placement.  

**4️⃣ Common traps to avoid**  
   *Don’t mix up precision with recall.* Recall ignores non‑relevant docs; precision would be 1 – false positives.  
   *Assume nDCG needs a perfect ideal ranking*—in practice use the best possible order of known relevances.  
   *Ignore query weighting* if some queries are more important than others.  

**5️⃣ Sanity check & verbalize**  
   • Verify each metric’s numerator/denominator.  
   • Translate results: “Recall@10 = 0.4” → 40 % of all relevant items appear in the first ten hits.  
   • Explain trade‑offs: high recall may hurt nDCG if low‑quality items are added, and vice versa.  

This framework lets you pick the right metric for the business question at hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
