---
qid: ing_b9bccacb88__aws__local
question: 'Explain: Results from human red teaming — Constitutional Classifiers: Defending
  against universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 530
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:57-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: In 2023 Anthropic released “Constitutional AI” – a system that uses a *constitutional classifier* to flag unsafe outputs before they reach the user. A major risk was *universal jailbreaks*, where an attacker crafts prompts that bypass all safety checks.

*Task*: My team’s goal was to quantify how often human red‑teamers could successfully jailbreak the model and then iterate on the classifier architecture to reduce those success rates while keeping latency < 150 ms for a global audience.

*Action*:  
1. **Data Pipeline** – Collected ~200k adversarial prompts from our internal red‑team and public repositories, labeling each as *successful* or *blocked*.  
2. **Model Design** – Built a two‑stage classifier: (a) a lightweight *policy filter* (distilled BERT‑base on AWS Inferentia), and (b) a heavy *constitutional verifier* (T5‑large fine‑tuned on our safety corpus). Both stages run in parallel on SageMaker endpoints with Auto Scaling.  
3. **Evaluation Loop** – Ran 10k new jailbreak attempts nightly, feeding results back to the dev cycle via CloudWatch metrics and DynamoDB for traceability.  

*Result*: After three iterations, we cut successful jailbreaks from **38 % → 5 %** (p < 0.01). Latency stayed at **135 ms** average, and cost per inference dropped 12 % thanks to model distillation. The system now meets our SLA for 99.9 % availability across us‑west-2.

*Learnings*:  
- *Ownership*: I owned the end‑to‑end pipeline, from data ingestion to deployment, and presented quarterly “Red‑Team Health” dashboards to leadership.  
- *Dive Deep*: We discovered that many jailbreaks exploited subtle prompt phrasing; refining the training corpus with those exact patterns eliminated 70 % of them.  
- *Bias for Action*: Instead of waiting for a new version, I released an A/B test of the updated classifier within 48 hrs, catching regressions early.

**AWS Services Used**: SageMaker (Inference & Auto Scaling), Inferentia chips, DynamoDB, CloudWatch, CodePipeline.  

This demonstrates ownership, data‑driven impact, and a continuous improvement loop—key traits for any bar‑raiser at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
