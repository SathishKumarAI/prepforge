---
qid: ing_3f151377c1__aws__local
question: There is no single correct output for an utterance. How do you evaluate
  speech quality at scale?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 449
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:48:23-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led a cross‑functional team that had to launch a real‑time voice‑to‑text product for the global customer support platform. The challenge: *evaluate speech quality at scale when there is no single “correct” transcription.*  

**Action**  
1. **Define Multi‑Metric KPI** – built a composite score (BLEU + WER + semantic F1) that reflected accuracy, fluency, and intent preservation.  
2. **Data Pipeline** – ingested 10 M utterances nightly into an Amazon SageMaker feature store; used AWS Glue to clean and annotate with crowd‑source “gold” transcripts.  
3. **Model & Scoring Service** – deployed a multi‑model ensemble (BERT‑based intent + Whisper for ASR) on Amazon ECS Fargate, auto‑scaling to 200 vCPU nodes during peak hours.  
4. **Continuous Evaluation Loop** – every batch triggered an AWS Lambda that calculated the composite score and pushed alerts to CloudWatch if drift > 0.5%.  
5. **Feedback & Improvement** – fed the top 1 % low‑score utterances back into a nightly retraining job on SageMaker, reducing error rates by 3.2× in three months.

**Result**  
- Reduced average WER from 12.4 % to 6.7 %, boosting customer satisfaction scores by **15 pp**.  
- Cut evaluation latency from 48 h to 2 h and cut cost per utterance from $0.04 to $0.01 (≈ 75 % savings).  

**Reflection & Bar‑Raiser Insight**  
I demonstrated *Ownership* by turning a nebulous problem into a measurable, automated system; *Dive Deep* through the composite metric design; quantified impact via clear KPI shifts; and learned from early false positives that required adjusting the semantic F1 threshold. This approach aligns with Amazon’s **Customer Obsession**, **Deliver Results**, and **Invent & Simplify** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
