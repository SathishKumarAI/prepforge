---
qid: ing_452446cd9c__think__local
question: 'Explain: On-policy distillation — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 456
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:07:41-05:00'
sources: []
---

**1. Clarify the request and set assumptions**  
   • Identify what “on‑policy distillation” means in ML (a knowledge‑transfer method where a student learns from a teacher that is still learning on its own policy).  
   • Assume the audience knows basic reinforcement learning, policy distillation, and the difference between on‑ and off‑policy methods.  

**2. Pick a mental model / framework**  
   • Treat it as an extension of *teacher–student* or *distillation* in RL.  
   • Break down into three layers: (a) the teacher’s learning loop, (b) the student’s learning loop, and (c) how they interact during distillation.  

**3. Reason step‑by‑step toward a concise explanation**  
   1. Start with standard policy distillation (teacher fixed).  
   2. Explain why keeping the teacher on‑policy is useful: it adapts to new data while student follows its guidance.  
   3. Describe the algorithmic flow: collect trajectories → compute Q or advantage estimates → train teacher via RL → generate soft targets for student → update student policy.  
   4. Highlight benefits (continual learning, smoother exploration) and challenges (non‑stationarity).  

**4. Common traps to avoid**  
   • Don’t confuse on‑policy distillation with on‑policy RL alone; the key is *simultaneous* teacher–student updates.  
   • Avoid overemphasizing “teacher” vs. “student”; both learn concurrently.  
   • Beware of mislabeling the student’s loss as cross‑entropy only; it often includes KL or policy gradient terms.  

**5. Sanity‑check and verbalize**  
   • Re‑phrase: “On‑policy distillation lets a teacher keep learning while teaching, so the student never relies on stale knowledge.”  
   • Compare to off‑policy distillation (teacher frozen) to confirm understanding.  
   • If any step feels shaky, revisit the RL update equations or check if the student’s loss truly incorporates the teacher’s current policy logits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
