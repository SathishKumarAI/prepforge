---
qid: ing_c0c47706c1__eli5__local
question: 'Explain: Get Started Architecting on AWS — Reference Architecture Examples
  and Best Practices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 234
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:42:10-05:00'
sources: []
---

Think of building a machine‑learning (ML) system on AWS like planning a road trip with a smart GPS.

**Reference architecture** is the GPS’s pre‑planned route: it shows you the best highways (Amazon SageMaker for training, Amazon S3 for data storage), rest stops (EFS or DynamoDB for intermediate results), and how to avoid traffic jams (Auto Scaling and spot instances).  
You can pick a “classic” trip that follows the most common path or a “custom” route that detours through specific cities (e.g., using Lambda for real‑time inference).

**Best practices** are the GPS’s safety tips: keep your data encrypted, use IAM roles to give only the permissions needed, monitor with CloudWatch, and back up models in S3.  
Just as a good GPS keeps you on track while letting you choose stops, these AWS patterns let you start fast, stay secure, and scale smoothly without having to design everything from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
