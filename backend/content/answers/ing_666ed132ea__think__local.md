---
qid: ing_666ed132ea__think__local
question: Define pass@k. Why is the naive way of computing it problematic, and what's
  the fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 453
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:49:38-05:00'
sources: []
---

**1️⃣ Clarify & state assumptions**  
- *Pass@k* refers to the probability that a model’s correct answer appears in its top‑k ranked predictions (often k = 10).  
- Assume we have a set of queries, each with one true label and a list of model outputs sorted by confidence.  
- We’re interested in an empirical estimate over this test set.

**2️⃣ Mental model / framework**  
Treat Pass@k as a *binary success indicator* per query: 1 if the ground truth is within the top‑k, else 0. The overall metric is simply the mean of these indicators across queries.

**3️⃣ Step‑by‑step reasoning**  
- For each query, check if the true label appears in positions 1…k.  
- Count successes (`S`) and failures (`F`).  
- Compute Pass@k = S / (S + F).  
The naive implementation often scans all outputs for every query, which is O(N·M) where N is queries and M outputs per query.

**4️⃣ Common traps & fixes**  
| Trap | Why it hurts | Fix |
|------|--------------|-----|
| **Scanning entire list each time** | Extra work when k ≪ M; slows evaluation on large vocabularies. | Stop once the true label is found or after k items (break). |
| **Off‑by‑one errors** | Counting positions 0…k‑1 vs 1…k incorrectly. | Explicitly use `range(k)` or list slicing `[ :k ]`. |
| **Mixed data types** | Comparing strings to integers can silently fail. | Normalize labels before comparison. |

**5️⃣ Sanity‑check & communication**  
- Verify on a toy set where you know the correct Pass@k (e.g., 3/5 = 0.6).  
- Explain: “We simply see whether the true answer is in the top k predictions; counting successes and dividing by total queries gives the metric.”  
This concise, stepwise description can be reused for any ranking‑based evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
