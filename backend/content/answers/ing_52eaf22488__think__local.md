---
qid: ing_52eaf22488__think__local
question: 'Explain: Under the hood: Broadcasting live video to millions - Engineering
  at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 514
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:28:38-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
   * Assume “live‑video broadcasting” refers to real‑time delivery of a single feed to many viewers (e.g., Live Video at Meta).  
   * Treat “millions” as a worst‑case load; focus on scalability, latency, and reliability.  
   * Ignore edge‑device specifics (camera capture) and concentrate on the server‑side pipeline.

**2️⃣ Adopt a layered mental model**  
   1. **Capture → Encoding** – raw video → compressed frames (H.264/AV1).  
   2. **Ingestion & Distribution** – ingest at origin, push to edge caches.  
   3. **Delivery** – CDN + adaptive bitrate streaming (RTMP/HLS/DASH).  
   4. **Scaling mechanisms** – auto‑scaling compute, sharding, load balancers.  
   5. **Observability & fault tolerance** – metrics, retries, failover.

**3️⃣ Step‑by‑step reasoning**  
   * The origin server receives a stream from the broadcaster’s device and immediately re‑encodes it into multiple bitrates.  
   * Encoded chunks are forwarded to a global CDN; each edge node holds short‑term buffers.  
   * Viewers’ clients request the nearest edge, which serves the appropriate bitrate based on bandwidth estimation.  
   * To hit millions, the system partitions traffic by region and content ID, spinning up micro‑services per shard.  
   * Load balancers route requests to healthy nodes; health checks trigger auto‑scaling.  
   * Latency is bounded by the longest hop (origin → edge) plus buffering (~200 ms).  

**4️⃣ Common traps**  
   * Forgetting that encoding is CPU‑heavy—need GPU acceleration or specialized ASICs.  
   * Assuming a single CDN suffices; reality requires multi‑CDN stitching for global reach.  
   * Ignoring clock skew: all nodes must synchronize (PTP/NTP) to keep timestamps coherent.

**5️⃣ Sanity check & verbalization**  
   * Verify that each layer handles its own scalability limits before adding the next.  
   * Explain the flow as a “pipeline of buffers”: capture → encode → ingest → edge cache → client, emphasizing that every hop is parallelized and replicated to survive traffic spikes or failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
