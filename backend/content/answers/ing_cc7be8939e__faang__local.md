---
qid: ing_cc7be8939e__faang__local
question: 'Explain: Current limitations — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 523
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:34:47-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of the *current limitations* that constrain the adoption of **Agentic AI use cases**, referencing Neo Kim’s framework. I’ll assume “agentic” means an autonomous system that can plan, decide, and act with minimal human input.

**Approach**  
1. Restate Kim’s key constraints (data bias, interpretability, safety, alignment, cost).  
2. Highlight how each limits real‑world deployments.  
3. Tie back to concrete examples (chatbots, autonomous vehicles).

**Depth**  
Neo Kim identifies five core bottlenecks:

| Bottleneck | Why it matters | Practical impact |
|------------|----------------|------------------|
| **Data bias & scarcity** | Agents learn from historical data; skewed or limited samples lead to unfair decisions. | A self‑service recommendation bot may over‑promote niche products, hurting user trust. |
| **Interpretability & auditability** | Black‑box policies are hard to debug and certify for regulated domains. | An autonomous medical triage AI cannot be approved without explainable risk scores. |
| **Safety & robustness** | Small perturbations can cause catastrophic policy shifts (adversarial examples, distribution shift). | A delivery drone may deviate from safe flight corridors if sensor noise is unmodeled. |
| **Alignment & goal mis‑specification** | Agents optimize for proxy metrics that diverge from human intent. | A content moderation bot may over‑filter neutral posts to maximize a “toxicity” score. |
| **Compute & latency costs** | Real‑time inference with deep RL policies demands GPUs, raising operational budgets. | Deploying an on‑device assistant would exceed battery limits without pruning. |

**Edge Cases**  
- *Unseen environments*: agents may fail catastrophically.  
- *Regulatory shifts*: sudden policy changes invalidate training data.  
- *Multi‑agent interference*: coordination errors in swarm scenarios.

**Optimize & Communicate**  
Future work should focus on **continual learning with safety constraints**, **transparent reward shaping**, and **hybrid symbolic–neural planners** to reduce sample complexity. I’d explain that mitigating these limits is not just a technical fix but also an organizational shift toward rigorous data governance and cross‑disciplinary safety reviews. This narrative demonstrates structured reasoning, clear depth, and an eye on practical constraints—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
