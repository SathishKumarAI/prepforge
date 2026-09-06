---
qid: ing_0bc3831073__think__local
question: 'Explain: Algorithms — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 386
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:29:26-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
- Ask whether the audience knows what spaced‑repetition is (a learning technique) or if they need a definition first.  
- Assume the reader has basic ML background but not deep knowledge of educational psychology.

**2. Choose a mental model / framework**  
- Treat *spaced repetition* as an “optimization algorithm” for memory retention, analogous to training loops in ML.  
- Map its components (items, intervals, forgetting curves) onto ML concepts (examples, epochs, loss decay).

**3. Step‑by‑step reasoning toward the answer**  
1. Define spaced repetition and its origin (Ebbinghaus).  
2. Explain key algorithmic ideas: schedule, inter‑item spacing, adaptive timing.  
3. Show how an algorithm like SM-2 or Anki’s implementation uses recall scores to adjust next review time—paralleling gradient descent updating weights.  
4. Discuss evaluation metrics (retention rate, efficiency) and how they mirror ML performance measures.

**4. Common traps & wrong turns**  
- Mixing up “spacing effect” with “interleaving”; keep them distinct.  
- Over‑simplifying the algorithm to a single formula; emphasize its adaptive, data‑driven nature.  
- Assuming all spaced‑repetition systems are identical—highlight variations (Anki vs SuperMemo).

**5. Sanity‑check & verbalize**  
- Re‑state the core idea in plain terms: “It’s an algorithm that schedules reviews to keep knowledge just before it fades, much like training a model on data points at optimal intervals.”  
- Ask a quick mental question: “Does this explanation connect spaced repetition to ML concepts clearly?” If not, refine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
