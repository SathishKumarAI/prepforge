---
qid: ing_12f5c4186e__aws__local
question: How to disable a specific auto-configuration class?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 539
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:25-05:00'
sources: []
---

**Situation (S)**  
At my last role I was building a multi‑tenant SaaS on **AWS Elastic Beanstalk** that used Spring Boot to expose a machine‑learning inference API. One of the auto‑configurations – `DataSourceAutoConfiguration` – was pulling in an unused Hikari pool and consuming 2 GB of memory per instance, pushing our 30‑minute deployment window over budget.

**Task (T)**  
I needed to disable that specific auto‑configuration without touching the global `application.yml`, keeping the rest of Spring’s convention‑over‑configuration intact.

**Action (A)**  
1. **Use the built‑in exclusion list** – add `spring.autoconfigure.exclude=com.zaxxer.hikari.HikariDataSource` in `bootstrap.properties`.  
2. Wrap the property in **AWS Systems Manager Parameter Store** (`/app/prod/autoconfig/exclude`) so each environment can override it without code changes.  
3. Deploy via CodePipeline, ensuring the parameter is injected into the Elastic Beanstalk environment variables during build.

This keeps the app lightweight (memory drop from 2 GB to 0.5 GB per instance) and eliminates a costly warm‑up spike, cutting our EC2 spend by **18 %** for the month.

**Result (R)**  
- Deployment time reduced from 30 min to 12 min.  
- Cost savings of $4,800/quarter on RDS‑proxy usage.  
- The solution was fully automated and passed QA in under 3 hours.

---

### AWS Services Used
| Service | Why |
|---------|-----|
| **Elastic Beanstalk** | Managed PaaS for Spring Boot |
| **SSM Parameter Store** | Secure, versioned config injection |
| **CodePipeline / CodeBuild** | CI/CD with environment‑specific overrides |

---

> **Bar‑raiser notes:**  
> *Ownership* – I owned the end‑to‑end change from detection to deployment.  
> *Dive Deep* – quantified memory impact and cost trade‑offs.  
> *Quantified Impact* – 18 % cost reduction, 12 min faster deploys.  
> *Learning from Failure* – realized auto‑config can be a hidden cost driver; now we audit each auto‑config in every project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
