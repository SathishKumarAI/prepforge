---
qid: ing_424ea5ff99__star__local
question: 'Explain: Pilot Light Approach: — Cloud Disaster Recovery Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 313
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:19-05:00'
sources: []
---

**Situation:**  
At my previous company, we hosted a critical e‑commerce platform on AWS that experienced a regional outage last year. The downtime cost us roughly $150k in lost sales and damaged customer trust.

**Task:**  
I was tasked with designing a low‑cost, high‑availability disaster recovery plan that could be activated within 30 minutes while keeping operational overhead minimal.

**Action:**  
I proposed a Pilot Light strategy: keep a scaled‑down version of the entire stack running in a secondary region—EC2 instances, RDS read replicas, and S3 buckets mirrored via cross‑region replication. I used Terraform to codify the infra, with CloudFormation stacks that could be spun up on demand. For failover, we set up Route 53 latency routing policies and an automated Lambda that promoted the pilot light to full production if the primary region reported health check failures. We also implemented a nightly snapshot workflow for RDS to ensure point‑in‑time recovery.

**Result:**  
During a subsequent outage, we spun up the pilot light in under 25 minutes, restoring service with less than a 2 % data loss. The plan reduced our monthly DR spend from $12k to $3k and earned us a “Zero Downtime” certification in our quarterly audit. I learned that keeping just enough infrastructure alive can dramatically cut recovery time without the overhead of full replication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
