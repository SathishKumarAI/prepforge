---
qid: ing_1cca30ca71__star__local
question: 'Explain: Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 288
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:07-05:00'
sources: []
---

**Situation:** While leading a research sprint at my university lab, we noticed that our autonomous drone fleet was struggling to adapt to sudden weather changes during delivery missions—latency and static rule‑based behavior caused frequent crashes.

**Task:** I needed to redesign the control architecture so each drone could make independent decisions in real time, improving safety and throughput without central bottlenecks.

**Action:** I implemented an agentic system using a lightweight reinforcement learning framework (RLlib) coupled with a hierarchical policy network. Each drone ran a local policy that evaluated sensor inputs (wind speed, battery level, obstacle proximity) and chose actions—adjust thrust, change trajectory, or request help. We added a short‑term memory module so agents could learn from recent outcomes, and a publish/subscribe bus for minimal coordination on critical events. I also introduced a safety oracle that vetoed unsafe actions, ensuring compliance with regulations.

**Result:** Within three weeks of deployment, the fleet’s crash rate dropped by 68%, and delivery time improved by 22%. The system also scaled to 50 drones without added latency. I learned that true agentic AI requires balancing autonomy with fail‑safe constraints, and that lightweight on‑device learning can dramatically boost real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
