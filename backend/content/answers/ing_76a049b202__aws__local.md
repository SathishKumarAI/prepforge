---
qid: ing_76a049b202__aws__local
question: 'Explain: Convolutional Neural Network Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 427
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:23-05:00'
sources: []
---

**Situation & Task**  
At a previous e‑commerce startup I led the redesign of our product‑recommendation engine. The existing rule‑based model delivered only a **2 % lift in conversion** and struggled with new image data. My goal was to replace it with an end‑to‑end Convolutional Neural Network (CNN) that could scale to millions of images while keeping inference latency under 50 ms.

**Action**  
1. **Architecture** – I chose a ResNet‑50 backbone for feature extraction, followed by a lightweight Global Average Pooling and two fully‑connected layers tuned for our catalog size (~300K products).  
2. **AWS stack** – Trained on SageMaker with Spot GPU instances (cost savings 70 %), containerized in ECR, and deployed as a serverless inference endpoint via SageMaker Real‑Time Inference.  
3. **Scalability & Availability** – Leveraged Multi‑AZ endpoints; autoscaling capped at 1000 RPS with graceful degradation to a fallback Lambda function.  
4. **Cost** – The model size (≈50 MB) allowed us to use the `ml.m5.large` inference tier, reducing monthly spend from $12k to $3.6k while boosting throughput.

**Result**  
Within three months, click‑through rate increased by **18 %**, conversion lift reached **9 %**, and we achieved a 35 % reduction in GPU hours per training cycle—demonstrating *Customer Obsession* (better UX) and *Ownership* (end‑to‑end delivery).  

**Bar‑raiser check** – I documented hyperparameter sweeps, monitored drift, and performed post‑deployment A/B tests, showing deep technical depth and a commitment to continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
