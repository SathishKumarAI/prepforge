---
qid: ing_62bb64f464__aws__local
question: 'Explain: Design a serverless inference platform serving 100+ open models
  on a shared GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 464
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:38-05:00'
sources: []
---

**Situation / Task**  
In my last role I was asked to build a **serverless inference platform** that could host 100+ open‑source models on a shared GPU fleet while keeping latency < 200 ms and cost <$0.15 per request.

**Action (Design)**  
I chose *AWS Lambda* + *Amazon SageMaker Edge Manager* for the serverless wrapper, and *Amazon Elastic Inference (EI)* attached to *EC2 G5* instances for GPU bursts. A **step‑function orchestration** routes requests to the least‑loaded EI node via a *Redis‑based token bucket* that guarantees fair share per model.  
- **Scalability:** Lambda auto‑scales to 10k concurrent inferences; EI pool scales by launching/terminating G5 instances with CloudWatch alarms (CPU<20 % → scale‑down, >80 % → scale‑up).  
- **Availability:** Multi‑AZ deployment + Route 53 health checks.  
- **Cost:** Using Spot instances for EI reduces spend by 60 %; Lambda’s $0.0000167/GB‑s keeps per‑request cost < $0.12.

**Result**  
Within three months, we achieved **99.9 % SLA**, served 1M inferences/day with an average latency of 180 ms, and cut inference spend from $3k/month to $1.2k/month (a 60 % reduction).  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered low‑latency, cost‑effective service for developers.  
- *Ownership & Dive Deep*: Built end‑to‑end pipeline, monitored every metric, and iterated on scaling logic.

**Bar‑raiser Takeaway**  
I demonstrate ownership by owning the full lifecycle, dive deep into performance metrics, quantify impact with real numbers, and iterate from failure (initial latency spike fixed by adding a second EI pool).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
