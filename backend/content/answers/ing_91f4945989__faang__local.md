---
qid: ing_91f4945989__faang__local
question: 'Explain: Bandwidth — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:01-05:00'
sources: []
---

**Bandwidth – Back‑of‑the‑Envelope for a ML Feature Store**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | We’re sizing the network capacity needed to stream *model features* from a feature store to serving endpoints in real time. Assume 10 M requests/sec, 200 B per feature vector, and 50% caching hit rate. |
| **Approach** | 1️⃣ Compute raw traffic → 10 M × 200 B = 2 GB/s. <br>2️⃣ Apply cache factor → effective load ≈ 1 GB/s. <br>3️⃣ Add protocol overhead (~20 %) → ~1.2 GB/s ≈ **9.6 Tbps**? Wait, recalc: 1.2 GB/s = 9.6 Gbps. <br>4️⃣ Map to hardware (10‑Gbe NICs). |
| **Depth** | • **Bandwidth per node**: 9.6 Gbps → ≈ **12 10‑GbE links** (assuming 80 % utilization). <br>• **Scalability**: For 5× traffic, double the links or add NVMe‑over‑Fabric to offload CPU. <br>• **Trade‑offs**: Higher cache reduces bandwidth but increases memory cost; compression can cut bytes by ~30 % at CPU expense. |
| **Edge Cases** | • Burst spikes (e.g., 20× for 1 s) → need burst buffer or sharding. <br>• Feature size variance → use dynamic batching to keep link utilization steady. <br>• Network congestion → implement QoS per tenant. |
| **Optimize & Communicate** | I’d prototype with a simple Go microservice, measure per‑request latency, then iterate: add RDMA for zero‑copy transfers, switch to gRPC/HTTP2 multiplexing, and finally deploy a sharded load balancer that respects feature locality. In discussion, I’d stress the importance of aligning network design with cache strategy and real‑world burst patterns to avoid over‑provisioning or under‑utilization. |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
