---
qid: vq_826d69032d__think__local
question: What is selection bias, and what does it imply?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 417
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:57:34-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - *What* is “selection bias”?  It’s a statistical flaw that occurs when the sample you analyze isn’t representative of the target population because of how participants were chosen.  
   - *Assume* we’re talking about typical data‑collection scenarios (surveys, experiments, ML training sets).  

**2. Adopt a mental model**  
   - Think of a “sampling funnel”: from the full population → who is eligible → who chooses/responds → who ends up in the dataset.  Bias creeps in at any funnel stage.  
   - Use the “representativeness” criterion: a good sample should mirror key characteristics (age, income, etc.) of the whole group.

**3. Step‑by‑step reasoning**  
   1. Identify the target population.  
   2. Trace the selection path to your data.  
   3. Spot points where non‑random decisions happen (e.g., only online respondents).  
   4. Evaluate how those decisions skew key variables.  
   5. Conclude: if skewed, any inference (mean, correlation) may be systematically off—this is the implication of selection bias.

**4. Common traps to avoid**  
   - Confusing *selection bias* with *measurement error*.  
   - Assuming “missing data” always means bias; sometimes it’s random.  
   - Overlooking that even seemingly random sampling can introduce subtle biases (e.g., time‑of‑day effects).

**5. Sanity‑check & communicate clearly**  
   - Verify by comparing sample statistics to known population benchmarks.  
   - Explain simply: “Because we only included people who signed up online, our results over‑represent tech‑savvy users; conclusions about the whole market may be misleading.”  

This structured approach lets you diagnose, explain, and mitigate selection bias in any data context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
