---
qid: vq_9ee341938b__local
question: performance. What may we trade for lower costs?
topic: DevOps
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 300
total_tokens: 523
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer (crisp):**  
In a production ML stack I usually cut costs by shifting compute‑intensive inference from GPU‑enabled on‑prem servers to spot‑instance CPU clusters with batch‑processing and model distillation. I also trade off real‑time latency for lower storage costs by pruning older model checkpoints and using compressed formats (e.g., ONNX + 8‑bit quantization).  

**Nuance & lived experience:**  
When we moved the recommendation engine from a single GPU node to an autoscaling Kubernetes cluster on AWS Spot Instances, we cut inference cost by ~60 % but had to accept up to 200 ms additional latency for non‑critical requests. To keep user experience intact, we kept a small cache of top‑10 predictions in Redis; the trade‑off was extra memory usage and a higher failure surface (cache misses under load).  

For storage, we migrated nightly model artifacts from S3 Standard to Glacier Deep Archive after verifying that our audit compliance only required 30‑day retention. This saved $0.004 per GB/month but introduced a ~12 hour retrieval window for rollbacks—acceptable because rollback incidents were <1% of deployments.  

Overall, the key is to quantify the impact (latency, availability) against cost savings and validate with A/B tests before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
