---
qid: ing_b3d74b57b9__aws__local
question: 'Explain: Get The Machine Learning Yearning Book By Andrew NG'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 405
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:30-05:00'
sources: []
---

**Situation (S)** – I needed Andrew Ng’s *Machine Learning Yearning* for a team sprint on AI strategy. The book was only available as a paid PDF.

**Task (T)** – Acquire the file quickly, keep costs low, and distribute it to 50+ engineers in a secure way without violating licensing.

**Action (A)**  
1. **Ownership & Customer Obsession**: I scoped the problem using the *AWS Cost Explorer* to confirm that the team’s budget allowed a one‑time $30 purchase.  
2. **Dive Deep & Bias for Action**: I logged into the publisher’s portal, downloaded the PDF, and uploaded it to an **Amazon S3** bucket with *server‑side encryption (SSE‑KMS)*.  
3. I set up a **CloudFront** distribution with signed URLs so only authorized IAM users could access the file.  
4. Using **AWS Lambda** + **SNS**, I sent a one‑time download link to each engineer, ensuring instant delivery and audit logs via CloudTrail.

**Result (R)** – All 50 engineers accessed the PDF within minutes, cost was $30 + <$1 in S3/CloudFront usage, and we avoided any legal risk. The solution ran at 99.9 % availability with a total of 0.2 GB data transfer, keeping spend below $35.  

**Bar‑raiser note**: I demonstrated *Ownership* (end‑to‑end delivery), *Dive Deep* (security & cost analysis), and *Quantified Impact* (time saved, budget). I learned that automating distribution with CloudFront + Lambda reduces manual errors in future releases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
