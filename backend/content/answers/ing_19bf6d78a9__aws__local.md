---
qid: ing_19bf6d78a9__aws__local
question: 'Explain: How do you test an agent in CI? Not evals - CI, on every pull
  request, in under five minutes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 440
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:38-05:00'
sources: []
---

**Situation / Task**  
When we added a new reinforcement‑learning agent to our recommendation stack, the team needed *continuous* confidence that every PR still produced a policy with no regressions and stayed under five minutes of test time.

**Action**  

1. **Design a lightweight “CI‑policy” suite** –  
   * Use **AWS CodeBuild** as the CI runner; it spins up an isolated Docker image (Python 3.10 + PyTorch) in <30 s.  
   * Inside, spin a **mock environment** with deterministic rewards (fixed seed).  
   * Run the agent for **1 k steps**, record cumulative reward and loss curves.  
2. **Assert on key metrics** –  
   * Reward must be ≥ 95 % of baseline (stored in DynamoDB per model version).  
   * Training time ≤ 4 min; memory ≤ 2 GB.  
3. **Parallelize with CodeBuild’s matrix builds** – test against two GPU and one CPU variant to surface hardware‑specific issues early.  
4. **Publish results to Slack/Teams** via a simple Lambda that parses the build log, so reviewers see “✅ 97 % reward, 3:45 min” instantly.

**Result**  

- Reduced PR merge time from ~12 h (manual eval) to <5 min per branch.  
- Detected 3 GPU‑specific bugs before they hit production, saving an estimated **$18k/month** in avoided infra costs.  
- Team confidence increased; 92 % of reviewers reported “I can merge now” within the first week.

**Reflection**  

I *owned* the pipeline end‑to‑end, *dove deep* into metric thresholds, and *learned* that deterministic mock environments give us the fastest signal. Future iterations will add a Bayesian confidence interval check to guard against overfitting on the seed data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
