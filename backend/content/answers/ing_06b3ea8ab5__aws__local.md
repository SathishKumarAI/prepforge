---
qid: ing_06b3ea8ab5__aws__local
question: 'Q: A vendor says their model scores 90% on SWE-bench Verified. What questions
  do you ask before believing it predicts your coding-agent quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 431
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:04-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

> **Situation:** A vendor claims their model scores 90 % on SWE‑Bench Verified.  
> **Task:** Validate whether that score translates to reliable quality for our in‑house coding agent.  
> **Action:** I ran a structured audit:

| Question | Why it matters | AWS Service/Tool |
|----------|----------------|------------------|
| What is the exact test distribution (languages, problem sizes, edge cases)? | 90 % on narrow data can hide blind spots | S3 for dataset, Athena to analyze |
| How were the labels generated—human review or automated? | Human‑reviewed labels reflect real coding quality | SageMaker Ground Truth |
| What is the model’s performance across *unseen* benchmarks (e.g., CodeNet, HumanEval)? | Cross‑bench generalization shows robustness | SageMaker Experiments |
| Does it overfit to training data (train/val split leakage)? | Overfitting inflates scores | SageMaker Debugger |
| How does latency & throughput compare to our SLA? | Production constraints | CloudWatch + Lambda cold‑start metrics |

I then set up a **pilot**: 1,000 real‑world GitHub PRs scored by the vendor model vs. ours. Result: vendor’s model achieved 84 % agreement with human reviewers (vs. 78 % for our baseline), a 6 pp lift—*quantified impact*.  

**Deliver Results & Ownership**

I documented assumptions, ran cost‑impact analysis (≈$0.02 per inference on SageMaker), and presented trade‑offs to leadership. The pilot’s success led to a phased rollout and an internal monitoring dashboard (CloudWatch + QuickSight). Learned that *verifiable metrics* and *real‑world testing* are essential before trusting external benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
