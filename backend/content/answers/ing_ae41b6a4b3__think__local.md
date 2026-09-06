---
qid: ing_ae41b6a4b3__think__local
question: 'Explain: F8: Cost-tracking failure across teacher and student'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 507
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:28:37-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What is “F8”*? Assume it’s a feature or bug label in an AI‑driven education platform.  
   - *Who are the stakeholders?* Teachers and students, each with distinct cost‑tracking needs (e.g., resource usage vs. learning time).  
   - *Define “cost”*: compute resources, time, and possibly financial expenditures tied to content consumption.

**2️⃣ Adopt a problem‑analysis framework**  
   - Use **Root Cause → Symptom → Impact → Mitigation**.  
   - Map the data flow: user actions → AI inference engine → cost ledger → UI dashboards.  
   - Identify role‑specific metrics (teacher vs. student) and how they differ.

**3️⃣ Step‑by‑step reasoning**  
   1. **Identify missing telemetry** – e.g., session duration or content chunk size isn’t logged for students.  
   2. **Trace data propagation** – logs reach the ledger but are filtered out by a role‑based policy that drops student entries.  
   3. **Check aggregation logic** – teacher totals aggregate correctly, but student aggregates use a different schema causing nulls.  
   4. **Validate permissions** – audit API calls; students lack read access to cost tables due to misconfigured IAM roles.  
   5. **Propose fixes** – unify schema, adjust role policies, add explicit logging for both roles.

**4️⃣ Avoid common pitfalls**  
   - Don’t assume the UI is faulty when the backend works; check end‑to‑end data flow.  
   - Beware of “double counting” if both teacher and student metrics feed into a shared counter.  
   - Remember that caching layers can mask real‑time updates, leading to stale cost views.

**5️⃣ Sanity‑check & communicate clearly**  
   - Re‑run a test case: simulate a student session → verify ledger entry → confirm dashboard display.  
   - Summarize the root cause succinctly: *“Role‑based filtering in the cost aggregation layer drops student entries, causing teachers to see accurate totals while students see zero or incomplete costs.”*  
   - Present remediation steps as an action plan with priority tags (P1: fix IAM; P2: unify schema).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
