---
qid: ing_91ea7f7e72__star__local
question: How would you serve a large mixture-of-experts model on a statically scheduled
  fabric when expert selection is data-dependent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 376
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:42-05:00'
sources: []
---

**Situation:**  
In my last role at a cloud‑AI startup, we built a 12‑billion‑parameter mixture‑of‑experts (MoE) for natural language generation. The inference engine ran on our proprietary statically scheduled fabric (SSFabric), which only allows fixed routing tables per batch. Our challenge was that expert selection depended on each token’s context, so the same batch could need different experts.

**Task:**  
I had to design a deployment strategy that kept the fabric’s static scheduling while still enabling dynamic expert choice for each request, without hurting latency or throughput.

**Action:**  
1. I profiled token‑level expert probabilities and clustered them into 8 “expert groups” that captured most of the distribution variance.  
2. For each group I pre‑generated a static routing plan on the fabric, mapping input slots to the relevant experts.  
3. At runtime, a lightweight selector ran on the host CPU: it computed the top‑k expert group for each token using a tiny lookup table, then stamped that group ID into the batch metadata.  
4. The fabric’s scheduler read the metadata and routed tokens accordingly, while a post‑processor reassembled outputs per original order.  
5. I added a cache layer to reuse routing plans for repeated queries, reducing fabric reconfiguration overhead.

**Result:**  
Latency dropped from 180 ms to 95 ms (≈47% faster) on average, and throughput rose from 1.2k tokens/s to 3.4k tokens/s. The solution also kept memory usage under the 32‑GB limit of our servers. I learned that careful clustering and metadata‑driven routing can bridge static hardware constraints with data‑dependent inference logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
