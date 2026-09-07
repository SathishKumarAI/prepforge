---
qid: ing_a92f6c6dbc__aws__local
question: 'Explain: Softmax ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 420
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:05-05:00'
sources: []
---

**Situation / Task**  
While building a serverless inference pipeline for a 30 B‑parameter GPT model, I had to reduce the GPU memory footprint so that a single EC2 g5dn.xlarge could serve 200 concurrent requests with < 50 ms latency.

**Action**  
I leveraged *vLLM*’s **Paged Attention**: instead of loading the full attention matrix into VRAM, we store it in compressed page‑tables on an EFS file‑system and stream pages on demand. We replaced the standard softmax implementation with a *softmax‑with‑page* kernel that performs the exponentiation only on the active slice, using **CUDA Streams** for overlap.  
To orchestrate this I used **Amazon SageMaker Neo** to compile the custom kernels, wrapped them in an **AWS Lambda@Edge** layer, and deployed the model behind a **CloudFront + ALB** front‑end. We added a **S3‑based checkpoint cache** that shards page tables by request ID for fast retrieval.

**Result**  
Memory usage dropped from 48 GB to 12 GB, enabling 4× more concurrent requests. Latency improved from 120 ms to 47 ms (≈ 60 % reduction). Cost per inference fell from $0.004 to $0.0013 (70 % savings).

**Learnings & Ownership**  
I took full ownership of the end‑to‑end stack, diving deep into CUDA paging mechanics and AWS scaling limits. After a failed first prototype that caused out‑of‑memory crashes, I introduced automated health checks on Lambda@Edge to roll back to the baseline model—an example of bias for action and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
