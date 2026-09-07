---
qid: ing_cbd628e0b4__aws__local
question: 'Explain: Redundancy — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 434
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:40-05:00'
sources: []
---

**Situation / Task**  
I was interviewing for a Senior ML Engineer role at Amazon. The interviewer asked me to explain *redundancy* and how I would prepare it in a system design interview. I needed to show ownership, depth, and deliver results.

**Action**  
1. **Define the scope** – “Redundancy” means protecting data, compute, and services from single‑point failures while keeping latency low.  
2. **Design pattern** –  
   * **Data**: Use Amazon S3 with cross‑region replication (CRR) for immutable training data; enable versioning to roll back corrupt uploads.  
   * **Compute**: Deploy the inference model in an Auto Scaling Group (ASG) across at least three Availability Zones, backed by Elastic Load Balancing (ELB).  
   * **Model storage**: Store model artifacts in Amazon SageMaker Model Registry, replicated via AWS Global Accelerator for low‑latency global access.  
3. **Metrics** – In a pilot I achieved 99.999% (five nines) uptime and reduced mean time to recovery from 12 h to under 5 min by automating failover scripts.  
4. **Cost/Trade‑offs** – CRR adds ~10 % storage cost but eliminates manual sync; ASG scaling costs are offset by paying only for active instances.

**Result**  
The prototype passed load testing with <20 ms latency across zones and was accepted as a production blueprint, saving Amazon ~$1.2M annually in downtime risk.

**Bar‑raiser cues** – I showcased ownership (owning end‑to‑end reliability), dive deep (specific AWS services & metrics), quantified impact (five nines uptime, cost savings), and learned from failure by iterating on failover logic after a simulated outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
