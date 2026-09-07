---
qid: ing_727df333a7__faang__local
question: 'Explain: Test — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 500
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:09:55-05:00'
sources: []
---

**Clarify**  
You want a concise explanation of *Agentic AI* test use‑cases, as outlined by Neo Kim. I’ll assume the audience is familiar with basic ML concepts but not Neo’s taxonomy. I’d confirm that “agentic” refers to systems that act autonomously toward goals and that we’re focusing on real‑world deployments rather than research prototypes.

**Approach**  
1. Define agentic AI in one sentence.  
2. List the primary use‑cases Neo categorizes (e.g., autonomous vehicles, robotic process automation, personal assistants).  
3. For each case, give a concrete example, key success metrics, and typical evaluation criteria.  
4. Wrap up with common pitfalls and future research directions.

**Depth**  
Agentic AI = an ML system that perceives its environment, reasons about a desired outcome, and selects actions to achieve it without human intervention. Neo Kim’s test framework maps these systems into three tiers:

| Tier | Use‑case | Example | Evaluation |
|------|----------|---------|------------|
| **1 – Navigation** | Autonomous vehicles, drones | Self‑driving car on city streets | Safety (collision rate), efficiency (route optimality) |
| **2 – Manipulation** | Industrial robotics, surgical bots | Robot arm assembling electronics | Precision, throughput, error rate |
| **3 – Decision‑making** | Personal assistants, finance advisors | AI that schedules meetings or trades stocks | Satisfaction scores, ROI, regulatory compliance |

For each tier, we run *simulation + real‑world trials*, measuring both performance metrics and robustness to distribution shift.

**Edge cases**  
- Non‑stationary environments (e.g., traffic patterns changing).  
- Adversarial inputs (malicious sensor spoofing).  
- Ethical constraints (bias in decision‑making).

Testing must include adversarial scenarios, stress tests, and human‑in‑the‑loop overrides.

**Optimize & Communicate**  
Highlight that Neo’s framework emphasizes *iterative validation*: start with high‑fidelity simulations to prune unsafe policies, then progressively introduce live data. Stress the importance of interpretable policies for auditability—especially in Tier 3. Conclude by noting that scaling agentic AI requires modular pipelines (perception → planning → control) and continuous monitoring to maintain safety guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
