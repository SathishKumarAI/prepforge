---
qid: ing_aeca08acc3__aws__local
question: 'Explain: Availability Zones (AZ) — AWS-Services/AWS-Global-Architecture-Region-AZ.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 507
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:56-05:00'
sources: []
---

**Situation & Task**  
When I led the migration of our SaaS platform to AWS, we needed to guarantee *99.999% uptime* while keeping costs under $50k/month. The key was designing for **Availability Zones (AZs)**—the isolated data‑center pockets within a region.

**Action**  
I scoped requirements:  
1. **High availability** – replicate databases across at least two AZs.  
2. **Disaster recovery** – enable *cross‑region read replicas* in the nearest geographic partner.  
3. **Cost control** – use **Amazon RDS Aurora Serverless v2** with pause/resume and **Elastic Load Balancing (ALB)** to auto‑scale only during traffic spikes.

I architected a two‑AZ deployment:  
- *EC2 Auto Scaling groups* spread across AZs, health‑checked via CloudWatch.  
- *Amazon S3* for static assets, automatically replicated to a secondary region.  
- **AWS Lambda** in each AZ for background jobs, triggered by SNS topics that fan out to all zones.

I performed a **cost/latency trade‑off analysis**: keeping the primary AZ in us-east‑1a and the standby in us-east‑1b reduced inter‑AZ traffic costs by 12% while maintaining sub‑50 ms latency for our U.S. users.

**Result**  
Post‑migration, we achieved **99.999% availability**, a 30% reduction in monthly spend, and a 25% lower mean time to recovery (MTTR). The solution also earned the *AWS Well‑Architected* badge for Reliability.

---

### Leadership Principles Anchored
- **Customer Obsession** – ensured uptime directly translated into higher customer satisfaction.  
- **Ownership** – I owned the end‑to‑end design, from AZ selection to cost optimization.  

### Bar‑Raiser Signals
- **Depth (Dive Deep)** – detailed trade‑off analysis of latency vs. cost.  
- **Quantified Impact** – 99.999% availability, 30% cost savings.  
- **Learning From Failure** – initial single‑AZ prototype crashed during a storm; pivoted to multi‑AZ, turning failure into an opportunity for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
