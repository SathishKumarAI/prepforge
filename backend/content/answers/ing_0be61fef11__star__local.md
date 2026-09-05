---
qid: ing_0be61fef11__star__local
question: 'Explain: Advertising Cookies — AI Solution Architect Job Details | EY'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 322
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:29-05:00'
sources: []
---

**Situation**  
At EY’s Digital Transformation Lab I was assigned to a Fortune‑500 retail client struggling with fragmented first‑party data after their legacy cookie system was phased out by browsers.

**Task**  
Design an AI‑driven solution that could reconstruct user intent, deliver personalized ads, and comply with privacy regulations—all within the next six months for a $12 M marketing budget.

**Action**  
I led a cross‑functional team of data scientists and engineers. First, we implemented a deterministic ID‑matching layer using hashed email and loyalty IDs to create a unified customer profile. Next, we built a federated learning model that aggregated behavioral signals from edge devices without transmitting raw data, ensuring GDPR compliance. We integrated this with EY’s Cloud AI platform (AWS SageMaker + Athena) for real‑time inference, and wrapped the logic in an API gateway so the client’s ad tech stack could consume it on demand. Finally, I orchestrated a pilot test in three geographic segments, iterating on feature importance and bias mitigation.

**Result**  
The solution increased conversion rates by 18 % over baseline, reduced cost per acquisition by $0.45, and enabled the client to re‑activate a 30 % higher audience share than with third‑party cookies. I learned that marrying privacy‑first AI with pragmatic engineering can deliver measurable ROI while future‑proofing ad tech pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
