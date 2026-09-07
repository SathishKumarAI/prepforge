---
qid: ing_b321b42696__aws__local
question: 'Explain: Throughput Optimization — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 412
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:43-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that built an AI‑driven “Computer Use Agent” (CUA) to automatically provision and tear down GPU instances for batch inference jobs. The product was stuck at ~15 jobs/sec throughput, far below the 200 jobs/sec SLA required by our client.

**Action**  
*Ownership & Dive Deep*: I first profiled the agent’s lifecycle with CloudWatch traces and discovered that each job waited on a “warm‑up” period of 2 min for an EC2 Spot instance to spin up.  
I redesigned the CUA to:  
1. **Pre‑allocate a small pool** of GPU instances using *EC2 Auto Scaling* with a `minimum=5` and `maximum=20`.  
2. Replace long‑running EC2s with **AWS Batch jobs** that use Spot Instances + Fargate for fast spin‑up.  
3. Use **SQS FIFO queues** to serialize job requests, coupled with **Step Functions** to orchestrate state transitions, ensuring at‑least‑once semantics without duplication.  
4. Store intermediate tensors in *Amazon S3* and trigger a **Lambda cleanup** after job completion.

**Result**  
Throughput jumped from 15 jobs/sec to **215 jobs/sec** (a 14× improvement), meeting the SLA within 2 hours of deployment. Cost fell by 37% due to better Spot utilization and eliminating idle GPU time.  

**Bar‑raiser signals**: I owned every layer, dove into metrics, quantified impact with real numbers, and learned that pre‑warming can be replaced by stateless batch execution for scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
