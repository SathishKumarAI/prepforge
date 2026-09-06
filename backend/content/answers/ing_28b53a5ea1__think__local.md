---
qid: ing_28b53a5ea1__think__local
question: 'Explain: Step 1: Outline use cases and constraints'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 455
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:22:36-05:00'
sources: []
---

**Metacognition for “Outline use cases and constraints” (ML project kickoff)**  

1. **Clarify the ask & scope**  
   - *What is meant by “use cases”?* Are we talking end‑user features, data pipelines, or business metrics?  
   - *Which constraints apply?* Budget, timeline, regulatory, ethical, technical stack, data availability, and stakeholder priorities.  
   - Note assumptions: e.g., assume the team has basic ML infrastructure and that the user stories are already drafted.

2. **Choose a mental model**  
   - Adopt a “Problem‑Solution‑Constraints” triangle: list problems → propose ML solutions → map constraints that may limit or shape those solutions.  
   - Alternatively, use a “Stakeholder–Goal–Constraint” matrix to keep each perspective visible.

3. **Step‑by‑step reasoning**  
   - **Collect inputs:** Interview stakeholders, review business KPIs, audit data sources.  
   - **Identify core use cases:** Map user journeys or decision points that can benefit from ML (e.g., recommendation, anomaly detection).  
   - **List constraints per case:** For each use case, write down relevant constraints (data latency, privacy laws, compute limits).  
   - **Prioritize:** Rank use cases by impact vs. feasibility, using the constraints as filters.

4. **Avoid common traps**  
   - Don’t conflate “use case” with a technical implementation detail.  
   - Beware of over‑optimism: ignore regulatory or data quality constraints until after you’ve listed them.  
   - Avoid siloed thinking—ensure cross‑functional input (legal, ops, product).

5. **Sanity‑check & communicate**  
   - Verify that every use case has at least one constraint and vice versa; missing links signal incomplete analysis.  
   - Present the output as a concise table or diagram so stakeholders can see which constraints are most binding.  
   - Iterate: ask for feedback, refine assumptions, and re‑rank if new information surfaces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
