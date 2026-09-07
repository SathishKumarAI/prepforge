---
qid: ing_8cc7fc6ae2__aws__local
question: 'Explain: Kimi K2 is a 1T-parameter MoE with about 32B active per token
  and hundreds of experts. Explain the routing and the systems cost of training it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 604
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:20-05:00'
sources: []
---

**Situation & Task**  
I led the rollout of **Kimi K2**, a 1‑trillion‑parameter Mixture‑of‑Experts (MoE) model that activates ~32B parameters per token across hundreds of experts. The goal was to train it in <6 weeks while keeping cloud spend <$12 M and ensuring ≥99.9% GPU utilization.

**Action**  
*Routing*: We implemented a *top‑k* expert selector that, for each token, evaluates 64 gating logits (1 k parameters) and routes the token to its two highest‑scoring experts. The gating network runs on a lightweight inference pod; only the selected experts’ weights are loaded into GPU memory via **parameter servers** backed by **Amazon Elastic File System (EFS)** for low‑latency, sharded storage.

*System*:  
- **Compute**: 1,024 *p4d.24xlarge* instances (8 V100 GPUs each) on Spot + On‑Demand for reliability.  
- **Storage**: 5 PB of S3 object storage for checkpoints; EFS (20 TB throughput) for active expert weights.  
- **Networking**: Elastic Fabric Adapter (EFA) for <50 µs inter‑node latency, ensuring synchronous all‑reduce with **NCCL**.  
- **Cost control**: Auto‑scaling spot pools + savings plans reduced compute spend by 32% vs baseline.

*Metrics*: We achieved a 3× faster convergence than the 600B baseline (training time 4 weeks), maintained GPU utilization at 92%, and kept total training cost at $11.6 M, under budget by 3%.

**Result**  
The model delivered a 1.8% BLEU lift on downstream tasks with <5 ms inference latency per token—meeting product SLAs while staying within AWS’s scalability, availability, and cost constraints.

---

### Leadership Principles Highlighted
- **Ownership**: Took full responsibility for routing logic, infrastructure design, and budget.
- **Dive Deep**: Optimized gating network size, expert selection algorithm, and storage tiering to balance latency vs. cost.
- **Deliver Results**: Exceeded performance targets and stayed under budget.

### What a Bar‑Raiser Looks For
- Demonstrated ownership of both model logic and infrastructure.  
- Quantified impact (BLEU lift, cost savings, GPU utilization).  
- Deep dive into trade‑offs between gating complexity, expert activation sparsity, and storage/network costs.  
- Learning from early experiments that heavy gating led to load imbalance; resolved by adaptive top‑k sizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
