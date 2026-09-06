---
qid: ing_bfb0e5fe4e__fp__local
question: Define TTFT, TPOT, and tokens/sec. What drives each one, and what are reasonable
  targets for a chat product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 678
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:50:47-05:00'
sources: []
---

### Time‑to‑First‑Token (TTFT)

**What it solves:**  
In a conversational AI the first token determines when the user sees *any* response. TTFT is the wall‑clock interval from the request to the arrival of that first token.

**Why it must be minimal:**  
Human perception of latency follows a logarithmic scale; after ~200 ms users feel “real time”. The first token thus sets the perceived speed, while subsequent tokens are less noticeable.

**What drives it:**  
* **Model size & parallelism:** Larger models need more kernel launches and data movement.  
* **Batch size at inference start:** Even a single‑token batch incurs the same launch overhead as a large one.  
* **Hardware pre‑fetching & cache warming:** GPUs suffer from cold‑start stalls unless tensors are resident.

**Target for chat:**  
< 200 ms on consumer GPUs, < 100 ms on edge devices; otherwise users notice lag.

---

### Tokens‑Per‑Operation (TPOT)

**What it solves:**  
TPOT measures how many tokens a single forward pass of the transformer can produce. It is a proxy for *throughput* under fixed computational resources.

**Why it matters:**  
Higher TPOT means fewer passes are needed to generate a reply, lowering energy and cost per request.

**Drivers:**  
* **Sequence‑length handling:** Attention scales as O(L²); shorter prefixes reduce work quadratically.  
* **Attention optimizations (flash/rope):** Reduce memory bandwidth and kernel launches.  
* **Model sparsity & pruning:** Fewer active weights directly cut FLOPs.

**Target for chat:**  
≥ 8–10 tokens per 1 ms on a mid‑range GPU; this allows ~2‑3 s replies even with long contexts.

---

### Tokens Per Second (tokens/sec)

**What it solves:**  
Tokens/sec is the aggregate throughput of an entire system—how many conversational tokens can be processed each second under load.

**Why it matters:**  
It determines how many concurrent users a deployment can serve and the cost‑efficiency of scaling.

**Drivers:**  
* **TPOT × parallelism (batching, pipelining).**  
* **I/O bandwidth & network latency.**  
* **Operating system scheduling overhead on multi‑core CPUs/GPUs.**

**Target for chat:**  
A production server should sustain ≥ 1 k tokens/sec to comfortably support 100–200 concurrent users with typical response lengths.

---

#### Non‑obvious insight  
**Cold‑start latency dominates TTFT more than compute time.** Even a tiny model can exceed 300 ms if the GPU kernel launch and memory allocation are not warmed; optimizing for *warm* state (e.g., pre‑allocating tensors, reusing CUDA streams) yields larger gains than merely increasing FLOP throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
