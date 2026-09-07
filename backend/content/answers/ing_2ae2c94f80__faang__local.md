---
qid: ing_2ae2c94f80__faang__local
question: 'Explain: Task Success Rate (TSR) — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 428
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:54-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Task Success Rate* (TSR) as a metric for evaluating agentic AI systems—those that plan, act, and adapt autonomously.  
Key assumptions:  
1. The system operates in a well‑defined environment with clear success criteria per task.  
2. Each trial starts from the same initial state distribution or a known set of conditions.  

**Approach**  
1. Define what “success” means for the target domain (e.g., reaching a goal, satisfying constraints).  
2. Run a large number of independent episodes.  
3. Compute TSR as the fraction of episodes where the success condition is met.

**Depth**  
TSR = (Σᵢ Sᵢ) / N, where Sᵢ ∈ {0,1} indicates success on episode *i*, and *N* is total trials.  
- **Complexity:** O(N) time, constant space beyond the trial loop.  
- **Interpretability:** Directly reflects functional performance; higher TSR → more reliable agent.  
- **Limitations:** Does not capture *how well* a task was performed (speed, energy), nor does it penalize partial successes unless explicitly encoded.

**Edge Cases**  
- Sparse rewards: many failures can inflate variance.  
- Non‑stationary environments: TSR may drift over time; need sliding windows.  
- Multi‑objective tasks: define composite success criteria or weighted TSR.

**Optimize & Communicate**  
1. **Bootstrapping** to estimate confidence intervals for TSR, giving statistical rigor.  
2. **Stratified sampling** if task difficulty varies across contexts.  
3. Report *mean ± SE* alongside raw TSR so stakeholders understand reliability and uncertainty.  

By framing TSR this way—clear definition, robust estimation, and contextual interpretation—we provide interviewers with a concise yet technically sound answer that demonstrates structured thinking and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
