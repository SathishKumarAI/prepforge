---
qid: ing_fcc4bcf805__aws__local
question: 'Explain: A quick how-to on capacity planning for an application deployed
  in AWS: Laxmi Nagarajan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 436
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:27-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that built an ML‑driven recommendation engine for a retail startup. When the product went live, traffic spiked by 350 % in just two weeks, and our SageMaker endpoints were hitting throttling limits. My goal was to design a capacity‑planning framework that kept latency <200 ms while staying under a $10k/month budget.

**Action (Technical)**  
1. **Baseline profiling** – ran *SageMaker Debugger* on 100 GB of data, measured CPU/Memory usage per inference and batch size impact.  
2. **Auto‑Scaling policy** – deployed the endpoint behind an **Application Load Balancer** with a **Target Tracking Policy** (95 % CPU) using **AWS Lambda** to trigger new instance types when predicted traffic > 10k requests/minute.  
3. **Spot & Savings Plans** – used **SageMaker Endpoint Configuration** with *managed spot instances* and purchased a 1‑yr On‑Demand Savings Plan, cutting cost by 32 %.  
4. **Monitoring & Alerting** – set up CloudWatch metrics (InferenceLatency, CPUUtilization) and SNS alerts for SLA breaches.

**Result**  
- Reduced average latency from 350 ms to 180 ms during peak traffic.  
- Cut inference costs from $12k/month to $7.8k/month (+35 % savings).  
- Achieved 99.9 % uptime over a 6‑month period.

**Reflection (Leadership)**  
I *owned* the end‑to‑end pipeline, *dived deep* into performance data, and *biased for action* by automating scaling. The bar‑raiser would note my quantitative impact, clear trade‑offs between spot vs on‑demand, and lessons learned—e.g., early spike detection prevented a 2 h outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
