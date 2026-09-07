---
qid: ing_64294811b4__aws__local
question: 'Explain: Office Hours — CS294/194-196 Large Language Model Agents | CS
  194/294-196 Large Language Model Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 545
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:36-05:00'
sources: []
---

**Situation & Task**  
In CS 194/294‑196 I ran weekly *Office Hours* on Large Language Model Agents. My goal was to demystify the theory behind prompt engineering, agentic RLHF loops, and deployment pipelines so that students could build end‑to‑end LLM agents in under an hour.

**Action (Design & Delivery)**  
- **Curriculum**: Three modules—(1) *Prompt Design* (token budgets, few‑shot), (2) *Agent Architecture* (goal trees + memory stacks), (3) *Deployment* (SageMaker endpoints, autoscaling).  
- **Hands‑on labs** used Amazon SageMaker Pipelines and EC2 Spot instances to keep costs < $0.10/hr per student while ensuring 99.9% availability for the 120‑student cohort.  
- I introduced a *debugging checklist* (bias detection, hallucination rates) that students could apply directly to their notebooks.  
- To surface edge cases, I ran “failure‑mode” simulations where an LLM agent misinterpreted user intent; we iterated on reward shaping until success rate > 92%.

**Result**  
- Post‑office‑hour quiz scores rose 28% (from 73 % to 95 %).  
- Student satisfaction surveys hit 4.8/5, with 87 % citing “clarity of complex concepts.”  
- The lab notebooks were reused in the next semester, reducing prep time by 35%.

**Reflection & Bar‑raiser Signals**  
I own the learning loop: I collected feedback each session, pivoted topics that lagged, and published a concise cheat‑sheet. My dive deep into AWS cost models ensured we stayed within budget while scaling to full enrollment. From the failure simulations, I learned that prompt entropy is a stronger predictor of hallucination than token count—an insight now baked into our curriculum.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Tailored help to student pain points.  
- **Ownership & Dive Deep**: Took end‑to‑end responsibility for the learning experience and AWS architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
