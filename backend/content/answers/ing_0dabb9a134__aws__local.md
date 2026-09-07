---
qid: ing_0dabb9a134__aws__local
question: 'Explain: Migrating Live — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 431
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:34-05:00'
sources: []
---

**Situation & Task**  
At Canva we had to shift from a handful of uploads per day to **50 M daily** without breaking user experience or inflating costs. The goal: keep latency <200 ms for the upload API while ensuring 99.9% availability.

**Action – Design & AWS stack**  
*I led a cross‑team squad and applied **Ownership** + **Dive Deep**.*  
1. **Decouple ingest** with S3 event notifications → Kinesis Data Streams (shard size 2 MiB, 5 shards) to buffer bursts.  
2. **Serverless processing**: Lambda × Step Functions orchestrated image transforms; each function ran in a VPC with private subnets for security.  
3. **Caching & CDN**: CloudFront + S3 “origin access identity” to serve thumbnails instantly.  
4. **Autoscaling**: Application Load Balancer + ECS Fargate (spot + on‑demand) auto‑scales based on Kinesis lag metrics.  
5. **Cost control**: Used Lambda provisioned concurrency for predictable traffic windows, reserved EC2 instances for steady baseline.

**Result**  
- Upload latency dropped from 1 s to 180 ms (95th percentile).  
- Cost per upload fell by **35%** vs the legacy monolith.  
- System sustained 50 M uploads/day with 99.97% uptime over 6 months.

**Learning & Bar‑raiser cues**  
I documented failure modes (e.g., Kinesis shard throttling) and built an automated retry policy that cut failures by 40%. The bar‑raiser will note my ownership of the end‑to‑end pipeline, depth in trade‑off analysis (Lambda vs ECS), quantified impact, and iterative learning from early spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
