---
qid: vq_2ac5f833bf__think__local
question: when would you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 430
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:20:38-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Ask what “each” refers to: models, frameworks, or specific algorithms?  
- Assume we’re comparing common AI paradigms (rule‑based systems, supervised learning, unsupervised learning, reinforcement learning, transfer learning, etc.).  
- Note that context (data size, interpretability needs, latency constraints) will drive the choice.

**2️⃣ Adopt a decision framework**  
- Use a “problem‑feature” matrix:  
  - *Data availability* → supervised vs. unsupervised.  
  - *Goal type* → classification, regression, planning, generation.  
  - *Performance vs. explainability* trade‑off.  
  - *Real‑time constraints* → lightweight models or inference optimizations.

**3️⃣ Reason step‑by‑step**  
- Start with the problem objective: Is it a prediction task? A decision policy? An exploration of latent structure?  
- Map that to the feature matrix, filling in “yes/no” cells.  
- Identify any hard constraints (e.g., must be deterministic → rule‑based).  
- Iterate: if multiple methods satisfy constraints, compare secondary criteria like training time or data labeling cost.

**4️⃣ Beware common pitfalls**  
- Don’t default to deep learning just because it’s trendy; check data volume and interpretability needs.  
- Avoid over‑engineering a simple classification problem with complex reinforcement learning.  
- Remember that “transfer learning” is helpful only when source & target domains are related.

**5️⃣ Sanity‑check & articulate**  
- Verify each mapping against known best practices (e.g., supervised learning for labeled tabular data).  
- Summarize the decision in a concise rule: *If X → use Y; otherwise, consider Z*.  
- Communicate this logic clearly, so the listener can see how constraints drive the choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
