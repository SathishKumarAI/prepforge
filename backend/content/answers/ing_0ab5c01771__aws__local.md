---
qid: ing_0ab5c01771__aws__local
question: 'Explain: Your model meets quality but runs at 4s p95 and you need 400ms
  with 10x the throughput. Design the compression plan.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 498
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:59-05:00'
sources: []
---

**Situation / Task**  
I led a team that built an NLP inference service for a consumer‑app. The model delivered excellent BLEU scores but had a 95th‑percentile latency of **4 s** and could handle only **50 requests/sec**. Stakeholders demanded **≤400 ms p95** and **10× throughput** to support the next marketing push.

**Action**  
1. **Profile & Quantify** – I ran SageMaker Debugger + CloudWatch traces; 60 % of latency came from a 12‑layer transformer matrix multiplication.  
2. **Model Compression** –  
   * Applied *weight pruning* (80 % sparsity) and *quantization* to INT8, using HuggingFace `bitsandbytes`.  
   * Fine‑tuned on the same data set; BLEU dropped <0.5%.  
3. **Deployment Architecture** –  
   * Packaged the pruned model in a **TensorFlow Serving** container.  
   * Deployed behind an **Elastic Load Balancer** to 4 **ECS Fargate** tasks (CPU = 2 vCPUs, memory = 8 GiB).  
   * Enabled **AWS AppConfig** for dynamic batch‑size tuning; set max batch size = 32.  
4. **Observability & Auto‑Scaling** –  
   * CloudWatch metrics → target tracking on `p95_latency` with a scale‑out cooldown of 30 s.  
   * Integrated X-Ray to capture end‑to‑end traces and surface any remaining bottlenecks.

**Result**  
Latency dropped from **4 s → 350 ms p95** (≈ 88 % reduction). Throughput increased from **50 → 600 requests/sec** (+12×), comfortably meeting the 400 ms /10× requirement. Costs fell by ~30 % because of fewer GPU‑heavy containers and more efficient inference.

**Learning & Ownership**  
I documented every step in a “Compression Playbook” for future models, ensuring that the team could replicate the success and iterate faster—demonstrating true **Ownership** and **Customer Obsession**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
