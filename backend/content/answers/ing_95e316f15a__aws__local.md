---
qid: ing_95e316f15a__aws__local
question: 'Explain: Pre-Trained Model as Feature Extractor in Model'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 430
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:45-05:00'
sources: []
---

**Situation / Task**  
When I joined a fintech startup, we had to launch an anomaly‑detection model for credit‑card fraud within two months. Our data scientists lacked labeled data and the team was short on GPU hours.

**Action**  
I proposed using a pre‑trained **ResNet‑50** (ImageNet) as a feature extractor, fine‑tuning only the top layers. I set up an **SageMaker Processing job** that ran on spot instances, extracted 2048‑dimensional embeddings for each transaction image, and stored them in an **Amazon S3 bucket**. The downstream classifier was a simple XGBoost model trained in SageMaker Training, consuming the embeddings. For real‑time inference I deployed the pipeline to a **Lambda@Edge** function behind CloudFront, caching the feature extractor on edge locations.

I also built an automated **CloudWatch dashboard** that tracked latency (avg 12 ms) and cost ($0.02 per inference). The model achieved a **precision of 94%** and reduced fraud losses by **18% YoY**, outperforming our baseline rule‑engine by 6 percentage points.

**Result**  
We launched on schedule, saved $15k/month in GPU usage, and the solution scaled to 10M requests/day with 99.9% availability thanks to Lambda’s auto‑scaling and S3’s durability.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered a faster, cheaper fraud detection that directly reduced customer losses.
- **Ownership & Dive Deep** – Took full ownership of the pipeline, dissecting every component (feature extractor, training, deployment) to optimize cost and performance.  

Bar‑raisers look for evidence that I owned the problem, dug into technical details, quantified impact, and learned from a failed earlier attempt where we used an unoptimized CNN that blew our GPU budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
