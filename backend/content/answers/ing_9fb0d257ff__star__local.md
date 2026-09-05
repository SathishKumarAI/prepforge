---
qid: ing_9fb0d257ff__star__local
question: 'Explain: Cost Optimization Playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 318
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:51:34-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we launched an automated credit‑risk model that ran nightly on AWS Lambda and SageMaker. Within the first month, our cloud spend jumped 45% because every user query triggered a new inference job, and we were billing for idle compute time during low traffic periods.

**Task:**  
I was tasked with cutting the AI infrastructure cost by at least 30% while keeping model latency under 200 ms for real‑time decisions.

**Action:**  
First, I introduced a *model caching layer* using Redis to store recent predictions; we hit cache hits on 68% of requests. Next, I switched from on-demand Lambda instances to provisioned concurrency for peak hours and moved the nightly batch inference to spot EC2 instances with Auto Scaling. I also applied model compression (quantization + pruning) which reduced the SageMaker endpoint size by 60%, allowing us to fit two models per GPU instead of one. Finally, I set up CloudWatch metrics and a scheduled Lambda that shut down unused resources after 30 minutes of inactivity.

**Result:**  
The combined measures cut our monthly AI spend from $12k to $7.2k—a 40% reduction—while maintaining sub‑200 ms latency. The exercise taught me the importance of combining architectural tweaks with continuous monitoring to sustain cost efficiency in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
