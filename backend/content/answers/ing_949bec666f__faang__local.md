---
qid: ing_949bec666f__faang__local
question: 'Explain: Customer Outcomes — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 548
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:29:44-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise description of how *Customer Outcomes* are defined and pursued within the “Jobs” team at **Glean** (the AI‑powered search & knowledge platform). I’ll assume you want: (1) what the term means, (2) why it matters to the product, and (3) how the team measures success.

---

**Approach**  
1. Define the concept in business terms.  
2. Map it onto Glean’s product flow (search → result → action).  
3. Identify key metrics & experiments that validate outcomes.  

---

**Depth**  

| Aspect | Detail |
|--------|--------|
| **Definition** | Customer Outcomes = *the tangible, measurable value a user derives when completing a “job” (e.g., finding a policy or onboarding docs) using Glean.* It’s outcome‑first rather than feature‑centric. |
| **Why it matters** | • Drives product roadmap: features that lift outcome scores get priority.<br>• Aligns engineering, design, and data science around a single KPI.<br>• Enables rapid A/B testing to iterate on friction points. |
| **Measurement** | • **Success Rate** – % of searches resulting in a completed job (click + action).<br>• **Time‑to‑Outcome** – median time from query to task completion.<br>• **User Satisfaction** – post‑search NPS or CSAT tied to the outcome. |
| **Experimentation** | • Deploy new ranking algorithms, measure uplift in Success Rate. <br>• Introduce “smart snippets” and test Time‑to‑Outcome reduction. |

---

**Edge Cases**  
- *Ambiguous queries*: users may never “complete” a job; fallback metrics like “query reformulation rate.”  
- *Multi‑step jobs*: outcome only counts after all steps—need to track partial completions.  
- *Data sparsity*: new domains lack enough labeled outcomes, requiring semi‑supervised signals.

---

**Optimize & Communicate**  

1. **Feature flag + cohort analysis** to isolate causal impact.  
2. Use **Bayesian bandits** for efficient multi‑arm testing of outcome variants.  
3. Present findings in a *“Outcome Dashboard”* with drill‑downs, ensuring stakeholders see the direct link between code changes and business value.

This structured framing keeps interviews focused on problem definition, data‑driven decisions, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
