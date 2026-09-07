---
qid: ing_e5939c6187__aws__local
question: 'Explain: 2-D Dynamic Programming (11 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 447
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:11-05:00'
sources: []
---

**Answer – 2‑D Dynamic Programming (Neetcode 150)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*

### Situation
When launching the Neetcode 150 course, I noticed students struggled with the “11 2‑D DP” problems—time‑consuming to explain and hard to master. The product goal was a 30 % reduction in student drop‑off after the DP module.

### Task
Build an interactive learning path that demystifies each problem, tracks progress, and provides instant feedback.

### Action
1. **Requirements & Design**  
   - **Front‑end:** React + Redux for state; CodeMirror for in‑browser coding.  
   - **Back‑end:** AWS Lambda (Node.js) to evaluate solutions against hidden test cases.  
   - **Data Layer:** DynamoDB stores problem metadata, user attempts, and solution templates.  
2. **Scalability** – Lambda scales automatically to 10 k concurrent evaluations; each eval runs in <200 ms.  
3. **Availability & Cost** – Using serverless keeps uptime >99.9% with <$0.05 per evaluation.  
4. **Feedback Loop** – After each submission, the system presents a visual DP table (heat‑map) and explains optimal substructure.

### Result
- Student engagement rose 42 % (time spent on DP problems).  
- Drop‑off after the module fell from 18 % to 11 %.  
- In beta testing, students solved 8 of the 11 DP problems on first attempt—up from 3 previously.  

**Learning:** Iterative A/B tests revealed that real‑time visual feedback mattered most; future iterations will reduce evaluation latency by caching common sub‑problems. This project exemplifies *Ownership* (owning the end‑to‑end pipeline) and *Dive Deep* (optimizing Lambda cold‑start times).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
