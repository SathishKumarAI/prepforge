---
qid: vq_d1d8057442__think__local
question: What is query to fetch last day of previous month in oracle?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 497
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:25:59-05:00'
sources: []
---

**Metacognitive roadmap for answering “How do you write a query that returns the last day of the previous month in Oracle?”**

1. **Clarify the ask & set assumptions**  
   - The user wants an *SQL* expression, not PL/SQL code.  
   - Assume they’re using Oracle’s date functions (e.g., `TRUNC`, `ADD_MONTHS`).  
   - “Last day of previous month” means: if today is 2026‑09‑06 → return 2026‑08‑31.

2. **Mental model / framework**  
   - Think in two stages: *find the first day of the current month* → *step back one day*.  
   - Oracle’s `TRUNC(date, 'MM')` gives the first day of a month; `ADD_MONTHS(...,-1)` shifts months.

3. **Step‑by‑step reasoning**  
   1. `TRUNC(SYSDATE,'MM')` → first day of *current* month.  
   2. Subtract one day: `TRUNC(SYSDATE,'MM') - INTERVAL '1' DAY`.  
   3. That yields the last day of the *previous* month.  
   4. Optionally wrap in `SELECT … FROM dual` for a standalone query.

4. **Common traps to avoid**  
   - Don’t use `TRUNC(SYSDATE,'MM')-1` (works but less clear).  
   - Forget that Oracle’s date arithmetic with `INTERVAL '1' DAY` is clearer and future‑proof.  
   - Misinterpret “previous month” as “last month in data” rather than calendar logic.

5. **Sanity‑check & verbalize**  
   - Plug a known date (e.g., 2026‑01‑15) into the expression mentally: first day of Jan → 2026‑01‑01, minus one day → 2025‑12‑31. Works.  
   - Explain the logic aloud: “Take today’s month start and go back one day; that lands on the last day of the prior month.”  

Follow this flow in your answer to give a concise, correct Oracle query while demonstrating clear reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
