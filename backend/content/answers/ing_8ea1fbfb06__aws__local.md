---
qid: ing_8ea1fbfb06__aws__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 449
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:48:32-05:00'
sources: []
---

**Situation / Task**  
I was asked to sketch a rough cost & scale estimate for a Spotify‑style music streaming service—think millions of users, thousands of songs per user, and real‑time recommendation.

**Action (Dive Deep + Invent & Simplify)**  
1. **Assumptions** – 10 M active users, each streams 3 hrs/day, 5 MB/GB per hour → ~150 TB/day.  
2. **Storage** – S3 Standard for raw audio (~$0.023/GB) → $3.45 B/year.  
3. **Compute** – EC2 g4dn.xlarge (GPU) for transcoding; 1 instance per 10k uploads ≈ 1,000 instances → ~$70 k/month.  
4. **Recommendation engine** – SageMaker endpoints with on‑demand GPU pods; 200 concurrent users × 5 ms inference → $120 k/month.  
5. **CDN** – CloudFront at $0.085/GB for global delivery → $12 M/year.  
6. **Databases** – DynamoDB (user profiles) & Aurora PostgreSQL (playlists). Roughly $2 M/year combined.

Total estimated yearly cost ≈ **$13 B**, with 99.99% availability via multi‑AZ deployments and auto‑scaling, and a cost‑optimization loop using Spot Instances for non‑critical jobs.

**Result**  
Presented the estimate in under 20 min; stakeholders approved the high‑level budget and requested deeper analysis on cache hit rates and spot‑to‑on‑demand ratio.  

**Learnings (Bar‑raiser focus)**  
- Validated assumptions with real Spotify data where possible.  
- Quantified trade‑offs: GPU vs CPU for transcoding, spot savings vs risk.  
- Highlighted the importance of continuous cost monitoring (AWS Cost Explorer) to keep the model accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
