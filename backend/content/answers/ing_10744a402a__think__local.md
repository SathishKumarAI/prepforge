---
qid: ing_10744a402a__think__local
question: You have 10 hours of demonstrations for a new task and budget for 50 more.
  How do you decide what to collect, and what return do you expect?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 559
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:46:57-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What is “return” here?* Assume we mean model performance (e.g., accuracy or F1) or downstream utility.  
- *What does “budget for 50 more” mean?* 50 hours of additional data collection, not just annotation time.  
- *Task specifics?* We’ll treat it generically: a supervised learning task with labeled demos.

**2️⃣ Mental model / framework**  
Use an **active‑learning + cost–benefit** lens:  
- *Value per hour*: incremental performance gain divided by the hour spent.  
- *Diminishing returns*: early data often yields big jumps; later data gives smaller gains.  
- *Data diversity vs depth*: decide whether to expand coverage (new scenarios) or deepen existing ones.

**3️⃣ Step‑by‑step reasoning**  

1. **Profile the 10 h set**: compute current performance, identify high‑error regions.  
2. **Estimate learning curve**: fit a simple curve (e.g., power law) to performance vs data size using the 10 h point and any prior tasks.  
3. **Project returns for incremental batches**: simulate adding 5–10 h at a time, predicting performance gains.  
4. **Rank candidate batches by value per hour**: e.g., “collect more examples of class X” vs “add edge‑case scenarios.”  
5. **Allocate the 50 h budget accordingly**, ensuring coverage balance and avoiding overfitting to a single niche.

**4️⃣ Common traps to avoid**  

- *Assuming linear gains*: performance often plateaus after a point.  
- *Ignoring label noise*: more data doesn’t help if labels are wrong.  
- *Over‑optimizing for metrics*: may neglect real‑world utility or fairness.  
- *Not accounting for diminishing returns of active learning*: the “most uncertain” samples may already be covered.

**5️⃣ Sanity‑check & communicate**  

- **Cross‑validate**: split the 10 h into folds to estimate variance in performance gains.  
- **Benchmark against a baseline**: e.g., random sampling of 50 h, compare projected vs actual improvement.  
- **Explain rationale**: “We’ll first target underrepresented classes because they currently dominate error; once their recall improves, we’ll focus on edge cases to polish precision.”  

This structured approach lets you decide *what* to collect (diversity vs depth) and *how much* return you can reasonably expect from the 50‑hour budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
