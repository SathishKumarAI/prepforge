---
qid: ing_c388dc5a01__aws__local
question: 'Explain: Functional Requirements (What Are We Building?)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 441
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:17-05:00'
sources: []
---

**Situation & Task**  
In a previous role I led the launch of an AI‑driven recommendation engine for a retail platform that handled ~5 M daily active users. The product manager asked me to define the *functional requirements*—essentially, “what are we building?”—before any data science work began.

**Action (Dive Deep + Customer Obsession)**  
1. **Stakeholder Interviews** – I mapped user journeys across web and mobile, uncovering pain points: slow search, irrelevant product suggestions, and a 12 % cart‑abandon rate on high‑margin items.  
2. **Metric Baseline** – Established KPIs: click‑through rate (CTR), conversion lift, and mean session duration. Current CTR for recommendations was 1.3 %.  
3. **Feature List & Prioritization** – Created a backlog of functional requirements:
   - *Real‑time personalization* using user intent signals (search terms, cart history).  
   - *Multi‑modal ranking* (price, reviews, freshness) with configurable weights per segment.  
   - *Explainability dashboard* for compliance and trust.  
   - *A/B test framework* to measure lift in CTR & conversion.

**Result (Deliver Results)**  
The scoped requirements guided a data science team that built an end‑to‑end pipeline on **AWS SageMaker**, **Kinesis**, and **Lambda**. After 6 weeks, the engine achieved a 3.7 % CTR (+185%) and increased conversion by 9 %, driving $1.2 M incremental revenue in month 1.

**Learning & Bar‑Raiser Signals**  
- I owned the entire requirement cycle, ensuring no stakeholder was left out (Ownership).  
- By diving into logs and user data, I surfaced hidden pain points that shaped our functional spec (Dive Deep).  
- The quantified lift demonstrated clear business impact, satisfying a bar‑raiser’s need for measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
