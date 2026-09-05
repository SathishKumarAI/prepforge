---
qid: ing_b1147ad16d__star__local
question: 'Explain: Agent config files — Agentic Engineering - by Neo Kim and Paul
  Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 345
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:25:56-05:00'
sources: []
---

**Situation**  
At a fintech startup, we were launching an autonomous credit‑scoring bot that needed to adapt its decision logic without redeploying code. The team’s existing pipeline froze when new business rules arrived, and stakeholders demanded instant rollouts.

**Task**  
I had to design a lightweight configuration system so the agent could re‑engineer itself on the fly—essentially turning our ML model into an “agentic” entity that reads its own behavior from declarative files.

**Action**  
I introduced JSON‑YAML “Agent Config Files” inspired by Neo Kim and Paul Hoekstra’s Agentic Engineering principles. Each file defined:
- **Intent rules** (e.g., `maxRiskScore: 0.7`)
- **Trigger conditions** (time‑based or event‑driven)
- **Action scripts** written in a safe subset of Python, sandboxed with Pyodide.
I wrapped the config loader in a versioned GitOps pipeline, so changes auto‑deployed to the inference service via Docker Compose. I also built a lightweight UI for domain experts to tweak thresholds and test scenarios locally before pushing.

**Result**  
Deployments of new scoring logic dropped from 48 hours to under 5 minutes. The bot’s false‑positive rate fell by 12 % within two weeks, and we saved an average of 3 developer hours per release. I learned that treating ML models as configurable agents—rather than monolithic code—dramatically increases agility while keeping governance tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
