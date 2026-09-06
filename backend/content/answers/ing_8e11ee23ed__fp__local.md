---
qid: ing_8e11ee23ed__fp__local
question: You need an eval set for a new contract-review capability. There is no labelled
  ground truth and the only people who can judge quality bill at partner rates. How
  do you build it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 580
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:07:13-05:00'
sources: []
---

### Building an Eval Set for Contract‑Review AI from Scratch

**The core problem:**  
We must measure how well the model picks up subtle clauses, missing obligations, or legal inconsistencies—yet we have no ground truth and only a few paid experts.

1. **Start with *synthetic scaffolding*.**  
   - Pull a large corpus of public contracts (e.g., open‑source agreements, court filings).  
   - Use rule‑based NLP (regex + dependency patterns) to annotate high‑confidence “gold” snippets—e.g., confidentiality clauses, indemnity language.  
   - Treat these as *anchor points*; they are not perfect but give the model a baseline.

2. **Leverage *model uncertainty* as a proxy for difficulty.**  
   - Run the current best model on all contracts.  
   - Flag sentences with high entropy or low confidence scores—these are the most informative examples.  
   - This turns the evaluation into an *active‑learning loop*: we ask experts only where the model is unsure.

3. **Apply a *cost‑aware multi‑armed bandit* strategy.**  
   - Each expert (partner) is an arm with unknown payoff (accuracy of their labels).  
   - The algorithm allocates budget to arms that maximize expected information gain per dollar, gradually learning which experts produce the most reliable judgments.

4. **Iterative refinement via *human‑in‑the‑loop* consensus.**  
   - Present each flagged sentence to 2–3 partners at staggered rates (e.g., $X for a single clause, $Y for full contract).  
   - Use majority vote; if disagreement exceeds a threshold, flag it for deeper review or discard it from the eval set.

5. **Validate against *external signals*.**  
   - Correlate model predictions with downstream metrics: number of legal disputes avoided, time saved in manual review, or client satisfaction scores.

---

#### Non‑obvious insight

Treating the evaluation process as a **budgeted bandit problem** rather than just an annotation task forces the system to *actively learn* which experts and which examples are most valuable. This dramatically reduces cost while still yielding a high‑quality, representative eval set—something that naïve random sampling or single‑expert labeling would miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
