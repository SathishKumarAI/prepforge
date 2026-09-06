---
qid: ing_4688114c9a__fp__local
question: 'Explain: Q24: Compare batching strategies for LLM serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 489
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:35:39-05:00'
sources: []
---

### Why batching matters in LLM serving  
An LLM processes tokens by moving them through a transformer stack on a GPU/TPU. The **time per token** is roughly constant, but the **overhead of launching a kernel** and transferring data dominates for short sequences. Thus, to keep compute units busy we must group many requests into one batch:  

1. **Throughput‑optimal batching**  
   - *Batch size = GPU memory capacity / average sequence length.*  
   - Maximizes GPU utilization; each launch pays the fixed cost only once.  
   - **Latency penalty:** a request may wait for its peers, increasing tail latency.

2. **Latency‑aware batching (short‑queue strategy)**  
   - Keep a small queue (e.g., 4–8 requests).  
   - When the first request arrives, launch immediately; when more arrive within Δt, add them to the same kernel call.  
   - Balances waiting time against GPU efficiency.

3. **Token‑level batching**  
   - Pad all sequences to the longest token count in the batch *per layer*.  
   - Allows dynamic resizing: once a request finishes early, its slots free up for new requests without reshaping the entire batch.  
   - Reduces wasted computation on padding tokens compared to static sequence‑length batches.

### Deeper principle  
Batching is an instance of **queueing theory + stochastic scheduling**: we trade *service time variance* (GPU idle periods) against *waiting time*. The optimal policy minimises a weighted sum of latency and throughput, akin to the Shortest Remaining Processing Time rule in operating systems.

#### Non‑obvious insight  
In token‑level batching, the **per‑layer dynamic padding** means that early‑terminating requests free GPU warps for later layers. This *in‑batch pipelining* can be exploited by a scheduler that predicts when each request will finish and re‑uses its resources within the same kernel launch—something naive batchers miss, leading to up to 30 % higher effective throughput without extra latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
