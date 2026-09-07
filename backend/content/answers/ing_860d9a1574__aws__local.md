---
qid: ing_860d9a1574__aws__local
question: 'Explain: How to prepare — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 390
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:49-05:00'
sources: []
---

**Situation / Task**  
At a prior startup we had to launch an on‑prem NLP inference pipeline that supported 10 k concurrent requests per second while keeping latency under 100 ms for our flagship product. The core challenge was *perplexity*—the metric that measures how well the model predicts user intent.

**Action**  
1. **Own the data** – I wrote a script to collect real‑world query logs (≈5 M samples) and split them into train/validation/test sets, ensuring no leakage.  
2. **Dive deep into metrics** – Using AWS SageMaker’s built‑in evaluation, I plotted perplexity against batch size and discovered a sweet spot at 64 tokens per inference.  
3. **Design for scale** – Deployed the model as a GPU‑optimized Lambda@Edge function behind CloudFront, with an SQS buffer to smooth traffic spikes.  
4. **Bias for action** – In under two days I rolled out the new pipeline and monitored perplexity in real time via Amazon CloudWatch dashboards.

**Result**  
Perplexity dropped from 28.7 to 12.3 (≈57 % improvement), translating into a 35 % lift in conversion rates on our product page. The cost per inference fell by 22 % thanks to the efficient batch sizing and serverless architecture, while latency stayed below 80 ms for 99.9 % of requests.

**Reflection**  
I learned that *perplexity* is not just a statistical artifact; it directly maps to user satisfaction. By owning the data pipeline, diving deep into metrics, and rapidly iterating with AWS serverless tools, we achieved measurable business impact—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
