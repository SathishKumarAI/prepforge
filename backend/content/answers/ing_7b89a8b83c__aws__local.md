---
qid: ing_7b89a8b83c__aws__local
question: 'Explain: Vague Instructions — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 433
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:04:48-05:00'
sources: []
---

**Situation / Task**  
At a previous fintech startup I led the launch of an automated fraud‑detection model that was requested “quickly” by product but with **no clear feature list or business rule definition**. The result was a 30 % drop in precision and a 45 % increase in false positives.

**Action**  
I applied *Customer Obsession* and *Dive Deep*. I scheduled a cross‑functional workshop to surface the real pain points, then used AWS Step Functions to map out a **feature‑driven workflow**: data ingestion → feature engineering (AWS Glue) → model training (SageMaker Pipelines) → evaluation → deployment.  
I introduced a lightweight “spec sheet” template that forced stakeholders to answer:
- What is the target precision/recall?  
- Which user segments are most critical?  
- How many predictions per day will we serve?

This clarified scope, reduced ambiguity, and allowed us to set realistic SLAs.

**Result**  
The refined model achieved **92 % precision** and **88 % recall**, a 70 % reduction in false positives, and cut cost by 25 % through automated scaling on SageMaker. Stakeholders now use the spec template for every new AI initiative, ensuring ownership and measurable impact.

---

### What a bar‑raiser hears  
- **Ownership**: I didn’t wait for product to clarify; I drove clarity myself.  
- **Dive Deep**: The workshop exposed hidden assumptions that would have cost us months.  
- **Quantified Impact**: 70 % precision lift, 25 % cost savings.  
- **Learning from Failure**: Early mis‑specs taught me the value of structured requirements; I built a reusable template to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
