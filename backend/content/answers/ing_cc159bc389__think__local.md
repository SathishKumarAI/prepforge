---
qid: ing_cc159bc389__think__local
question: 'Explain: Requirements — Flightbookingsearchmakemytrip'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 456
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:24:50-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify *what* “requirements” means: functional vs non‑functional, user stories, system constraints.  
- Assume we’re building a new feature (flight‑search) for an existing MakeMyTrip platform, not a brand‑new app.  

**2️⃣ Adopt a requirements‑engineering framework**  
- Use the classic *user‑story + acceptance criteria* approach (Agile).  
- Map to higher‑level *business goals*: improve booking conversion, reduce search latency, support mobile/desktop.  

**3️⃣ Step‑by‑step reasoning**  
1. **Stakeholder interview** → gather pain points (e.g., “search takes too long”, “filters are confusing”).  
2. **Define core user flows**: Search ➜ Filter ➜ Compare ➜ Book.  
3. **List functional requirements** per flow: keyword search, date range, cabin class, multi‑city support, real‑time availability, price comparison, promo code entry.  
4. **Add non‑functional needs**: 95 % uptime, <2 s response for 90 % of queries, GDPR compliance, accessibility (WCAG 2.1).  
5. **Prioritize** using MoSCoW or RICE scoring.  

**4️⃣ Common traps to avoid**  
- *Over‑engineering*: adding every possible filter before user validation.  
- *Missing constraints*: ignoring existing API limits or database schema.  
- *Vague acceptance criteria*: “search should be fast” without a measurable SLA.  

**5️⃣ Sanity‑check & verbalise**  
- Run a quick sanity test: pick a user story, ask if all acceptance criteria are concrete and testable.  
- Communicate the requirements back to stakeholders in plain language, e.g., “When a user selects ‘2 days’ duration, results should update within 1.5 s.”  

Repeat this cycle until the backlog is clear, measurable, and aligned with business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
