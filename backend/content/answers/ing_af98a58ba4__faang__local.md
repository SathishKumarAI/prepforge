---
qid: ing_af98a58ba4__faang__local
question: 'Explain: Storage — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 503
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:31:27-05:00'
sources: []
---

**Clarify**  
The interview asks for a *back‑of‑the‑envelope* estimate of storage needed for an ML system (e.g., training a deep net on image data). Key assumptions:  
- Dataset size \(D\) in GB;  
- Each sample is 3×\(H\times W\) bytes, with \(H=W=224\);  
- Training runs for \(E\) epochs;  
- Model checkpoints every epoch (size \(C\));  
- We store a few recent checkpoints and logs.

**Approach**  
1. Compute raw data size: \(S_{\text{raw}} = D \times 10^9\).  
2. Add overhead for sharding, caching, and duplicate reads → ~\(1.3\times S_{\text{raw}}\).  
3. Estimate checkpoint size (weights + optimizer): \(C \approx 100\,\text{MB}\) for a ResNet‑50; store \(k=5\) checkpoints → \(S_{\text{chk}} = kC\).  
4. Logs and metrics: ~\(10\,\text{MB}\).  
5. Total storage ≈ \(1.3S_{\text{raw}} + S_{\text{chk}} + 10\,\text{MB}\).

**Depth**  
For a 100‑GB image set, raw data ≈ 130 GB after overhead. Checkpoints add ~0.5 GB, logs negligible → **≈ 131 GB total**. Complexity is O(1) for estimation; actual storage cost scales linearly with dataset size and checkpoint frequency.

**Edge Cases**  
- Highly compressed data (e.g., JPEG) reduces raw bytes.  
- Very large models (Transformer‑BERT) inflate checkpoints to > 2 GB each.  
- Distributed training may duplicate data per node, raising the factor above 1.3.

**Optimize & Communicate**  
If budget tight, compress checkpoints or keep only a rolling window of checkpoints; use object storage with lifecycle policies to archive older data. Explain trade‑offs: compression vs. I/O latency. Conclude that for typical image‑classification workloads, ~1.3× raw size plus modest checkpoint overhead gives a reliable ballpark.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
