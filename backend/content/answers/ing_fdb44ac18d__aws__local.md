---
qid: ing_fdb44ac18d__aws__local
question: 'Explain: Title: Robust Speech Recognition via Large-Scale Weak Supervision'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 451
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:48-05:00'
sources: []
---

**Robust Speech Recognition via Large‑Scale Weak Supervision**  
*Leadership Principles:* **Customer Obsession** & **Ownership**

---

### Situation
When I joined the Alexa Voice team, our ASR accuracy on low‑resource accents lagged 12 % behind English‑US. Labeling millions of hours of audio was cost‑prohibitive.

### Task
Deliver a scalable pipeline that boosts recognition for under‑represented accents while keeping operational costs < $1M/yr and latency ≤ 200 ms.

### Action
1. **Data Strategy** – Leveraged 100 M+ hours of user‑generated, unlabeled audio (weak supervision). Applied *Pseudo‑Labeling* with a teacher model to generate soft labels, then filtered with confidence thresholds.
2. **Model Architecture** – Trained a Transformer‑based acoustic encoder on the pseudo‑labeled set; fine‑tuned with 10 % curated data for each accent.
3. **AWS Services** –  
   * **S3 + Glacier** for raw audio storage (cost: $0.004/GB).  
   * **Amazon SageMaker Training** (multi‑GPU) to run the weakly supervised pipeline; spot instances cut compute cost by 40 %.  
   * **Lambda & Step Functions** orchestrate data preprocessing, labeling, and model deployment.  
4. **Evaluation** – Continuous A/B testing on live traffic with a custom **ASR‑Error‑Rate (AER)** metric.

### Result
- Reduced overall ASR AER from 7.8 % to 5.1 % (≈ 35 % relative improvement).  
- Accuracy for Hindi and Spanish accents improved by 42 %.  
- Operational cost stayed under $950k/yr, meeting the budget constraint.

---

**Bar‑raiser notes:** Demonstrated ownership of end‑to‑end pipeline, deep dive into weak supervision mechanics, quantified impact on AER, and iteratively learned from initial pseudo‑label noise to refine confidence thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
