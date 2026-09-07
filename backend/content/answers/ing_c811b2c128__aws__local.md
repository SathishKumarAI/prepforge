---
qid: ing_c811b2c128__aws__local
question: 'Explain: Simplified error customization — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 578
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:35-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of our public‑API from a monolith to an AWS‑native microservice stack. The team used **Zod** for request validation, but error responses were generic (“validation failed”) and caused 3 % of customer support tickets per month. My goal was to add *simplified error customization* so developers could return context‑rich messages without breaking the contract.

**Action**  
I scoped a new `ErrorCustomizer` module that wrapped Zod’s `safeParse`.  
1. **Requirements:**  
   - Preserve backward compatibility.  
   - Allow per‑field custom messages and HTTP status codes.  
   - Log raw errors to CloudWatch for analytics.  
2. **Design & AWS services:**  
   - Lambda (Node 14) invoked by API Gateway – stateless, auto‑scales.  
   - DynamoDB table (`ErrorTemplates`) stores JSON templates keyed by operation ID.  
   - S3 bucket holds default error docs; CloudFront caches them for 24 h.  
3. **Implementation:**  
   ```ts
   const result = schema.safeParse(body);
   if (!result.success) {
     const tmpl = await getTemplate(opId, ctx.lang);
     return { statusCode: tmpl.status, body: tmpl.message(result.error) };
   }
   ```
4. **Trade‑offs:** Added a 2 ms cold‑start latency but saved $0.01/month on S3 storage vs. hosting docs in Lambda code.

**Result**  
Within two sprints the new system reduced support tickets by **37 % (from 300 to 190 per month)** and cut average response time for error handling from 1.2 s to 0.8 s. The DynamoDB read capacity was throttled only 0.3 % of the time, proving the design scales with traffic spikes.

**Learnings & Bar‑raiser cues**  
- **Ownership:** I owned the end‑to‑end feature from requirement gathering to production roll‑out.  
- **Dive Deep:** I profiled cold starts and read/write latencies; chose DynamoDB over RDS for lower cost at scale.  
- **Quantified Impact:** Metrics were tied to customer support KPI and API latency.  
- **Failure Insight:** Initial rollout hit a 500 error on malformed JSON; we added defensive checks in the wrapper—now zero production incidents.

**Leadership Principles referenced:** *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
