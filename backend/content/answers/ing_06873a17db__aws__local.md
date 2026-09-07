---
qid: ing_06873a17db__aws__local
question: Why does speaker diarisation matter clinically, and how would you attribute
  roles rather than just cluster voices?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 398
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:38-05:00'
sources: []
---

**Situation & Task**  
I led a clinical‑AI team at a hospital that needed to transcribe > 200 hrs of physician–patient conversations each week for EMR enrichment. Traditional speaker clustering produced “voice A/B” labels, but clinicians required *role attribution* (doctor vs nurse vs patient) to flag medication errors and workflow bottlenecks.

**Action**  
1. **Data‑driven feature engineering:** Extracted prosody, speech‑rate, and pause patterns that correlate with professional speaking styles.  
2. **Modeling pipeline on AWS:**  
   * **S3** for raw audio → **Transcribe Medical** (custom vocabularies).  
   * **Lambda** triggers an **Amazon SageMaker** endpoint that runs a multitask BERT‑based classifier, trained on 5 k labeled utterances with role tags.  
   * Output stored in **DynamoDB**, streamed to **Redshift** for downstream analytics.  
3. **Scalability & cost:** Auto‑scaling SageMaker endpoints kept latency < 2 s per 30‑sec clip; serverless architecture reduced on‑demand costs by 35 % vs. EC2.

**Result**  
Accuracy of role attribution hit **92 % F1**, a 27 % lift over baseline clustering (65 %). The system enabled clinicians to flag 18 % more medication discrepancies, saving an estimated $350K annually in adverse event costs.

**Reflection**  
Ownership drove me to audit the pipeline monthly; dive deep into error cases revealed that gender‑biased speech patterns skewed predictions. I retrained with a balanced dataset, improving fairness metrics by 12 %. This iteration exemplifies Amazon’s *Customer Obsession* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
