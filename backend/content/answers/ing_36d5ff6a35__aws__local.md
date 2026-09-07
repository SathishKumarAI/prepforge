---
qid: ing_36d5ff6a35__aws__local
question: 'Explain: Cloud Computing — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 454
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:36-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI product team, our ML inference pipeline was on a single EC2 instance; latency spiked during peak traffic and we couldn’t meet the SLA of 150 ms for 95 % of requests. My goal: build a scalable client‑server architecture that supports real‑time predictions while keeping costs under $1k/month.

**Action (Technical Design)**  
I designed a **stateless inference API** behind Amazon API Gateway, backed by an autoscaling **Lambda layer** that loads the trained model from S3 into memory only on first invocation. For heavy compute bursts I added a **SageMaker Endpoint** with GPU instances and used **AWS Step Functions** to route requests based on latency thresholds.  
- **Scalability:** API Gateway + Lambda scales horizontally to thousands of RPS; SageMaker’s endpoint auto‑scales via CloudWatch alarms.  
- **Availability:** Multi‑AZ deployment, health checks, and fallback logic ensure 99.9 % uptime.  
- **Cost:** The Lambda + S3 model path cost <$300/month; the SageMaker GPU pool averages $600/month during peak hours—total < $1k.

**Result**  
Latency dropped from 350 ms to 110 ms (70 % improvement) and traffic handling increased by 4×. We reduced infra spend by 25 % YoY while maintaining SLAs, earning a “Go‑Live” green flag from the product owner in week 2.

**Reflection**  
I owned every component—design, deployment, monitoring—and dug deep into cold‑start profiling to optimize Lambda init time. Failure analysis of the initial monolith taught me to modularize for resilience. This iterative loop exemplifies *Ownership* and *Dive Deep*, core Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
