---
qid: ing_7b89a8b83c__star__local
question: 'Explain: Vague Instructions — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 312
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:04-05:00'
sources: []
---

**Situation:**  
During a sprint for an autonomous navigation module, my team received a high‑level requirement from product: “Improve the robot’s obstacle avoidance.” The spec only mentioned a 10 % better success rate but had no performance metrics or constraints on latency.

**Task:**  
I needed to turn that vague directive into a concrete, testable goal and deliver an algorithm that met it without breaking real‑time deadlines.

**Action:**  
First, I held a “definition of done” workshop with the product owner, UX, and hardware leads. We mapped out measurable KPIs: success rate, average avoidance time, CPU load ≤ 70 %. Then I scoped the work into two experiments—(1) a probabilistic sensor fusion model and (2) a lightweight rule‑based fallback. I used ROS 2 for integration, wrote unit tests with GoogleTest to validate each KPI, and set up continuous monitoring in Grafana. We iterated quickly, using A/B testing on a simulated environment before deploying to the field.

**Result:**  
The chosen approach raised obstacle‑avoidance success from 82 % to 94 % (12 % improvement) while keeping latency under 15 ms and CPU usage at 65 %. The exercise taught me that clarifying metrics early eliminates scope creep, keeps engineering focused, and turns vague instructions into actionable deliverables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
