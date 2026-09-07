---
qid: ing_34614c50f7__aws__local
question: 'Explain: Contact Information — Software Engineer Resume - by Austen McDonald
  and Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 620
total_tokens: 856
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:23-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** I was preparing a machine‑learning project portfolio for an internal hackathon, but the hiring manager requested a “Contact Information – Software Engineer Resume” template that highlighted data‑driven achievements over boilerplate details.  
> **Task:** Redesign the contact section so it immediately signals relevance to ML roles while staying concise and globally readable.  
> **Action:**  
> 1. Replaced generic “Phone / Email” with a *“Data‑Science Proficiency & Availability”* block:  
>    - 📞 Available for 30‑min consults (UTC) – 2 hrs/week, ensuring quick response to hiring teams.  
>    - 📧 LinkedIn, GitHub, Kaggle, and a personal ML blog link – all clickable in PDF/HTML formats.  
> 2. Added a micro‑summary: *“ML Engineer with 3+ years of end‑to‑end pipeline delivery; 10k+ model deployments at 99.8% uptime.”*  
> 3. Employed Markdown syntax for easy parsing by ATS and human eyes, ensuring no hidden characters that could break parsing.  
> **Result:** Within 48 hrs, the recruiter flagged the resume as “high‑impact” and scheduled a technical interview. The contact block alone reduced email response time from 5 days to <12 hours—a 70% efficiency gain for the hiring pipeline.

**Technical/System Design**

- **Requirements:**  
  - *Visibility* across multiple devices (desktop, mobile).  
  - *Security:* links must use HTTPS and be short‑lived if private.  
  - *Scalability:* support many applicants without manual updates.

- **Proposed Architecture:**  
  1. Store the resume in an S3 bucket with a CloudFront distribution (global CDN) → low latency, high availability.  
  2. Use Lambda@Edge to inject dynamic “availability” blocks based on time‑zone data from the applicant’s IP.  
  3. Secure URLs via signed cookies; cost ≈ $0.03/month for 10 k downloads.

- **Trade‑offs:**  
  - *Pros:* Instant global delivery, minimal maintenance.  
  - *Cons:* Slightly higher initial setup effort; requires IAM policy management.

**Bar‑raiser cues**

- Demonstrated *ownership* by redefining a seemingly minor section to drive measurable hiring efficiency.  
- Showed *deep dive* with precise metrics (70% reduction in response time).  
- Highlighted *learning from failure*: previous resumes had broken links—fixed via HTTPS and CDN.  

This approach aligns with Amazon’s principles: obsess over the customer (recruiter), own the end‑to‑end experience, dive deep into data, and deliver tangible results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
