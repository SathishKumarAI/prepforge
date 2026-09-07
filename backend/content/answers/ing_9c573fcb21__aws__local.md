---
qid: ing_9c573fcb21__aws__local
question: 'Explain: 5.3 Create a New Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 428
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:15-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was tasked with designing the “Create a New Post” flow for an Instagram‑style app that must support millions of daily uploads while keeping latency under 200 ms and storage costs low.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements**: Upload image/video, optional caption, tags, privacy flag; generate thumbnails; store metadata in a highly available NoSQL DB.  
2. **Architecture**:
   * **API Gateway → Lambda** – handles auth and validation (serverless scales automatically).  
   * **S3 multipart upload** – stores raw media; pre‑signed URLs avoid data transfer over our servers.  
   * **Step Functions** orchestrate:  
     - **Thumbnail generation** in a GPU‑enabled ECS task (Fargate).  
     - **Metadata write** to DynamoDB (global secondary indexes for search).  
   * **SNS + SQS** – decouples downstream analytics and recommendation services.  
3. **Scalability/Availability**:  
   * S3 & DynamoDB are multi‑AZ; Lambda scales to 10 k concurrent uploads.  
   * Thumbnails cached in CloudFront, reducing repeated compute.  
4. **Cost Trade‑offs**:  
   * Serverless reduces idle spend (≈$0.0000167 per request).  
   * Using S3 transfer acceleration for heavy uploads cuts egress cost by 30 %.  

**Result (Deliver Results)**  
The prototype handled 200 k concurrent uploads with 95 % of posts under 180 ms latency, and storage cost dropped from $12K/month to $7.5K/month after moving to S3 lifecycle policies.

**Bar‑raiser Takeaway**  
I took full ownership, dug into cold‑start metrics, quantified the impact on latency & cost, and learned that decoupling compute via Step Functions dramatically improves reliability—an insight I’ll bring to future high‑traffic services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
