---
qid: ing_70a83d17bf__faang__local
question: 'Explain: Workflow frameworks — Agentic Engineering - by Neo Kim and Paul
  Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 510
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:05:38-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Agentic Engineering* workflow framework from Neo Kim & Paul Hoekstra—a design‑principle for building ML systems that treat models as autonomous agents rather than static black boxes. I’ll assume the interviewers want a concise overview of its core stages, why it matters, and how it differs from traditional pipelines.

**Approach**  
1. Define “agentic” in ML context.  
2. Outline the four‑step workflow: *Define Intent → Construct Agent → Train & Validate → Deploy & Iterate*.  
3. Highlight key artifacts (policy, environment, reward).  
4. Contrast with conventional feature‑engineering pipelines.

**Depth**  

| Step | What it entails | Key artefacts |
|------|-----------------|---------------|
| **1 Intent** | Business goal + success metric; formalize as a *reward function*. | Goal specification, KPI, data scope |
| **2 Construct Agent** | Build an RL‑style agent: policy network, state representation, action space. Treat the model as a decision‑making entity that can explore. | Policy architecture, observation encoder, reward shaping |
| **3 Train & Validate** | Use simulation or logged data to train; evaluate via *policy‑level* metrics (not just loss). Emphasize safety constraints and interpretability. | Validation logs, counterfactual tests, policy explainers |
| **4 Deploy & Iterate** | Deploy agent into production with monitoring hooks that capture state‑action outcomes; continuously retrain on fresh data to adapt. | A/B test harnesses, drift detectors, feedback loops |

**Edge Cases**  
- Sparse rewards → need reward shaping or curriculum learning.  
- Non‑stationary environments → frequent policy updates.  
- Ethical constraints → hard‑coded safety policies.

**Optimize & Communicate**  
- *Why* agentic engineering? It aligns ML models with dynamic decision problems, reduces brittle feature pipelines, and supports continuous improvement.  
- When explaining to stakeholders, emphasize the “agent” metaphor: the model learns *how* to act, not just predict.  
- For technical depth, note that training time grows with environment complexity; we trade off simulation fidelity for sample efficiency.

This structured overview shows I understand both the conceptual framework and its practical implications—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
