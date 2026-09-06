---
qid: ing_6708cbfcbc__think__local
question: 'Explain: Serving a custom completion model to millions of DAU: walk me
  through the inference-cost model and your top three levers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 482
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:52:03-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   • *DAU*: Daily Active Users (millions).  
   • *Custom completion model*: e.g., a transformer fine‑tuned on domain data.  
   • *Inference cost*: includes compute (GPU/TPU), memory, latency, and operational overhead.  
   • Assume we have a cloud‑based inference stack with autoscaling, spot instances, and an existing serving framework.

**2. Mental model / framework**  
   - **Cost breakdown**: Compute × time + Memory × duration + Data I/O + Network + Support (logging, monitoring).  
   - **Levers**: Reduce per‑request compute, shrink model size, optimize throughput/latency trade‑off.  

**3. Step‑by‑step reasoning**  
   1. *Profile*: Measure FLOPs, peak memory, and latency per token for the current model.  
   2. *Compute cost*: Convert GPU hours to dollars (e.g., $0.05/hr).  
   3. *Memory cost*: Estimate RAM usage per instance; multiply by instance price.  
   4. *Throughput*: If we can batch more requests, compute amortization per request drops.  
   5. *Identify bottlenecks*: Is it GPU compute, memory bandwidth, or I/O?  

**4. Common traps to avoid**  
   - Assuming batch size alone solves everything; large batches hurt latency for interactive users.  
   - Ignoring cold‑start costs on spot instances.  
   - Over‑optimizing model size without validating that accuracy stays acceptable.  

**5. Sanity‑check & communicate**  
   - Cross‑verify the cost estimate with a simple formula: `Cost ≈ (GPU_rate * avg_infer_time + RAM_rate * mem) * requests_per_day`.  
   - Present the three levers in a table: *What we change*, *Expected impact*, *Trade‑offs*.  
   - End with a quick ROI calculation: e.g., “Reducing per‑token FLOPs by 30 % cuts inference cost from $X to $Y, saving Z dollars monthly.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
