---
qid: vq_87d1ca0d97__aws__local
question: How does Linear Algebra relate to broadcasting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 383
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:40-05:00'
sources: []
---

**Situation –** While leading a data‑science sprint for the recommendation engine at an e‑commerce startup, I noticed that our model’s inference latency was 4× higher than the SLA of 200 ms per request.  
**Task –** I had to reduce latency without sacrificing accuracy, and explain the underlying math to non‑technical stakeholders.

**Action –**  
1. **Ownership & Dive Deep:** I profiled the tensor operations in PyTorch and discovered that broadcasting—vectorizing element‑wise ops across large tensors—was being done serially on the CPU.  
2. **Technical Design:** I re‑implemented the core similarity calculation (`A @ B.T`) using NumPy’s `np.matmul` with explicit broadcasting, then offloaded it to an AWS Lambda layer backed by *Amazon SageMaker Neo* for model compilation.  
3. **AWS Services & Trade‑offs:**  
   - **SageMaker Neo** auto‑optimizes the compiled graph for the Lambda runtime, cutting CPU cycles by 70 %.  
   - **Lambda@Edge** ensures sub‑100 ms response globally with minimal cost (≈$0.0000167 per invocation).  
4. **Bias for Action & Deliver Results:** I rolled out a canary in production; latency dropped from 800 ms to 180 ms, and throughput increased by 3×.

**Result –** The change earned us a 12‑point increase on the internal “Speed” KPI and saved ~$200/month in compute spend.  
**Learning –** Always question whether high‑level abstractions (broadcasting) are being executed efficiently; small mathematical insights can unlock massive operational gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
