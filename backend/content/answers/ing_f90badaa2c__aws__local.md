---
qid: ing_f90badaa2c__aws__local
question: 'Explain: On this page you can see the — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 453
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:19-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign the landing page for our “Python Full Course for Beginners” on the AWS‑powered learning portal, aiming to boost enrollment by 30 % within three months.

**Action – Technical Design**  
1. **Requirements**: One‑page CTA + video preview + dynamic FAQ; must support 10k concurrent visitors during launch.  
2. **Architecture**:  
   * **S3** for static assets, **CloudFront** for global CDN (latency < 70 ms).  
   * **Lambda@Edge** to inject personalized greetings from Cognito user data (Customer Obsession).  
   * **API Gateway + Lambda** to fetch real‑time enrollment stats; cached via API Gateway TTL 60 s.  
   * **DynamoDB** for quick FAQ lookup, auto‑scaling on read/write capacity.  
3. **Cost/Availability Trade‑offs**:  
   * S3+CloudFront → < $0.02/GB served, 99.999% availability.  
   * Lambda@Edge keeps compute cost low while keeping latency minimal; no single point of failure.

**Result**  
- Enrollment surged from 4,200 to **5,760** (36 %) in two weeks.  
- Page load time dropped from 3.8 s to **1.2 s** (40 % improvement).  
- Cost per new student fell by **$0.75** due to CDN savings.

**Learnings & Bar‑raiser Notes**  
* Ownership: I owned the entire funnel, not just the front‑end.  
* Dive Deep: Profiled CloudWatch metrics to pinpoint bottlenecks.  
* Quantified Impact: 36 % lift in sign‑ups and $0.75/unit cost savings.  
* Failure: Initial trial had 5 s latency; we iterated by adding a second CloudFront edge, learning the value of multi‑region caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
