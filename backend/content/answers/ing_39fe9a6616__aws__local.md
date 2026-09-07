---
qid: ing_39fe9a6616__aws__local
question: 'Explain: Lite — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 438
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:25-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to benchmark a new “Lite” ML model that could run on edge devices while still scoring in the top 10 % of our SWE‑bench leaderboard. The goal was to prove that we could maintain performance with less compute, so the product team could ship it to low‑power IoT customers.

**Action**  
1. **Dive Deep into requirements** – I mapped out the exact metrics: top‑k accuracy, inference latency < 20 ms on a Raspberry Pi 4, and ≤ 50 MB model size.  
2. **Design & AWS services** – I built a lightweight pipeline in **AWS SageMaker Neo** to compile the PyTorch model into ARM binaries, and used **SageMaker Endpoint** with *Edge* configuration for inference. For benchmarking I spun up an **ECS Fargate** cluster with Spot instances and instrumented each run with CloudWatch metrics.  
3. **Bias for Action & Ownership** – I wrote a CI/CD script that automatically retrains on the latest SWE‑bench data, compiles to Neo, deploys, and runs the full benchmark suite, pushing results to a DynamoDB table.

**Result**  
- Achieved 92 % of the baseline accuracy while cutting inference latency from 45 ms to **18 ms**.  
- Model size dropped from 120 MB to **48 MB**, enabling deployment on the target device.  
- Total cost per benchmark run fell from $0.75 (on‑prem GPU) to **$0.12** in AWS, saving ~$3k/month for the product team.

**Learnings & Bar‑raiser cues**  
I owned the end‑to‑end pipeline, dove deep into performance bottlenecks, quantified impact with real metrics, and iterated after a failed first compile that caused 5 % accuracy loss—prompting a hyperparameter sweep. This demonstrates ownership, data‑driven results, and continuous learning—all key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
