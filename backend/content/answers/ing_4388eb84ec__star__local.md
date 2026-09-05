---
qid: ing_4388eb84ec__star__local
question: 'Explain: A customer''s distributed training job on your GPU cluster gets
  55% scaling efficiency at 64 nodes. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 460
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:03-05:00'
sources: []
---

**Situation:**  
At my previous role I managed a GPU cluster that ran large transformer models for a client’s NLP service. One week the distributed training job on 64 nodes dropped to only 55 % scaling efficiency, causing a 3‑hour wall‑clock increase per epoch.

**Task:**  
I needed to identify why communication was bottlenecking and bring the efficiency back above 75 % so that the client could stay within their SLA.

**Action:**  
1. Ran **NCCL‑profiler** on a single node to confirm that intra‑node GPU traffic was fine; all GPUs were saturating at ~12 GB/s.  
2. Collected collective communication logs with **nccl-debug=3** and examined the NCCL ring pattern. The 55 % drop coincided with an increase in network contention on the InfiniBand switch, likely due to sub‑optimal batch size per node.  
3. Reduced the per‑node batch size from 32 to 16 and added gradient accumulation over two steps, keeping the effective batch constant while cutting the number of all‑reduce operations by half.  
4. Switched from **NCCL AllReduce** to **hierarchical reduction** (first intra‑node with NCCL, then inter‑node with MPI) to lower cross‑node traffic.  
5. Re‑ran a profiling job; network bandwidth usage dropped 40 %, and latency per reduce fell from 3.2 ms to 1.6 ms.

**Result:**  
Scaling efficiency rose from 55 % to 82 % on 64 nodes, cutting epoch time from 8 min to 5 min (a 37 % speed‑up). I documented the new batch‑size strategy in our ops playbook, and we saw consistent performance gains across subsequent projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
