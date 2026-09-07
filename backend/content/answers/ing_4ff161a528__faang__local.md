---
qid: ing_4ff161a528__faang__local
question: Explain pass@k vs pass^k. Why does the distinction matter for production
  agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 494
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:50:11-05:00'
sources: []
---

**Clarify**  
*Problem:* In evaluation of ranked retrieval systems (e.g., recommendation or search), we often see two metrics: **pass@k** and **pass^k**.  
*Assumptions to confirm:*  
- “Pass” means the target item appears in a list of *k* candidates.  
- The system returns a single ranked list per query.  

**Approach**  
Explain each metric, then illustrate their impact on production agents that must decide when to stop or re‑rank.

**Depth**  
| Metric | Definition | Typical use |
|--------|------------|-------------|
| **pass@k** | Probability that the correct item is in the top *k* of a single list. Computed as `#queries where target ∈ top k / total queries`. | Offline evaluation; quick estimate of hit‑rate at a fixed cutoff. |
| **pass^k** (sometimes called “pass‑through” or “success@k”) | Probability that the correct item appears *anywhere* in *k* independent ranked lists (e.g., multiple query reformulations). Computed as `1 - Π_i (1 - pass@k_i)`. | Online deployment where we allow multiple attempts; measures cumulative success. |

The distinction matters because a production agent often has **budget constraints** (time, API calls, user patience).  
- *pass@k* tells you the chance of success in one shot.  
- *pass^k* tells you the chance after several shots—useful when the system can retry or aggregate multiple signals.

If you optimize only for pass@k, you might over‑fit to a single high‑confidence ranking and ignore robustness across retries. Conversely, focusing on pass^k encourages diversification and fault tolerance.

**Edge cases**  
- *k > list length* → both metrics collapse to 1 if the target exists.  
- *Multiple correct items* → definitions need adjustment (e.g., any hit counts).  

**Optimize & communicate**  
In production, report both metrics: use pass@k for initial tuning and pass^k to evaluate real‑world success under retry policies. Explain that higher pass^k often requires slightly lower precision per list but gains overall reliability—critical for user satisfaction in search/recommendation pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
