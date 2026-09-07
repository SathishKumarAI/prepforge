---
qid: ing_6792d11847__aws__local
question: Is accuracy always a good metric for classification performance?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 618
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:19:13-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession**, **Dive Deep**  
> **S**ituation: At my previous firm we launched a fraud‑detection model for credit cards. The product team insisted on maximizing *accuracy* because the dashboard displayed it prominently.  
> **T**ask: I was tasked with evaluating whether accuracy truly reflected real‑world value.  
> **A**ction: I dug into the data distribution (class imbalance 97 % legitimate vs 3 % fraud), ran a cost matrix, and plotted precision–recall curves. I proposed replacing plain accuracy with *F1‑score* weighted by transaction volume, and added a *confusion‑matrix‑based loss* that penalized false negatives more heavily—aligning the metric with our customer’s pain (missed fraud).  
> **R**esult: After switching to this cost‑aware metric, model tuning improved fraud detection from 72 % precision/68 % recall to 88 % precision/81 % recall, cutting chargebacks by **$4.2M annually** and boosting customer satisfaction scores by 12 points (NPS).  
> *Lesson:* Accuracy can be misleading when classes are imbalanced; metrics must reflect the business impact.

---

### Technical/System View

1. **Requirements Clarification**
   - Imbalanced binary classification
   - High cost of false negatives
   - Real‑time inference on millions of transactions per day

2. **Design & AWS Services**
   - **Feature Store:** Amazon SageMaker Feature Store for consistent feature access
   - **Model Training:** SageMaker Pipelines with Hyperparameter Tuning (grid search over class weights)
   - **Inference:** SageMaker Endpoint + Lambda for pre‑processing; use *Elastic Inference* to reduce cost
   - **Monitoring:** CloudWatch metrics on F1, precision, recall; automated retraining triggers

3. **Scalability & Availability**
   - Deploy endpoint across multiple AZs with auto‑scaling (max 20 instances)
   - Use SageMaker Multi‑Model Endpoint for cost efficiency if many models coexist
   - Enable *Automatic Model Tuning* to keep up with concept drift

4. **Cost Trade‑offs**
   - Elastic Inference reduces instance cost by ~30 % at negligible latency impact
   - Batch inference on Spot Instances for off‑peak retraining saves 40 %

5. **Bar‑Raiser Signals**
   - Demonstrated ownership of metric choice and business outcome
   - Deep dive into data distribution and cost modeling
   - Quantified ROI ($4.2M) and NPS lift
   - Transparent learning loop: continuous monitoring & retraining

**Bottom line:** Accuracy alone is rarely a complete story; aligning metrics with customer impact delivers measurable value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
