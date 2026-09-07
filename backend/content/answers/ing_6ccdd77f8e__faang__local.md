---
qid: ing_6ccdd77f8e__faang__local
question: Tell me about a time a technical decision you championed turned out to be
  wrong. What happened, and what did you change afterward?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 399
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:32-05:00'
sources: []
---

**Clarify**  
The interviewer wants an anecdote where I made a tech‑choice that didn’t pan out, the fallout, and how I pivoted—so I’ll frame it around a production‑grade model deployment at a prior SaaS company.

**Approach**  
1. Set context (product, goal).  
2. Describe the decision & rationale.  
3. Explain the failure & metrics that surfaced.  
4. Detail corrective actions and lessons learned.

**Depth**  
At Company X we were rolling out an NLP recommendation engine. I championed using a single‑large transformer trained on all user data to reduce inference latency, assuming GPU memory would handle it. The model hit 10× the target latency on edge devices, and batch inference crashed during peak traffic, causing SLA violations.

After root‑cause analysis we discovered the monolithic model’s attention layers were over‑parameterized for short queries, leading to cache thrashing. I proposed a modular approach: split the transformer into a lightweight “query encoder” (distilled BERT) feeding a smaller “ranking head.” We re‑trained with knowledge distillation and introduced dynamic batching.

Post‑deployment latency dropped to 12 ms on mobile GPUs, and CPU usage fell by 35%. The incident taught me to validate architectural assumptions against real‑world constraints early, and to favor composable models that can be scaled or pruned without a full retrain.

**Edge Cases**  
We tested under peak concurrent users, varying query lengths, and cold‑start devices. All passed with the new pipeline.

**Optimize & Communicate**  
I documented the failure in our engineering playbook, added automated latency checks to CI/CD, and led a “model health” sprint for all teams. This reduced future rollout risks by 40% and earned me kudos from product and ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
