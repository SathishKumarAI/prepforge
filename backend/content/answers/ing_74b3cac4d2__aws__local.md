---
qid: ing_74b3cac4d2__aws__local
question: Kimi K2 targets agentic and coding tasks (for example SWE-bench-style problems).
  How would you evaluate whether an agentic model is actually good, beyond a single
  benchmark number?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 427
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:50-05:00'
sources: []
---

**Situation & Task**  
At a recent hackathon I led the validation of an agentic model that solves coding problems (SWE‑Bench style). The team had one score on the public leaderboard but needed deeper evidence that the model was *truly* useful for developers.

**Action**  
1. **Define multi‑dimensional KPIs** – accuracy, *time to solution*, *bug‑density* in generated code, and *developer satisfaction*.  
2. **Create a staged evaluation pipeline**:  
   - **Unit tests** (AWS CodeBuild + Lambda) for functional correctness.  
   - **Static analysis** (SonarQube on ECS) to capture style/complexity.  
   - **Human review** via AWS Connect and Amazon Polly‑based voice prompts, logging sentiment with Comprehend.  
3. **Deploy a rolling A/B test** in an internal developer portal (API Gateway + Amplify), tracking click‑through and rollback rates.  
4. **Iterate using RLHF** – reward signals from the human‑in‑the‑loop metrics feed back to the policy via SageMaker Pipelines.

**Result**  
Within 3 weeks we saw a 27 % drop in post‑deployment bugs, a 15 % faster average resolution time, and an 84 % positive sentiment score—metrics that far outperformed the single leaderboard number.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – measuring developer happiness directly.  
- **Ownership & Dive Deep** – building end‑to‑end pipeline, quantifying every touchpoint.  

Bar‑raisers listen for evidence of *real impact*, *systematic thinking*, and a willingness to learn from early failures (e.g., adjusting reward functions after the first round of human feedback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
