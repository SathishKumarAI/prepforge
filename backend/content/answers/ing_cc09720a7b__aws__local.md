---
qid: ing_cc09720a7b__aws__local
question: How do images become tokens, and why does image resolution drive inference
  cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 475
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:14-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

**Situation (S)** – At my previous company I owned the **Image‑to‑Token Service** for a recommendation engine that served millions of daily users. The team needed to reduce inference latency while keeping costs under $0.05 per image.

**Task (T)** – Convert high‑resolution images into embeddings (tokens) efficiently and explain why resolution inflates cost.

**Action (A)**  
1. **Tokenization Pipeline:**  
   * Load the JPEG from S3 → Lambda for decoding.  
   * Resize to a fixed 224×224 grid, then feed into a pre‑trained ResNet‑50 on an EC2 Spot GPU cluster (or SageMaker Neo for edge).  
   * Flatten the final layer to produce a 2048‑dim token vector stored back in S3.  

2. **Why Resolution Drives Cost:**  
   * The convolutional cost scales **O(N²)** where *N* is width/height. A 1024×1024 image requires ~16× more MACs than 224×224, directly multiplying GPU hours and memory bandwidth.  
   * Higher resolution also increases I/O (larger payloads) and storage costs, and triggers larger batch sizes to amortize CPU overhead.

3. **Scalability & Availability:**  
   * Auto‑scaling EC2 Spot pools with CloudWatch alarms kept 99.9 % uptime.  
   * Use EFS for shared cache of popular embeddings, cutting redundant inference by 30%.  

**Result (R)** – After optimization, token latency dropped from 750 ms to 120 ms per image, and cost fell from $0.18 to $0.04 per image—an **85% reduction** that directly boosted user engagement.

*Learned:* Always profile the *critical path* (resolution → MACs) before scaling; small input changes can have disproportionate cost impacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
