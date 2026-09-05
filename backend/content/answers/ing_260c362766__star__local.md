---
qid: ing_260c362766__star__local
question: 'Explain: Wellness Stipend — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 328
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:56-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new employee wellness program that included a monthly stipend for health‑related expenses. The HR team noticed that participation dropped by 18 % in the first quarter, and managers were concerned the stipend was being misused or not tailored to individual needs.

**Task:**  
I was asked to build an internal recommendation engine that would personalize stipend amounts and suggested wellness activities based on each employee’s health data, engagement history, and budget constraints, with the goal of increasing program adoption by at least 25 % within six months.

**Action:**  
Using Python and Scikit‑Learn, I engineered features from HRIS (salary tier, tenure), wearable API feeds (steps, sleep quality), and survey responses. I trained a gradient‑boosted tree model to predict the optimal stipend level and top three activity categories per employee. I deployed the model via an internal REST API on AWS Lambda, integrating it with the company’s intranet portal so managers could see real‑time recommendations. I also set up A/B testing and automated dashboards in Tableau to monitor uptake.

**Result:**  
Within four months the participation rate rose from 82 % to 99 %, exceeding our target by 4 %. The average stipend allocation was optimized, reducing over‑provisioning costs by $12K annually. I learned how to translate raw employee data into actionable ML recommendations while balancing privacy and cost constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
