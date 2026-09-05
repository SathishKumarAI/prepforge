---
qid: ing_8da8f2b7c2__star__local
question: 'Explain: Types of Back of the Envelope Calculations in System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 364
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:57-05:00'
sources: []
---

**Situation** – While interviewing for a senior ML engineer role, I was asked to estimate the latency and cost of deploying a real‑time recommendation model on AWS. The product had 10 million active users and needed sub‑50 ms inference per request.

**Task** – I had to provide a quick back‑of‑the‑envelope calculation that balanced accuracy, throughput, and cost, and explain the trade‑offs between different hosting options (EC2 vs SageMaker vs Lambda).

**Action** – First, I estimated model size: 300 MB weights + 50 MB runtime. For inference latency I used a rough rule of thumb—GPU inference is ~10× faster than CPU. Assuming an m5.xlarge CPU instance gives 20 ms per batch of 32 requests, scaling to 10 M users at 1 request/s each required about 3000 instances; cost would be ~$60k/month. Switching to a g4dn.xlarge GPU reduced latency to ~2 ms but increased cost to ~$90k/month. I then considered serverless: Lambda with 2 GB memory could do 50 ms in 100 ns per byte, costing ~$15k/month but with cold‑start penalties. I plotted these on a simple spreadsheet, highlighted the linear scaling of cost vs latency, and suggested an autoscaling GPU fleet as a balanced compromise.

**Result** – The interviewer agreed my estimates were realistic; we discussed how actual benchmarks could refine them further. I learned that framing back‑of‑the‑envelope calculations in terms of concrete resources, rules of thumb, and trade‑offs is far more convincing than raw numbers alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
