---
qid: ing_7f22aba248__eli5__local
question: Here's a CUDA kernel that's 10× slower than expected. Without running it,
  what are the usual suspects, and how do you confirm each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 325
total_tokens: 501
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:58:16-05:00'
sources: []
---

Think of your CUDA kernel as a busy highway where thousands of cars (threads) race to reach their destinations (results). When the traffic slows down tenfold, you look for the usual culprits:  

1. **Bottlenecked roads** – *Memory latency* or *bank conflicts*. Check with a profiler: if global memory reads are slow or shared‑memory banks fight each other, the cars can’t move fast enough.  
2. **Traffic lights** – *Branch divergence*. If many threads take different paths, they’re forced to wait for the longest lane. Run the kernel in “trace” mode and see how often branches split.  
3. **Roadblocks** – *Under‑utilization of warps*. A low occupancy means not enough cars are on the road at once. Use `cudaOccupancyMaxPotentialBlockSize` or a profiler to verify block size versus SM resources.  
4. **Slow cars** – *Uncoalesced memory accesses*. If each thread pulls from random addresses, the highway’s bandwidth is wasted. Inspect access patterns; make sure consecutive threads touch consecutive words.  
5. **Wrong speed limit** – *Incorrect launch configuration*. Too few blocks or wrong grid size leaves many SMs idle. Confirm by comparing launched block counts to the device’s maximum.

Run a profiler (Nsight Compute, Visual Profiler) and check these metrics one by one. Fixing each will smooth your highway back to expected speeds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
