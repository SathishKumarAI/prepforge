---
qid: ing_011bc1cb6d__star__local
question: 'Explain: Unlock access to 10,000+ courses with a subscription'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 348
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:50-05:00'
sources: []
---

**Situation:**  
At my previous company we launched an online learning platform that offered a library of 12,000 courses. Users could only view course titles and previews unless they had a paid subscription. The conversion rate from free to paying users was stuck at 3 %, hurting our revenue targets.

**Task:**  
I was tasked with designing a system that would unlock full course content for subscribers while maintaining strict access controls and ensuring scalability as the user base grew to 500,000 active members.

**Action:**  
First, I mapped out an OAuth‑2.0 flow tied to our existing identity provider so that subscription status could be verified in real time. Then I implemented a fine‑grained ACL layer using AWS Cognito groups and DynamoDB for fast lookup of user entitlements. To keep latency low, I added a CDN‑cached edge policy that cached course metadata publicly but required token validation for video streams. Finally, I set up an automated billing webhook that updated entitlement records instantly upon payment confirmation, reducing manual intervention.

**Result:**  
After deployment, the paid conversion rate jumped to 12 % within two months, generating $1.8M in incremental revenue. The system handled peak traffic of 30k concurrent streams with <200 ms latency, and I reduced support tickets related to access issues by 85 %. This experience taught me how to blend secure authentication, real‑time entitlement checks, and CDN edge logic to deliver a seamless subscription experience at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
