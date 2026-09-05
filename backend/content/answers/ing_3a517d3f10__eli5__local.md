---
qid: ing_3a517d3f10__eli5__local
question: 'Explain: CName vs Alias Records — AWS-Services/16_NetworkingAndContentDelivery/1_EdgeNetworking/AmazonRoute53/Readme.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 243
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:34-05:00'
sources: []
---

Think of the internet as a giant phone book and every website has its own “phone number” (IP address).  
A **CNAME** record is like writing “If someone calls *blog.example.com*, forward them to *www.example.com*.” It’s a simple redirect that tells DNS to look up another name first. Because it points to another domain, the final IP comes from that other name’s records.

An **Alias** record in Route 53 is a special shortcut. Instead of asking for another domain’s address, Alias can point directly to an AWS resource (like CloudFront, ELB, or S3 static site) and Route 53 will give back the exact IP that resource uses. It behaves like a CNAME at the DNS level but works with the root (“@”) name, doesn’t add extra look‑ups, and keeps your domain’s traffic within AWS without extra DNS queries.

So:  
- **CNAME** = “Redirect to another domain name.”  
- **Alias** = “Point straight to an AWS resource, no redirect, even at the zone’s root.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
