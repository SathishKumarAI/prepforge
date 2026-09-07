---
qid: ing_82d501c99b__aws__local
question: How do you evaluate a manipulation policy when every trial costs robot time
  and every failure has physical consequences?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 416
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:39-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was leading the safety validation for a warehouse robot that uses reinforcement learning to optimize pick‑and‑place paths. Every simulation cycle ran on real hardware; a single misstep could damage expensive equipment and halt operations.

**Action (Dive Deep + Bias for Action)**  
1. **Risk‑aware reward design** – I redefined the RL objective to penalize *physical contact* with a 10× weight, ensuring safety overrides speed.  
2. **Hybrid simulation stack** – Built an offline physics simulator in **AWS RoboMaker** that mirrors the real robot’s kinematics. We ran >200k virtual episodes per day (cost ≈ $0.02/episode).  
3. **Selective on‑robot rollouts** – Only the top 5% of policies from simulation were deployed to a single test unit, each trial limited to 30 seconds and monitored by **AWS IoT Greengrass** for real‑time telemetry.  
4. **Automated rollback & failure analysis** – A Lambda function triggers an AWS Step Functions workflow that logs failures in DynamoDB, runs a FastAPI microservice to compute the *Safety Margin Index* (SMI), and auto‑reverts to the last safe policy.

**Result (Deliver Results)**  
- Reduced physical failure incidents by **92%** within 3 weeks.  
- Cut on‑robot testing time from 10 hrs/day to 1 hr/day, saving ~$300/month in labor costs.  
- Achieved a 15% improvement in task throughput while maintaining safety.

**Bar‑raiser note**  
The interviewers looked for: ownership of end‑to‑end safety, deep dive into reward shaping and simulation fidelity, quantifiable impact on risk & cost, and lessons from the initial unsafe trials (e.g., adjusting penalty weights).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
