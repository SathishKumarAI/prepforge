---
qid: vq_7fbd355299__aws__local
question: How do you determine if a dataset is normal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 847
total_tokens: 1076
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:00:16-05:00'
sources: []
---

**Answer (Amazon Way)**  

> *Leadership Principles:* **Customer Obsession** – we want the model to serve end‑users with reliable predictions; **Dive Deep** – we drill into the data to uncover hidden patterns.

---

### Behavioral (STAR)

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| In 2024 I led a fraud‑prevention team that had a *15 %* false‑positive rate on transaction scores. | Reduce noise by validating the training dataset’s normality before model training. | • Built an automated pipeline in **AWS Glue** to ingest raw logs from **S3**. <br>• Used **Amazon SageMaker Processing** jobs to compute descriptive stats (mean, std, skewness) and run **Shapiro–Wilk** tests via **Python SciPy**. <br>• Visualized distributions with **QuickSight** dashboards for data‑scientists. <br>• Flagged outliers (>3 σ) and applied a *winsorization* step; retrained models in **SageMaker Studio**. | The false‑positive rate dropped from 15 % to 6 %, saving the bank ~\$4 M annually in manual reviews. |

---

### Technical / System Design

1. **Requirements Clarification**
   - *Scale:* millions of rows per day, incremental updates.
   - *Availability:* near real‑time anomaly flagging; 99.9 % uptime.
   - *Cost:* <$2 k/month for a typical dataset.

2. **Proposed Architecture**

| Layer | AWS Service | Purpose |
|-------|-------------|---------|
| Ingestion | **Amazon Kinesis Data Firehose** → **S3 (Glacier)** | Low‑latency, fault‑tolerant ingestion. |
| Processing | **AWS Glue ETL** + **SageMaker Processing** | Compute statistics, run normality tests, output summary to DynamoDB. |
| Alerting | **Amazon CloudWatch Alarms** on metrics in DynamoDB | Trigger SNS notifications if skewness > threshold. |
| Visualization | **QuickSight** dashboards | Real‑time view for analysts. |

3. **Scalability & Availability**
   - Glue jobs run in parallel workers; auto‑scales with *max capacity* set to 1000 DPUs.
   - S3 is virtually unlimited and highly durable (11 9’s).
   - CloudWatch alarms are region‑wide, ensuring no single point of failure.

4. **Cost Trade‑offs**
   - Glue ETL: $0.44 per DPU‑hour; with ~10 DPUs for 2 h/day ≈ $8.80/month.
   - SageMaker Processing: ~$0.25 per vCPU‑hour; 5 h/month ≈ $1.25/month.
   - QuickSight: Standard tier $9/user/month (≈$90/month).

Total ≈ **$100–$200/month**, well below the savings from reduced false positives.

---

### What a Bar‑Raiser Looks For
- **Ownership:** I drove the end‑to‑end pipeline, owning both data quality and model performance.  
- **Dive Deep:** Leveraged statistical tests (Shapiro–Wilk, Q–Q plots) to quantify normality.  
- **Quantified Impact:** 9 % drop in false positives → \$4 M annual savings.  
- **Learning from Failure:** After an initial mis‑classification due to heavy skew, we added a winsorization step—now the model is robust against extreme values.

*Result:* A production‑grade, cost‑effective system that continuously validates dataset normality, directly improving business outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
