---
qid: ing_99872fb198__star__local
question: 'Explain: Content Delivery Network — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 355
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:43-05:00'
sources: []
---

**Situation**  
At my previous company we launched a new video streaming service that grew from 10 k daily users to 1 M in six months. Our CDN hit‑rate dropped below 90 % during peak hours, causing buffering and a 12 % churn spike.

**Task**  
I was tasked with redesigning the content delivery pipeline so that latency stayed under 200 ms for 99 % of requests while keeping cost within our $50k/month budget.

**Action**  
1. Mapped traffic patterns with CloudWatch and identified two hot regions (NY & London).  
2. Deployed a multi‑region edge network using AWS Global Accelerator, adding an additional cache layer in Azure Front Door for the EU to balance load.  
3. Implemented adaptive bitrate streaming with HLS segments stored in S3 Transfer Acceleration, leveraging signed URLs and GeoIP routing.  
4. Added health checks that auto‑scale cache nodes via Lambda based on real‑time request rates, reducing over‑provisioning by 35 %.  
5. Monitored performance with Grafana dashboards; tuned TTLs from 30 min to 10 min for frequently updated content.

**Result**  
Latency dropped to an average of 140 ms and hit‑rate rose to 98.7 %. Peak buffering incidents fell by 85 %, directly contributing to a 4 % reduction in churn. I learned that combining edge routing, dynamic scaling, and real‑time telemetry is key to balancing performance and cost in CDN design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
