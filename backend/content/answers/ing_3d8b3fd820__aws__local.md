---
qid: ing_3d8b3fd820__aws__local
question: 'Explain: Plan — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 434
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:51-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

I once led a cross‑functional team to prototype “Plan‑Agentic AI” for a logistics startup that wanted autonomous shipment routing.  
**Situation:** The client’s manual dispatcher handled ~2 k shipments/day; errors cost $1.2 M annually in late deliveries.  
**Task:** Build an agent that learns from historical routes, optimizes for time and fuel, and can act autonomously within safety constraints.  

**Action:**  
- **Requirements:** Real‑time state (traffic, weather, vehicle telemetry), policy compliance, explainability.  
- **Design:** A two‑tier system: (1) *Data Lake* on Amazon S3 + Glue for ingesting 50 TB of historical logs; (2) *Reinforcement Learning* pipeline on SageMaker with custom RL algorithms (DQN + PPO).  
- The agent’s policy is deployed as a Lambda‑based microservice behind API Gateway, which feeds back to an ECS Fargate cluster that updates the model every 12 hrs.  
- For safety, we added a rule engine in DynamoDB (policy rules) and a fallback scheduler in Step Functions.  

**Result:** Pilot rollout reduced delivery time by **23%** and fuel usage by **18%**, cutting operating costs from $1.2 M to $0.95 M per year—an ROI of 27% within the first quarter.  
**Learnings:** Early iteration uncovered a bias toward short‑haul routes; we introduced a constraint penalty in the reward function, illustrating how *Bias for Action* and *Dive Deep* drive continuous improvement.

---

> **Bar‑raiser check:** Ownership (end‑to‑end delivery), Depth (RL design & safety trade‑offs), Quantified Impact (cost savings), Learning from failure (reward shaping).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
