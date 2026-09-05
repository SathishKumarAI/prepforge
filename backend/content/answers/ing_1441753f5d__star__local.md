---
qid: ing_1441753f5d__star__local
question: 'Explain: AWS Web Application Firewall (WAF) — AWS-Services/17_Security/2_InfraProtection/AWSWAF.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 339
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:41-05:00'
sources: []
---

**Situation:**  
When my team rolled out a new e‑commerce microservice on Elastic Beanstalk, we noticed repeated spikes in traffic from IP ranges that were sending malformed requests—classic bot attacks that could have crashed our application or exposed sensitive endpoints.

**Task:**  
I had to protect the service without adding latency or breaking legitimate users. The goal was to block malicious payloads while allowing 99.9 % of real traffic to flow unhindered, all within a two‑day sprint.

**Action:**  
I deployed AWS WAF on the CloudFront distribution that fronts our API Gateway. First, I created a rule set using the “SQLi” and “XSS” managed rules from AWS’s OWASP core rule sets, then added custom rate‑based rules to throttle IPs exceeding 200 requests per minute. To reduce false positives, I used the “WAF Logging” feature to stream logs to CloudWatch Insights, iterating on a whitelist of trusted user agents. Finally, I integrated WAF with AWS Shield Advanced for DDoS protection and set up an automated Lambda@Edge function that returned custom error pages for blocked requests.

**Result:**  
Within 48 hours the bot traffic dropped by 92 %, and we observed no service disruptions during a subsequent 3‑day surge. The configuration cost less than $0.15 per million requests, staying well under budget. I learned how to balance strict security with user experience by iteratively tuning WAF rules and leveraging real‑time logs for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
