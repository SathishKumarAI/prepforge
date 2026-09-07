---
qid: ing_523d4f66aa__aws__local
question: 'Explain: Architecture  — Architecture \u2014 Ceph Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 477
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:03-05:00'
sources: []
---

**Situation & Task**  
I was tasked to design a highly‑available, cost‑efficient storage layer for a data‑science platform that ingested ~200 TB/month of raw sensor logs and produced nightly ML models. The team needed durability, low latency for training jobs, and seamless integration with SageMaker.

**Action – Architecture Overview**  
1. **Ceph RADOS Block Device (RBD)** as the underlying object store—provides erasure‑coded replication (3‑of‑6) for 99.999% durability while keeping storage cost ~30 % lower than EBS.  
2. **CephFS** mounted on an EC2 Auto Scaling group behind an Application Load Balancer; this gives POSIX access to notebooks and training scripts, with per‑instance throughput of 10 MiB/s.  
3. **SageMaker Endpoint** pulls data directly via the Ceph RBD block device using a custom EFS‑to‑Ceph gateway (AWS DataSync) to keep transfer costs < $0.05/GB.  
4. **Observability**: CloudWatch metrics on object count, read/write latency; Prometheus exporters for RADOS health.

**Result**  
- Achieved 95 % reduction in storage spend versus S3+Glacier baseline.  
- Training job throughput improved by 40 %, from 12 h to 7 h per model.  
- Zero data loss incidents during a 6‑month period of 1,200+ concurrent training jobs.

**Leadership Principles Highlighted**  
- **Ownership & Deliver Results:** I owned the end‑to‑end storage stack and delivered measurable cost/time savings.  
- **Dive Deep & Bias for Action:** Prototyped Ceph on EC2 spot instances to validate performance before production rollout.

**Bar‑raiser Takeaway**  
They’d listen for a clear ownership narrative, quantitative impact (cost %, time saved), deep technical justification of Ceph over native AWS services, and evidence that the design was iterated from pilot failures (e.g., initial 10 MiB/s bottleneck fixed by adding more OSD nodes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
