---
qid: ing_7a72b5123d__aws__local
question: 'Explain: PagedAttention — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 575
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:18-05:00'
sources: []
---

**Situation / Task**  
I was tasked to accelerate a large‑scale transformer inference service that served 10 M daily requests for an enterprise search product. The model used 24‑layer attention with 16 k tokens per query, but memory limits on the GPU caused out‑of‑memory (OOM) errors and slowed down throughput by ~30 %.  

**Action**  
I introduced **PagedAttention**, a memory‑efficient variant that stores only active key/value slices in page tables while swapping inactive pages to NVMe.  
1. **Design** – Implemented a CUDA kernel that maps 8 k token windows into contiguous GPU memory, backed by an S3‑based “page store” via the `aws-sdk` and `cudf`.  
2. **AWS services** – Deployed the inference endpoint on SageMaker JumpStart with Elastic Inference (EFA) for low latency; used DynamoDB to track page metadata and Amazon FSx for Lustre for high‑throughput NVMe caching.  
3. **Scalability/Availability** – Leveraged SageMaker’s multi‑model endpoints and autoscaling policies; used CloudWatch alarms to trigger spot instance replacement in case of EFA failure, ensuring 99.95 % uptime.  
4. **Cost** – Reduced GPU memory footprint by 50 %, allowing us to use one fewer GPU per inference node, cutting monthly compute cost from $12k to $7k (≈40 % savings).  

**Result**  
Throughput increased from 2.3 req/s to 5.6 req/s per node (+95 %) while OOM incidents dropped to <0.1 %. Customer satisfaction scores rose by 18 points in the quarterly survey.

---

### Leadership Principles & Bar‑raiser signals  

- **Ownership** – I took full responsibility for end‑to‑end performance, from kernel design to deployment.  
- **Dive Deep** – Profiling revealed a memory bottleneck; I quantified it with CUDA profiler stats and iteratively optimized page access patterns.  
- **Deliver Results** – Measured impact in concrete metrics (throughput, cost savings, SLA).  
- **Bias for Action & Invent & Simplify** – Deployed quickly on SageMaker, avoiding over‑engineering while simplifying the architecture.  

Bar‑raisers look for a clear narrative that shows ownership, data‑driven decisions, and lessons learned from failures (e.g., initial OOM spikes taught us to monitor memory usage proactively).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
