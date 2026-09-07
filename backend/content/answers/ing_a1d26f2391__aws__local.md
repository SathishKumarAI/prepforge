---
qid: ing_a1d26f2391__aws__local
question: 'Explain: Lessons from Building a First-Pass AI PRD Reviewer at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 371
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:59-05:00'
sources: []
---

**Situation / Task**  
At Uber I was tasked with building the first‑pass AI PRD reviewer to reduce manual code reviews by 30 % and surface architectural risks early. The goal was to create a model that could flag non‑compliant designs before they entered engineering.

**Action**  
I took **Ownership** and drove end‑to‑end data collection: we scraped the PRD repository, extracted feature tags, user stories, and design diagrams, and labeled 12 k examples via crowd‑source reviews. Using **Dive Deep**, I built a hybrid model—BERT for textual intent plus a graph neural net on diagram nodes—to capture both semantics and structural dependencies. We deployed it on AWS SageMaker, orchestrated with Step Functions, and served predictions through API Gateway. To keep costs low, we used spot instances for training (≈ $0.04/hr) and autoscaled inference endpoints based on CloudWatch metrics.

**Result**  
The model achieved 87 % precision and 82 % recall on a held‑out test set, cutting manual review time by **28 %**—saving ~200 engineer hours/month. We also saw a 15 % drop in post‑merge defects linked to design issues. The project earned the “Invent & Simplify” badge at my quarterly leadership review.

**Reflection**  
I learned that early stakeholder alignment (engineering leads, PMs) was critical; without it we had wasted effort on irrelevant features. Next time I’ll prototype with a minimal viable model first and iterate faster—showing **Bias for Action** while still maintaining quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
