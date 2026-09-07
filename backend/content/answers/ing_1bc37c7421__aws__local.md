---
qid: ing_1bc37c7421__aws__local
question: 'Explain: Advanced Questions - June 2026 — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 520
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:46-05:00'
sources: []
---

**Question:** *Explain an advanced AI concept you’ve worked on (e.g., multimodal learning, federated learning, or causal inference) and how you applied it in production.*

---

### Customer Obsession & Ownership  
**Situation:** My team at Amazon needed to deliver a recommendation engine that could understand both text reviews and product images for the Kindle Store. The goal was **10 % lift in click‑through rate (CTR)** while keeping latency under 50 ms.

**Task:** Design a multimodal neural network that fuses textual embeddings from BERT with visual features from EfficientNet, train it on 200 M review–image pairs, and deploy at scale.

**Action:**
1. **Dive Deep** into data quality – built an automated pipeline in **AWS Glue** to clean & deduplicate reviews, tag image metadata, and generate balanced shards.
2. Trained the model on **Amazon SageMaker** using Spot instances (cost‑savings 60 %) and mixed‑precision FP16 to reduce training time from 5 days to 48 hours.
3. Deployed with **SageMaker Neo** for inference on **AWS Inferentia** chips, achieving 35 ms latency at 10k RPS.
4. Implemented a **canary rollout** via **Amazon API Gateway + Lambda**; monitored CTR in real time and used **CloudWatch Alarms** to rollback if the lift dropped below 8 %.

**Result:** In production for two weeks, CTR increased by **12 %**, surpassing the target. The system handled 30k concurrent users with a **$0.02 per inference cost**—a 40 % reduction versus legacy single‑modal models.

### Bar‑raiser Takeaways
- **Ownership:** Took full responsibility from data prep to deployment, owning post‑launch monitoring.
- **Depth (Dive Deep):** Automated data cleaning and rigorous A/B testing ensured reliability.
- **Quantified Impact:** Clear metrics (CTR lift, latency, cost) demonstrate tangible business value.
- **Learning from Failure:** After an initial 18 % latency spike, we identified a bottleneck in image preprocessing; refactoring to pre‑cache resized tensors eliminated the issue.

---

**Key AWS Services Used:** SageMaker, Glue, Inferentia, Neo, API Gateway, Lambda, CloudWatch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
