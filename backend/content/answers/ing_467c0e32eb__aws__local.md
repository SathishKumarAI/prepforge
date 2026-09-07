---
qid: ing_467c0e32eb__aws__local
question: Behaviour cloning on teleoperation data has a well-known failure mode. What
  is it, and what do you do about it on a real humanoid?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 618
total_tokens: 867
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:00-05:00'
sources: []
---

**Behavior (STAR)**  
*Situation:* In a research lab we trained a Boston Dynamics‑style humanoid to walk by behavior cloning on teleoperation data.  
*Task:* Reduce the “covariate shift” failure where the robot deviates from the expert trajectory and spirals into instability.  
*Action:* I introduced an online DAgger loop: after every 10 min of autonomous rollouts, we streamed sensor logs to **S3**, used **Lambda** to trigger a SageMaker training job that added corrective labels from a live supervisor. We also deployed **AWS RoboMaker** simulations with domain‑randomized terrain to expose the policy to unseen states. The policy was re‑deployed via **CodeDeploy** in 30 s, keeping downtime <1%.  
*Result:* Success rate on the 10 m obstacle course jumped from **45 %** to **82 %**, and fall incidents dropped by **70 %** within two weeks of deployment.  

**Technical/System Design**  
- **Requirements:** real‑time inference (<50 ms), high availability (multi‑AZ), cost ≤$0.02/s for inference.  
- **Design:** Use an **ECS Fargate** container running a PyTorch model on a g5.xlarge GPU spot instance; cache weights in **ElastiCache Redis** to avoid cold starts.  
- **Scalability/Availability:** Auto‑scale ECS tasks based on CloudWatch metrics; deploy across 3 AZs for fault tolerance.  
- **Cost Trade‑off:** Spot instances cut GPU cost by ~60 % vs on‑demand, acceptable due to graceful fallback to a pre‑trained checkpoint.  

**Bar‑raiser Signals**  
- Ownership: I spearheaded the end‑to‑end pipeline from data capture to deployment.  
- Dive Deep: I profiled latency per inference layer and tuned batch size to meet real‑time constraints.  
- Quantified Impact: Measured fall reduction, throughput, and cost savings.  
- Learning from Failure: After a roll‑out where the robot misinterpreted a stair edge, we logged the state, updated the reward function, and retrained—demonstrating continuous improvement.  

**Leadership Principles:** *Customer Obsession* (reducing user frustration), *Ownership*, *Dive Deep*, *Bias for Action*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
