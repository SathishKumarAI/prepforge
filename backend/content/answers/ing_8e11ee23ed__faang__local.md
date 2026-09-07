---
qid: ing_8e11ee23ed__faang__local
question: You need an eval set for a new contract-review capability. There is no labelled
  ground truth and the only people who can judge quality bill at partner rates. How
  do you build it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 467
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:14:31-05:00'
sources: []
---

**Clarify**  
You want an evaluation set for a contract‑review AI, but there’s no existing labeled data and the only experts are paid partners. The goal is to create a reliable benchmark that reflects real‑world quality while minimizing cost.

Assumptions to confirm:  
- How many contracts will be reviewed per partner per week?  
- What budget can we allocate for labeling each contract?  
- What dimensions of “quality” matter (accuracy, completeness, legal compliance)?

**Approach**  
1. **Sample Selection** – Randomly pick a representative subset of contracts across types, sizes, and jurisdictions.  
2. **Tiered Labeling** – Use a two‑stage process:  
   - *Stage A*: Crowd‑source coarse labeling (e.g., “needs review” vs. “no issue”) from internal staff at low cost.  
   - *Stage B*: Send only the high‑uncertainty cases to partners for detailed annotation.  
3. **Active Learning** – Continuously feed model uncertainty back into sampling so that partner effort focuses on the most informative examples.  
4. **Gold Standard Creation** – For each contract, have at least two partners independently annotate; resolve disagreements via a third senior reviewer or consensus voting.

**Depth**  
- Expect ~5–10 % of contracts to require partner review if we set a confidence threshold (e.g., model probability < 0.8).  
- With 200 contracts, that’s ~20 partner hours per iteration—manageable at partner rates.  
- Store annotations in a versioned dataset; track provenance and inter‑annotator agreement (Cohen’s κ).

**Edge Cases**  
- Rare contract clauses may never surface in the sample → add synthetic or historical examples.  
- Partner fatigue could bias ratings → rotate partners and monitor consistency.

**Optimize & Communicate**  
Iterate on the confidence threshold to balance cost vs. dataset quality; present this trade‑off with a Pareto curve. Document assumptions, sampling strategy, and labeling protocol so stakeholders understand how the eval set reflects real‑world usage. This structured pipeline delivers a high‑fidelity benchmark while keeping partner engagement efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
