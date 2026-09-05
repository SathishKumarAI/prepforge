---
qid: ing_2809ac65e1__star__local
question: Walk me through why you would disaggregate prefill and decode onto separate
  machines, as Mooncake does. What does that buy you and what does it cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 362
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:31-05:00'
sources: []
---

**Situation**  
At my previous company we launched a new recommendation engine for our e‑commerce platform. The model was split into a prefill stage (embedding generation) and a decode stage (sequence sampling). Production traffic hit 2 M requests per hour, and latency had to stay below 200 ms.

**Task**  
I needed to reduce end‑to‑end inference time while keeping cost in check. Our existing monolithic servers were bottlenecked by GPU memory: prefill used 12 GB for token embeddings, leaving little headroom for decode’s larger beam search.

**Action**  
I proposed separating the two stages onto distinct GPU nodes. Prefill workers ran on A100 GPUs with 80 GB memory and were tightly coupled to a high‑bandwidth NVLink network; they cached the model weights and streamed only the embeddings to the decode cluster. Decode workers used smaller V100s (32 GB) but performed heavy beam search, benefiting from lower contention. I implemented an asynchronous RPC layer that buffered batches and applied zero‑copy transfers via CUDA IPC, reducing transfer time by 30%. We also introduced a lightweight scheduler to balance load across both clusters.

**Result**  
Latency dropped from 190 ms to 110 ms under peak load (a 42% improvement). GPU utilization rose from 65% to 85%, and overall inference cost fell by roughly $1.2k per month due to better resource packing. I learned that careful micro‑architectural separation can unlock both performance and economics, but it requires a robust inter‑service communication layer and meticulous monitoring of batch sizes to avoid head‑of‑line blocking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
