---
qid: ing_8fbd383ad2__faang__local
question: 'Explain: Tips For Communicating With Domain Experts'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 461
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:18:40-05:00'
sources: []
---

**Clarify**  
You’re asked how a data‑science or ML engineer should talk to domain experts (e.g., doctors, chemists). Clarify the goal: *to translate technical concepts into actionable insights that stakeholders can trust and act on*. Ask what constraints exist—time, jargon tolerance, decision urgency—and confirm the expert’s key metrics.

**Approach**  
1. **Prepare a shared vocabulary** – map ML terms to domain analogies (e.g., “feature importance” = “clinical risk factor”).  
2. **Start with business/clinical outcomes** – state what problem you’re solving before diving into models.  
3. **Iterative storytelling** – use visualizations, simple metrics, and incremental experiments.  
4. **Validate assumptions together** – jointly define ground truth, data quality, and success criteria.

**Depth**  
- *Use concrete examples*: “Our random‑forest model flags 92 % of malignant tumors; let’s compare that to the current biopsy rate.”  
- *Explain uncertainty*: present confidence intervals or probability distributions so experts can gauge risk.  
- *Show trade‑offs*: ROC curves, precision‑recall trade‑offs, and how they align with clinical thresholds.  
- *Leverage domain knowledge*: incorporate expert rules as post‑hoc checks (e.g., “if tumor size > 5 cm, flag regardless of model score”).  

**Edge Cases**  
- Experts skeptical of black‑box models → provide interpretable surrogate or SHAP explanations.  
- Data drift or labeling errors → discuss monitoring plans.  
- Misaligned incentives (profit vs patient safety) → surface and negotiate trade‑offs.

**Optimize & Communicate**  
Iterate the presentation based on feedback; keep slides lean, focus on one metric per slide, and end with a clear next step (pilot study, data collection). Narrate reasoning as: *“We chose this metric because it directly ties to clinical decision points, and our model achieves X% improvement over baseline.”* This signals structured thinking, empathy for stakeholders, and technical rigor—key FAANG interview strengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
