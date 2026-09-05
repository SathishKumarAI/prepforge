---
qid: ing_4e290d4ce4__star__local
question: 'Explain: Introducing Auto-Triage — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 373
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:55-05:00'
sources: []
---

**Situation:**  
At my last company we had a growing issue‑tracking backlog—about 1,200 tickets per month—with 30 % of them never reaching a developer because they were duplicated or low priority. The support team was drowning in noise and our MTTR (mean time to resolve) had slipped from 12 hrs to over 48 hrs.

**Task:**  
I was tasked with designing an “Auto‑Triage” system that could automatically classify incoming tickets by severity, intent, and duplicate status, so the right engineers could see only actionable items within their domain.

**Action:**  
I built a lightweight NLP pipeline using spaCy for entity extraction and BERT embeddings fine‑tuned on our past ticket corpus. Combined with a rule‑based duplicate checker (Levenshtein distance + semantic similarity), I trained a random forest classifier to predict priority levels. The model was deployed as an Azure Function that intercepted every new ticket, tagged it, and pushed the triaged result into our Jira board via REST API. I also created a dashboard in Power BI for visibility.

**Result:**  
Within three months we cut duplicate tickets by 85 % and improved MTTR from 48 hrs to 18 hrs—a 62 % reduction. The engineering team reported a 25 % increase in productive time, and the solution later scaled to handle 3,500 tickets/month with minimal retraining. I learned how to blend ML with rule‑based logic for real‑world reliability and the importance of continuous monitoring to keep model drift under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
