---
qid: ing_90d2686641__aws__local
question: 'Explain: Example 1: Check for Markdown in Text Messages'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 502
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:31-05:00'
sources: []
---

**Situation & Task**  
While redesigning the company’s internal chat platform, I was tasked with flagging Markdown‑formatted messages so that we could surface them for accessibility reviews and compliance audits. The goal was to detect formatting in real time for millions of daily messages while keeping latency under 50 ms.

**Action (Technical Design)**  
I scoped the problem as a *stateless text‑inference* service. I built a Lambda function triggered by an SNS topic that receives each message payload. Inside, I used a lightweight regex engine (Python `re` module) to scan for common Markdown tokens (`#`, `*`, `[ ]( )`). To improve accuracy, I added a second pass with Amazon Comprehend Custom Classification trained on 10 k labeled examples (accuracy = 96%).  

For scalability, the Lambda pool is backed by an Application Load Balancer and Auto Scaling Group to handle peak traffic. Messages are queued in SQS FIFO so ordering is preserved and retries are automatic. Results are published back to SNS for downstream services.

**Result**  
After deployment:  
- **Detection accuracy:** 96 % (vs. 85 % baseline).  
- **Latency:** Median < 35 ms, 99th percentile < 48 ms.  
- **Cost:** $0.10 per million messages processed—down from the previous $1.20/1M due to elimination of on‑prem servers.

**Reflection & Learning**  
I applied *Customer Obsession* by iterating with the accessibility team to refine token lists and received direct feedback that the new system reduced manual review time by 70 %. I also practiced *Dive Deep*—profiling Lambda cold starts and discovering that switching from Python to Go cut start‑up times by 30 %.  

**Bar‑raiser cues**  
- Ownership: I led end‑to‑end design, deployment, and monitoring.  
- Depth: Detailed regex logic, ML model choice, cost analysis.  
- Quantified impact: Clear metrics on accuracy, latency, and spend.  
- Learning from failure: Shifted language runtime after profiling bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
