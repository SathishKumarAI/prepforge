---
qid: ing_9b116528e0__aws__local
question: 'Explain: 1.1.1.2. Ordinary Least Squares Complexity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 429
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:46-05:00'
sources: []
---

**Situation / Task**  
I was tasked to benchmark a new recommendation engine for our e‑commerce catalog. The core algorithm was Ordinary Least Squares (OLS) regression, and I needed to quantify its computational complexity so we could decide whether to scale it on EC2 or switch to SageMaker Pipelines.

**Action**  
1. **Dive Deep into OLS math** – OLS solves \( \beta = (X^TX)^{-1}X^Ty\).  
   * Building \(X^TX\) is an \(O(n\,p^2)\) operation (n rows, p features).  
   * Inverting the \(p\times p\) matrix costs \(O(p^3)\).  
   * Multiplying by \(y\) adds another \(O(np)\).  
   Total cost: **\(O(n\,p^2 + p^3)\)**.  
2. **AWS Service Design** – I proposed using **Amazon SageMaker Processing** with an EMR cluster (Spark) for the matrix operations, leveraging **MLlib’s distributed linear algebra** to reduce runtime from hours to minutes.  
3. **Cost & Availability Trade‑offs** – Spot instances lowered compute cost by 35 % while on‑demand ensured a 99.9 % SLA.

**Result**  
The benchmark showed that for our 1M‑row, 200‑feature dataset, the naïve EC2 approach would take ~5 h and $48. Switching to SageMaker reduced runtime to **45 min** and cost to **$8**, a **90 % savings**.  

*Leadership Principles:* **Ownership** – I drove end‑to‑end optimization; **Dive Deep** – I dissected OLS complexity and AWS tooling to deliver concrete, data‑backed results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
