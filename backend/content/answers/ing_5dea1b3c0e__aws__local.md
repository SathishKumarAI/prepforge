---
qid: ing_5dea1b3c0e__aws__local
question: 'Explain: Practice Questions from Top Companies — Data Science & AI Interview
  Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 475
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:20-05:00'
sources: []
---

**Customer Obsession + Deliver Results**

*Situation:*  
I was preparing for a senior data‑science role at an e‑commerce startup that needed to win a competitive bid from a Fortune 500 client. The interview panel asked me to solve a time‑series forecasting problem in 30 minutes.

*Task:*  
Show that I could turn raw metrics into actionable insights quickly, while demonstrating the ability to scale the solution across millions of users.

*Action:*  
1. **Dive deep** – I first inspected the data for seasonality and outliers using `pandas` and plotted with `matplotlib`.  
2. **Bias for Action** – Instead of building a custom ARIMA pipeline, I leveraged Amazon Forecast (fully managed time‑series service). I created a dataset group in 3 minutes, uploaded the CSV via S3, and launched an automatic model training job that returned predictions in <5 min.  
3. **Invent & Simplify** – To reduce cost, I used the *Predictive Analytics* feature to auto‑select the best algorithm, avoiding manual hyper‑parameter tuning.  
4. **Ownership** – I wrote a small Lambda function (Python 3.9) that triggered on new data uploads and refreshed forecasts every 12 h, storing results back in S3 for downstream services.

*Result:*  
The client received a forecast with MAE = $1.2M per week—25% better than their legacy model—and the solution ran under $0.50/day. I also documented an architecture diagram that became part of our internal Playbook, cited by 8 other teams for similar use cases.

**Bar‑raiser focus:**  
- Ownership: I took full responsibility from data ingestion to production deployment.  
- Depth: I explained every AWS service choice and trade‑off (S3 vs DynamoDB, Forecast cost vs self‑hosted model).  
- Quantified impact: 25% MAE improvement and $0.50/day cost savings.  
- Learning from failure: After a first run that over‑forecasted during holidays, I added holiday calendars to the dataset group—now the error dropped to 12%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
