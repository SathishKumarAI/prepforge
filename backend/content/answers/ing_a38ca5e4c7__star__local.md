---
qid: ing_a38ca5e4c7__star__local
question: How does Harvey ensure no one is training on my data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 333
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:14-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a public API for image‑recognition that pulled user photos from third‑party accounts. Within the first month we saw a spike in traffic and several developers complained that they could’t guarantee their data wasn’t being used to train our models.

**Task:**  
I had to implement a robust system so that no external party could inadvertently use any customer’s images for training, while still allowing real‑time inference.

**Action:**  
First, I introduced an end‑to‑end encryption layer: every image is encrypted with the client’s public key before it leaves their device. On our servers we only store a hash of the image and its metadata; the full payload never sits unencrypted in RAM. Next, I set up a differential privacy module that adds calibrated noise to any aggregate statistics used for model updates. Finally, I built an audit trail in PostgreSQL that logs every API call with timestamps and a “train‑flag” field—only internal teams can flip this flag, and it’s enforced by role‑based access control.

**Result:**  
Within two weeks we passed an external penetration test with zero data leakage findings. Our customer satisfaction score rose from 72% to 94%, and the model accuracy improved by 3% because the noise budget was carefully tuned. I learned that combining cryptographic best practices with strict policy enforcement is the most reliable way to protect user data in AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
