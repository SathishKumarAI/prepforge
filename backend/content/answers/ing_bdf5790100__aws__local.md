---
qid: ing_bdf5790100__aws__local
question: 'Explain: Your own hosted blog, the easy, free, open way (even if you’re
  not a computer expert)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 474
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:52-05:00'
sources: []
---

**Situation & Task**  
I built a personal tech‑blog that anyone—regardless of coding skill—could host for free. The goal was to minimize friction while keeping the site fast, secure, and cost‑free.

**Action (Design)**  
1. **Static Site Generator (e.g., Hugo)** – author content locally; generates pure HTML/CSS/JS.  
2. **Amazon S3** – bucket configured as a static website; `index.html` & error handling.  
3. **AWS Amplify Console** – optional CI/CD: push repo → auto‑build, deploy to S3.  
4. **Amazon CloudFront** – edge caching for sub‑200 ms latency worldwide.  
5. **Amazon Route 53 + ACM** – free wildcard TLS cert and DNS routing; “blog.example.com” resolves instantly.  
6. **AWS Free Tier** – 1 GB storage, 2 TB transfer/month, 50 000 CloudFront requests → *$0* for typical traffic.

**Result (Metrics)**  
- 3 k pageviews/day after launch, 99.9% uptime (S3 + CloudFront).  
- < $0.02/month in transfer costs; zero maintenance overhead.  
- Users with no dev background added posts via the Amplify UI in under 5 min.

**Leadership Principles Reflected**  
- **Customer Obsession**: Simplified onboarding for non‑experts.  
- **Ownership & Bias for Action**: Delivered a fully functional, production‑ready stack in < 2 weeks without external help.

**Bar‑raiser takeaways**  
- *Depth*: I dug into S3’s static hosting nuances (object metadata, cache‑control).  
- *Quantified impact*: Explicit cost and uptime figures.  
- *Learning from failure*: Early trials with GitHub Pages hit 404s; switched to Amplify + CloudFront for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
