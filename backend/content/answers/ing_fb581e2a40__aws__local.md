---
qid: ing_fb581e2a40__aws__local
question: 'Explain: Evaluation plan — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 522
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:47-05:00'
sources: []
---

**Situation & Goal**  
At my last role I led the launch of an AI‑powered *Meeting Assistant* that auto‑summarizes, schedules follow‑ups, and surfaces action items. The challenge was to design a rigorous evaluation plan that proved business value before production roll‑out.

**Task (Leadership Principles)**  
- **Customer Obsession** – deliver measurable improvement in meeting efficiency for users.  
- **Ownership & Deliver Results** – own the entire validation loop from data collection to KPI reporting.

**Action**  

| Phase | Key Activities | AWS Services | Rationale |
|-------|----------------|--------------|-----------|
| 1️⃣ Data Capture | Deploy a lightweight Lambda that streams Zoom/Webex transcripts to S3, tagged with speaker IDs. | **Lambda, S3, EventBridge** | Serverless for zero‑ops and cost control. |
| 2️⃣ Annotation & Ground Truth | Recruit 50 internal users; they rate summary quality (1–5) via a simple API. | **API Gateway, DynamoDB** | Low latency, scalable feedback ingestion. |
| 3️⃣ Model Evaluation | Compute BLEU, ROUGE‑L, and cosine similarity against gold summaries. Run A/B tests comparing baseline NLP model vs our fine‑tuned BERT variant. | **Amazon SageMaker, Athena** | Batch analytics on serverless data lake; easy query sharing. |
| 4️⃣ Impact Metrics | Measure: (a) avg meeting time reduction (minutes), (b) action item completion rate (%), (c) user satisfaction score. | **CloudWatch, QuickSight** | Real‑time dashboards for stakeholders. |

**Result (Quantified)**  
- A/B test showed a **15%** decrease in average meeting duration and a **23%** lift in action‑item closure within 30 days.  
- User satisfaction rose from 3.8 to 4.6 on a 5‑point scale.  

**Reflection & Learning**  
The initial plan underestimated the need for speaker diarization, which caused annotation noise. Adding a Whisper‑based speaker tag module reduced error variance by **40%**, improving metric stability. This iteration exemplified *Dive Deep* and *Bias for Action*, ensuring we delivered results that mattered to our customers while keeping costs under 5 $ per user per month.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
