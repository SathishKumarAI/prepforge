---
qid: ing_3a517d3f10__star__local
question: 'Explain: CName vs Alias Records — AWS-Services/16_NetworkingAndContentDelivery/1_EdgeNetworking/AmazonRoute53/Readme.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 280
output_tokens: 350
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:18-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup, we were launching a new analytics dashboard on a custom domain (dashboard.myapp.com). Our internal DNS team had to migrate the legacy A record that pointed directly to an EC2 IP into Route 53 while still keeping low latency for users worldwide.

**Task:**  
I needed to replace the standard CNAME with an Alias record in Route 53 so that traffic could be routed to our CloudFront distribution without exposing the underlying IP, ensuring we met our SLA of 200 ms average latency and avoided DNS lookup overhead.

**Action:**  
First, I reviewed the Route 53 documentation on CNAME vs Alias. I created a new Alias A record for dashboard.myapp.com pointing to the CloudFront distribution’s domain name (d1234.cloudfront.net). In Route 53 I set “Evaluate Target Health” to true so that if CloudFront’s origin failed, DNS would failover to an alternate origin IP. I also added health checks on the EC2 instance in case the Alias record needed a backup. Finally, I removed the old A record and ran `dig +trace dashboard.myapp.com` to verify resolution hops.

**Result:**  
The switch cut our average DNS lookup time from 35 ms (CNAME chain) to 12 ms, reducing overall page load by ~15%. We also eliminated the risk of IP rotation breaking the service. The exercise reinforced that Alias records in Route 53 are essential for mapping custom domains to AWS resources while keeping DNS performance optimal and simplifying failover logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
