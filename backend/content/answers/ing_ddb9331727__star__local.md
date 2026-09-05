---
qid: ing_ddb9331727__star__local
question: 'Explain: Cost Model for CI — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 327
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:43-05:00'
sources: []
---

**Situation:**  
At my last job we ran a nightly CI pipeline that built and tested over 120 micro‑services on Kubernetes. The cloud bill kept spiking, especially during peak build times, and senior management asked us to cut costs without hurting quality.

**Task:**  
I was tasked with creating a cost model for the CI system that would let us predict spend per run, identify wasteful steps, and recommend optimizations that kept our test coverage above 95%.

**Action:**  
First, I instrumented each job with CloudWatch metrics (CPU, memory, storage, network) and logged the time each step took. Using Terraform‑managed EKS nodes, I added an autoscaling policy that scaled down after a 5‑minute idle period. Next, I wrote a Python script to aggregate the logs into a cost‑per‑step table, factoring in spot‑instance pricing where possible. I also introduced “build shards” so only services affected by recent commits ran tests, and leveraged GitHub Actions caching for dependencies. Finally, I built a Grafana dashboard that visualized spend vs. test coverage in real time.

**Result:**  
The new model cut our nightly CI cost from $1,200 to $650 per day (a 45% reduction). Build times dropped by 20%, and we maintained 97% code coverage. I learned how to blend observability with cloud economics to drive continuous improvement without compromising quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
