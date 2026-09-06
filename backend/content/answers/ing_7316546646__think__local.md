---
qid: ing_7316546646__think__local
question: 'Explain: Availability in numbers — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 605
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:38:14-05:00'
sources: []
---

### 1️⃣ Clarify & Assumptions  
- **Audience**: Developers familiar with basic system design but new to quantitative reliability metrics.  
- **Goal**: Translate the *“availability”* concept into concrete numbers (e.g., uptime percentages, MTBF).  
- **Scope**: Use examples from the `system-design-primer` repo—especially the “Availability in Numbers” section—to illustrate how to compute and interpret these figures.

### 2️⃣ Mental Model / Framework  
1. **Define Availability**: \(A = \frac{\text{MTTR} + \text{MTBF}}{\text{MTTR} + \text{MTBF}}\) → simplifies to uptime fraction.  
2. **Break it into components**: *Mean Time Between Failures (MTBF)* and *Mean Time To Repair (MTTR)*.  
3. **Translate to percentages**: \(A_{\%}= A \times 100\).  
4. **Map to SLAs**: “five nines” ≈ 99.999 % uptime → ~5 min downtime per year.

### 3️⃣ Step‑by‑Step Reasoning  
1. **Gather data**: From logs or monitoring, count total failures over a period (e.g., 1000 incidents/year).  
2. **Compute MTBF**: \( \text{MTBF} = \frac{\text{Total Runtime}}{\#\text{Failures}}\).  
3. **Measure MTTR**: Average time to restore service per incident.  
4. **Calculate Availability**: Plug MTBF and MTTR into the formula.  
5. **Interpret**: Compare against desired SLA (e.g., 99.9 % vs 99.99 %).  

### 4️⃣ Common Traps to Avoid  
- **Mixing units**: Hours vs days vs minutes—ensure consistency before calculations.  
- **Ignoring partial failures**: Treat any service degradation as a failure if it impacts SLAs.  
- **Over‑optimistic MTTR estimates**: Use real repair logs, not idealized figures.  

### 5️⃣ Sanity‑Check & Communicate  
1. **Cross‑validate**: Verify that the computed uptime matches observed downtime from monitoring dashboards.  
2. **Explain in plain terms**: “If our system has a 99.9 % availability, customers can expect roughly 8 hours of downtime per year.”  
3. **Show trade‑offs**: Highlight how adding redundancy or automated failover reduces MTTR and boosts availability.

By following this structured approach—clarify the goal, apply the availability formula, compute from real data, watch for pitfalls, and validate—you can confidently explain *availability in numbers* to interviewers or stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
