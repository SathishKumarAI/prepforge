---
qid: ing_91fd324cc1__think__local
question: Design the parallelism strategy for serving a 405B-parameter dense model.
  TP, PP, EP - what goes where and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 613
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:44:53-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
   * What is “serving” – inference only, low‑latency request handling?  
   * Size: 405 B parameters ≈ 0.4 TB; fits on a few GPUs with large VRAM (e.g., A100 80 GB).  
   * Desired throughput vs latency trade‑off.  
   * Available hardware: number of nodes, interconnect speed, batch size per request.

**2️⃣ Choose the right parallelism framework**  
   * **Tensor Parallelism (TP)** distributes weight tensors across GPUs; reduces memory per GPU and keeps each device fully utilized.  
   * **Pipeline Parallelism (PP)** splits the model into stages so a single request flows through many GPUs, enabling overlap of compute & communication for high throughput.  
   * **Embedding/Parameter‑Sharding (EP)** is useful only if the embedding table dominates memory; here it’s negligible relative to dense weights.

**3️⃣ Reason step‑by‑step toward an optimal mix**  
   1. **Memory budget check**: 405 B / (#GPUs × 0.8 TB) → minimal TP factor (e.g., 2–4).  
   2. **Compute balance**: dense layers are compute‑heavy; PP can hide communication but adds pipeline depth and latency.  
   3. **Latency target**: If <10 ms, favor TP (no stage boundary stalls); if high throughput >1k req/s, add PP to parallelize across requests.  
   4. **Communication cost**: TP uses all‑reduce over small tensors → cheap; PP requires ring‑like data transfer → more expensive but amortized over many requests.  
   5. **Final plan**: e.g., **TP = 4 (2×2 grid)** + **PP = 8 stages**, no EP needed.

**4️⃣ Avoid common pitfalls**  
   * Don’t over‑shard TP – too many GPUs → all‑reduce dominates.  
   * Ignoring interconnect speed can make PP slower than pure TP.  
   * Forgetting to align batch size with pipeline depth → underutilization.  
   * Assuming EP always helps; it only matters for huge embedding tables.

**5️⃣ Sanity‑check & communicate**  
   * Verify memory per GPU ≈ 0.4 TB / (TP×PP) < 80 GB.  
   * Estimate FLOPs: TP reduces per‑GPU compute proportionally, PP keeps all GPUs busy.  
   * Present the strategy as a diagram: **[GPUs] → TP blocks → PP pipeline → inference**.  
   * Explain trade‑offs verbally: “We use TP to fit the model, then add PP for throughput; EP is unnecessary here.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
