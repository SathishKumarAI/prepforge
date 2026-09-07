---
qid: ing_97b1ca5a46__aws__local
question: 'Explain: Week 2: Regression with multiple input variables'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 582
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:37-05:00'
sources: []
---

**Situation & Task**  
During my first full‑time role I was tasked with predicting monthly sales for a retailer that had recently launched a new product line. The dataset contained 12 engineered features (price, promotion spend, inventory levels, seasonality indices, competitor prices, social‑media sentiment, etc.). My goal was to build a robust multivariate regression model that could be deployed in production on AWS and provide daily forecasts for the sales team.

**Action – Technical Design**  
1. **Feature Engineering & Validation** – Used Pandas/NumPy to clean missing values, encoded categorical variables with one‑hot encoding, and performed correlation analysis (Pearson) to drop multicollinearity (> 0.9).  
2. **Modeling Pipeline** – Implemented a scikit‑learn pipeline: `StandardScaler → PolynomialFeatures(2) → RidgeRegression(alpha=1.0)` to capture interactions while preventing overfitting.  
3. **Hyper‑parameter Tuning** – Ran 5‑fold cross‑validation on an EMR cluster (Spark) and selected optimal `alpha` via Bayesian optimization (`scikit-optimize`).  
4. **Deployment** – Packaged the model with `pickle` and exposed it through a Lambda function behind API Gateway, triggered nightly by CloudWatch Events. The Lambda pulls feature data from S3 (raw CSVs), runs inference, and writes predictions to DynamoDB for downstream BI dashboards.  

**Result**  
- Forecast MAE dropped from 12.5% (baseline linear regression) to **4.7%**, a **62% relative improvement**.  
- The Lambda solution cost <$0.10 per run, compared with an on‑prem server that ran at $50/month.  
- Scalability: the EMR cluster scaled automatically (up to 32 cores) during hyper‑parameter sweeps; Lambda concurrency was set to 100, ensuring sub‑second latency for all requests.

**Reflection – Leadership Principles**  
*Ownership*: I assumed full responsibility from data ingestion to production monitoring and iterated until the model met SLA requirements.  
*Dive Deep*: By examining feature correlations and error distributions, I uncovered a hidden seasonality effect that, once modeled, yielded the largest performance gain.  
*Bias for Action*: Rather than waiting for a scheduled quarterly review, I delivered the MVP in 3 weeks, enabling the sales team to adjust campaigns in real time.

**Bar‑raiser takeaway**  
A strong answer demonstrates **ownership**, a deep technical dive (feature engineering, hyper‑parameter tuning, AWS architecture), and a quantified impact. It also shows learning from failure—initially the model overfit; after adding Ridge regularization and feature selection, performance improved dramatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
