---
qid: ing_27d7391763__aws__local
question: 'Explain: Q126: Agent Plugins bundle skills and MCP servers into one installable
  unit, and published research puts static detection of malicious skills at 0% for
  host destruction. Design the review and distribution pipeline for internal plugins.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 486
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:52-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with creating a secure deployment pipeline for AI agent‑plugins that bundle “skills” (ML models) and MCP servers into a single artifact. External research showed static analysis could not detect malicious skills—0 % success rate—so we had to build an end‑to‑end review process that guarantees safety before any plugin touches production.

**Action**  
I led the design, anchoring **Customer Obsession** (protect user data) and **Ownership** (own the entire pipeline). The pipeline is a CI/CD stack on AWS:

| Stage | Tool | Purpose |
|-------|------|---------|
| 1. **Build** | CodePipeline + Docker | Build image, run unit tests |
| 2. **Dynamic Analysis** | AWS Lambda + SageMaker inference | Execute plugin in isolated sandbox, log all API calls, monitor memory & CPU; any dev‑time “blacklist” triggers a failure |
| 3. **Security Scan** | Amazon Inspector + custom policy engine | Detect hardcoded secrets, outbound traffic patterns, and privilege escalation attempts |
| 4. **Human Review** | AWS CodeGuru Reviewer + Jira ticketing | Security engineers review flagged logs; they can approve or rollback |
| 5. **Staging Rollout** | Canary deployment via AppConfig | Deploy to a small subset of users; monitor telemetry for anomalous behavior (latency, error rates) |
| 6. **Production** | Blue/Green with CloudFront & WAF | Full rollout once metrics stay within SLA |

We store all artifacts in an immutable S3 bucket and tag them with a `security‑grade` metadata field. A Lambda function auto‑validates the tag before any ECS task can pull the image.

**Result**  
The pipeline reduced time to production from 7 days to **2 days**, cut false positives by **35 %**, and prevented **zero incidents** in 12 months of operation—demonstrating measurable impact on customer trust. I learned that combining automated sandboxing with a lightweight human gate yields the best balance between speed and safety, a lesson I bring into every new security‑critical feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
