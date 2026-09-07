---
qid: ing_3e11aecf0a__aws__local
question: 'Explain: what character is modified and what position'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:28-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:*  
I was tasked with improving the accuracy of an NLP model that detects product‑level sentiment from user reviews. The baseline accuracy hovered around **72 %**, and our customer‑support team complained that false positives were inflating churn estimates.

*Task:*  
Identify which character(s) in the review text most frequently caused misclassifications, and determine their positions so we could engineer a better preprocessing pipeline.

*Action:*  
1. **Dive Deep** into the tokenization logs: I extracted the top 200 misclassified reviews and aligned them to the model’s internal embeddings.  
2. Using Python’s `difflib` and Levenshtein distance, I pinpointed that the *character “”* (the double‑quote) when appearing at **position 3** of a sentence caused a 15 % drop in confidence for the sentiment classifier.  
3. Implemented a rule to strip or escape quotes only when they occur within the first three characters of a token, preserving quotation marks elsewhere.  
4. Deployed the updated preprocessing step on an **AWS Lambda** function triggered by S3 event notifications, ensuring zero‑downtime updates.

*Result:*  
After retraining, overall accuracy jumped to **84 %**, and false‑positive churn estimates decreased by **27 %** (from 12 k to 8.6 k). The Lambda solution cost <$0.05/month, and latency improved from 300 ms to 120 ms per inference.

*Bar‑raiser takeaway:*  
I demonstrated ownership by isolating a subtle preprocessing bug, diving deep into character‑level analysis, quantifying impact with real metrics, and delivering a low‑cost, scalable fix that directly benefits customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
