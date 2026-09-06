---
qid: ing_c8ae2ce168__think__local
question: 'Explain: Capacity planning: you''re told to expect 100 requests/sec at
  peak with ~2K input and ~300 output tokens per request. Walk me through estimating
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 442
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:11:39-05:00'
sources: []
---

**1. Clarify assumptions & gather data**  
   - Confirm that “100 req/s” is a sustained peak, not a burst.  
   - Identify token‑per‑second throughput needed: \(100 \times (2000+300) = 230{,}000\) tokens/s.  
   - Decide on the model’s GPU requirement per request (e.g., 8 GB V100 can handle ~2k input + 300 output in <10 ms).  
   - Determine acceptable latency budget (say ≤50 ms per inference).  

**2. Build a mental model of throughput‑GPU mapping**  
   - Use *throughput per GPU* as the key metric: if one V100 processes ≈10 requests/s at 2300 tokens, then each GPU yields ~23k tokens/s.  
   - Compute total GPUs needed: \( \frac{230{,}000}{23{,}000} \approx 10\) GPUs.  

**3. Reason step‑by‑step**  
   - Calculate per‑GPU request capacity → infer token throughput per GPU.  
   - Scale to peak load → divide total tokens/s by per‑GPU tokens/s.  
   - Add safety margin (e.g., +20 % for I/O, queueing) → round up to 12 GPUs.  

**4. Avoid common traps**  
   - Don’t assume linear scaling; GPU memory and context size can cause bottlenecks.  
   - Ignore queuing delays—use latency percentiles, not just averages.  
   - Forget that inference time may increase with longer contexts or more advanced models.

**5. Sanity‑check & communicate**  
   - Verify by back‑calculating: 12 GPUs × 23k tokens/s ≈ 276k tokens/s > 230k required.  
   - Explain the logic to stakeholders: “We need ~12 V100s to comfortably hit peak throughput while keeping latency under 50 ms.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
