---
qid: ing_c571017722__fp__local
question: 'Explain: Step 1: Clarify the problem — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 372
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:29-05:00'
sources: []
---

### Step 1: Clarify the Problem – “Ask Why Before You Solve”

When a candidate is handed a prompt (e.g., *“Design a URL shortener”*), the first thing they should do is **invert the problem**: ask what the interviewer really wants to know.  
Why? Because a system‑design interview tests *problem‑solving*, not rote recall. The interviewer's goal is to see how you decompose an open question, identify constraints, and balance trade‑offs—skills that map directly to real‑world ML pipelines (data ingestion → feature extraction → model serving).  

**Fundamental principle:**  
- **Optimization under constraints**: every design choice (caching strategy, sharding scheme, consistency level) is a decision variable; the interviewer wants to see your objective function and constraints articulated.  
- **Information flow**: by clarifying inputs/outputs, you expose the data dependencies that drive your architecture, just as feature importance surfaces in ML.

**Non‑obvious insight:**  
Even if the problem seems trivial, *explicitly stating edge cases* (e.g., “What happens when a user deletes a short URL?”) often reveals hidden requirements. Interviewers use these moments to gauge depth: a candidate who spotlights corner cases demonstrates an awareness that real systems rarely run in clean, ideal conditions.

> **Bottom line:**  
> Start by re‑framing the problem into clear *requirements*, *constraints*, and *success metrics*. That scaffold lets you build a mathematically grounded, scalable architecture—just as you would design a robust ML model pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
