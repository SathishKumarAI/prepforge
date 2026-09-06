---
qid: ing_83f733adb5__think__local
question: 'Q: Why does PagedAttention significantly increase throughput?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 460
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:45:26-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Understand that *PagedAttention* refers to the mechanism used in large‑scale transformer inference (e.g., FlashAttention‑2, Triton).  
   - Assume we’re comparing it against naïve attention with dense memory accesses.  
   - Note that “throughput” means tokens processed per second on a given GPU.

**2️⃣ Mental model: memory locality & parallelism**  
   - Traditional attention loads entire query/key/value tensors into global memory, causing many random reads and kernel launches.  
   - PagedAttention keeps only the needed pages (tiles) in fast shared/local memory, exploiting spatial/temporal locality.  
   - It also schedules work so that each thread block handles a fixed tile of Q×K, reducing divergent warps.

**3️⃣ Step‑by‑step reasoning**  
   1. **Tile size selection** → fits L2/shared cache, minimizing global traffic.  
   2. **Page caching** → once a key/value page is fetched it stays in fast memory for all queries that need it.  
   3. **Kernel fusion** → compute attention scores and softmax in one launch, cutting launch overhead.  
   4. **Warp‑level reduction** → efficient parallel summation reduces synchronization stalls.  
   5. **Resulting effect** → fewer memory transactions + lower latency per token → higher throughput.

**4️⃣ Common traps to avoid**  
   - Mixing up *throughput* (tokens/s) with *latency*.  
   - Assuming any tiling automatically speeds things up; cache misses can still dominate if tiles are too large.  
   - Forgetting that benefits grow with model size—small models may not see a huge gain.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “Does this explanation cover memory, parallelism, and kernel fusion?”  
   - Rephrase: *PagedAttention improves throughput by keeping frequently accessed key/value pages in fast cache, fusing kernels to reduce launch overhead, and scheduling work to maximize GPU occupancy.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
