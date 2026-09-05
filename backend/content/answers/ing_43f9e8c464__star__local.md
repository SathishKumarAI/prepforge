---
qid: ing_43f9e8c464__star__local
question: 'Explain: Flock CEO calls for ‘compromise’ as surveillance company faces
  growing backlash'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 351
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:02-05:00'
sources: []
---

**Situation** – In early 2024 I was the lead engineer on a predictive policing platform for a major city. A month after launch an investigative report revealed that our data feeds were disproportionately flagging minority neighborhoods, sparking protests and calls from civil‑rights groups to halt the system.

**Task** – My manager asked me to design a technical compromise: keep the tool useful for law enforcement but drastically reduce bias and make it transparent enough to satisfy public scrutiny, all before the next budget review in two weeks.

**Action** – I first ran an audit of our feature weights using SHAP values; we identified that location‑based features were over‑emphasized. I engineered a new regularization term that penalised high variance across census tracts and added a real‑time bias‑reporting dashboard for city officials. I also coordinated with the data science team to replace proprietary surveillance feeds with anonymised, aggregated open‑source datasets, cutting potential privacy violations.

**Result** – The updated model lowered false‑positive rates in minority districts by 38 % while maintaining overall accuracy at 92 %. City officials approved a revised contract, and our transparency dashboard was adopted citywide. I learned that rapid, data‑driven compromises can turn backlash into partnership when stakeholders see tangible evidence of fairness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
