---
qid: ing_f0f639ea35__aws__local
question: 'Explain: Junior to mid-level engineers — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 535
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:21:47-05:00'
sources: []
---

**Situation (S)**  
I led a cross‑function team at my previous company to launch an on‑device recommendation engine that ran inference on millions of Android and iOS users without pinging the cloud.

**Task (T)**  
The challenge was to keep latency under 200 ms, preserve battery life, and scale from 5 M to 50 M daily active users while staying within a $2 M yearly budget.

**Action (A)**  
- **Design:** I chose a *model‑distillation* pipeline: large‑scale TensorFlow models were distilled into lightweight Core ML / TensorFlow Lite graphs.  
- **AWS Services:**  
  - *S3 + CloudFront* for model distribution.  
  - *Amazon SageMaker Edge Manager* to orchestrate OTA updates and gather anonymized telemetry.  
  - *AppConfig* for feature‑flagged rollout, enabling A/B testing at scale.  
- **Scalability & Availability:** Models were cached in a CDN edge location per region; each device fetched the latest version on first launch or during idle periods, ensuring 99.9 % uptime without central inference traffic.  
- **Cost:** Using SageMaker Edge Manager eliminated the need for an EC2 fleet, cutting infrastructure spend from $12 M to $2.4 M annually (80 % savings).  

**Result (R)**  
Post‑launch, latency dropped to 120 ms on average, battery impact < 1 % per session, and we saw a 15 % lift in user engagement. The cost reduction freed $5 M for new features, exceeding the original ROI target by 40 %.

---

**Leadership Principles Highlighted**

- **Customer Obsession:** Built an engine that ran locally to respect privacy and network constraints.  
- **Ownership & Deliver Results:** Took full responsibility from model training to deployment, delivering measurable business impact.

**Bar‑raiser Takeaway**

*Ownership*: I owned the entire lifecycle—data pipeline, distillation, deployment, monitoring.  
*Dive Deep*: Quantified latency, battery, cost; iterated on distribution strategy based on telemetry.  
*Quantified Impact*: 15 % engagement lift and $5 M budget reallocation.  
*Learning from Failure*: Early pilot showed model drift; I added an online‑learning hook via SageMaker Edge Manager, turning a potential failure into continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
