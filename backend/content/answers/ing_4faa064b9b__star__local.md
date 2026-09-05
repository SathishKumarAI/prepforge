---
qid: ing_4faa064b9b__star__local
question: 'Explain: 6.1 AI-Powered Smart Matching & Discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 330
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:07:28-05:00'
sources: []
---

**Situation:**  
At my previous fintech startup we launched a peer‑to‑peer lending platform that had been struggling to match borrowers with the right investors—our conversion rate from matched leads was only 12%, far below our target of 30%.

**Task:**  
I was tasked with building an AI‑driven matching engine that could surface the most relevant borrower–investor pairings in real time, improving conversion and reducing churn.

**Action:**  
First, I curated a dataset of past loan applications, investor preferences, and outcome metrics. Using Python’s scikit‑learn, I engineered features such as credit score similarity, investment horizon alignment, and behavioral sentiment from email exchanges. I then trained a gradient‑boosted decision tree (XGBoost) to predict match success probability. The model was deployed on our Kubernetes cluster with an inference API built in FastAPI, scaling to 10k requests per minute. To handle cold starts, I added a rule‑based fallback that prioritized high‑credit‑score borrowers for new investors.

**Result:**  
Within three months, the conversion rate jumped from 12% to 28%, and we saw a 15% reduction in loan default rates because matches were more risk‑aligned. The engine now processes over 5k matches daily with sub‑second latency, and I documented the feature pipeline so the data science team could iterate on it further. This project taught me how to blend traditional ML pipelines with real‑time engineering constraints for maximum business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
