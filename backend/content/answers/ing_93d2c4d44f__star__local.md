---
qid: ing_93d2c4d44f__star__local
question: 'Explain: Examples — Pattern: Messaging'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 326
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:27-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we had an internal chat system where fraud alerts were sent to analysts in real time. The alert volume spiked by 35% during the holiday season, and our team struggled to keep up with triage.

**Task:**  
I was tasked with building a lightweight ML pipeline that could automatically classify incoming messages into “high‑risk,” “medium‑risk,” or “low‑risk” categories so analysts could focus on the most urgent cases.

**Action:**  
First, I scraped 50k labeled chat logs and preprocessed them with spaCy to get token embeddings. Using a simple logistic regression model in scikit‑learn, I tuned class weights to handle the imbalanced data (only 8% high‑risk). I then wrapped the model in an AWS Lambda function that listened to our Kafka topic, scored each message within 200 ms, and pushed the result back to the same stream. To reduce latency, I deployed a small ONNX runtime container on EC2 spot instances, cutting inference time from 1.2 s to under 300 ms.

**Result:**  
After deployment, analysts’ triage time dropped by 42%, reducing false negatives by 18% and saving the firm roughly $120k in potential fraud losses over the season. I learned how a well‑chosen lightweight model, combined with thoughtful infrastructure choices, can deliver real business value under tight latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
