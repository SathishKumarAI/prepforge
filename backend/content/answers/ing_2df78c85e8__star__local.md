---
qid: ing_2df78c85e8__star__local
question: 'Explain: 🌎 Geographic Regions — AWS-Services/AWS-Global-Architecture-Region-AZ.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 353
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:00:21-05:00'
sources: []
---

**Situation:**  
In my last role, we were launching a new e‑commerce platform for the European market while also maintaining an existing US‑based service. Our compliance team required that all EU customer data stay within the EU and that latency for UK users be under 50 ms.

**Task:**  
I had to design a multi‑region architecture on AWS that satisfied GDPR, kept data residency strict, and delivered low latency without breaking our single‑source‑of‑truth requirement.

**Action:**  
First, I mapped out the required regions: us‑east‑1 for the US core, eu‑central‑1 (Frankfurt) for EU compliance, and eu‑west‑2 (London) for low‑latency access. Using AWS Global Accelerator, I set up an edge network that routes traffic to the nearest healthy endpoint. For data replication, I enabled cross‑region read replicas of RDS Aurora in Frankfurt and configured DynamoDB global tables with a write‑once policy so updates from Frankfurt automatically propagate to London. To keep consistency across regions, I used SQS with FIFO queues for order processing, ensuring eventual consistency while preventing duplicate orders.

**Result:**  
After deployment, UK users experienced 30 ms latency on average, and the GDPR audit passed without any data leakage incidents. We also saw a 15% reduction in cross‑region traffic costs by leveraging Amazon CloudFront caching at the edge. This project taught me how to balance strict compliance with performance by carefully selecting regions, using global services like Accelerator and Global Tables, and orchestrating data flow across AZs and regions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
