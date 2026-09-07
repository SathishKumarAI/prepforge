---
qid: ing_fd119e40dc__aws__local
question: 'Explain: You are training an agent model with end-to-end RL in your own
  harness. Walk through the environment and reward design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 461
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:13-05:00'
sources: []
---

**Situation & Task (Ownership, Customer Obsession)**  
I led a cross‑functional team that built an autonomous warehouse picker. The goal was to reduce cycle time by 30 % while keeping safety incidents below 0.1 %. I owned the end‑to‑end RL pipeline and had to design the environment and reward so the agent learned safe, efficient paths.

**Action (Dive Deep, Bias for Action)**  
*Environment*:  
- **State**: 3‑D point cloud of shelves + LiDAR‑derived occupancy grid.  
- **Actions**: continuous velocity & steering; discrete “pick” command.  
- **Dynamics**: simulated physics with ROS Gazebo → real‑time 60 Hz.

*Reward*:
1. **Task reward (+10)** for each successful pick, weighted by item priority.  
2. **Efficiency penalty (–0.01 × distance travelled)** to encourage short routes.  
3. **Safety penalty (–100)** if any collision or proximity < 0.5 m from a human avatar.  
4. **Stability bonus (+0.1 × time in balanced pose)** to reduce wobble.

We used **SageMaker RL** with the *Reinforcement Learning Studio* for distributed training, scaling to 64 GPU workers (cost ≈ $12k/month). The reward was iteratively tuned via A/B tests on a small fleet: after two cycles we hit a 28 % cycle‑time reduction and zero safety incidents.

**Result (Deliver Results)**  
- **Cycle time ↓ 28 %** (from 45 s to 32.6 s).  
- **Safety incidents** dropped from 0.12 % to 0.0 %.  
- **Operational cost** decreased by $1.2M/year due to fewer manual interventions.

I documented the failure mode when early reward over‑favored speed, learned to add the safety penalty, and shared the lesson in a post‑mortem that improved our RL design guidelines across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
