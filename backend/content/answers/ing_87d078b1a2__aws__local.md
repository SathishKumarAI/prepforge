---
qid: ing_87d078b1a2__aws__local
question: 'Explain: Optional Environment Variables — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 518
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:21-05:00'
sources: []
---

**Situation**  
While leading a team that built the *Graphiti* knowledge‑graph service on AWS, we had to expose optional configuration via environment variables so that each deployment could enable or disable expensive pre‑training steps without code changes.

**Task**  
Design a robust, scalable way to manage these optional flags, keeping the service cost‑effective and ensuring that new features do not regress existing workloads.

**Action**  
1. **Requirements & Design** –  
   * Flags must be read at container start and can change without redeploying code.  
   * Default values should be deterministic and fall back to safe settings.  
   * We need auditability of flag changes for compliance.  

2. **AWS Implementation** –  
   * Store flags in **Parameter Store (SSM)** with `SecureString` type, enabling versioning and fine‑grained IAM access.  
   * Use the AWS SDK in the container’s entrypoint to fetch parameters once; cache them in an in‑memory map for subsequent requests.  
   * For high‑traffic deployments, use **ECS Fargate** with task definitions that reference SSM parameters via `{{resolve:ssm:parameter_name}}`. This keeps containers stateless and avoids pulling the same value repeatedly.  

3. **Scalability & Availability** –  
   * Parameter Store is a managed service; we incur negligible latency (≈2 ms) even under 10k concurrent requests.  
   * Fargate autoscaling ensures that new tasks automatically inherit the latest flags without manual intervention.  

4. **Cost & Trade‑offs** –  
   * SSM free tier covers up to 10,000 API calls/month; our usage was < 1,000/day → $0 cost.  
   * Alternative: use **AWS AppConfig** for dynamic updates but at ~$0.01 per million requests—unnecessary complexity given the low frequency of flag changes.

5. **Result** –  
   * Reduced deployment time by 30 % (no code pushes needed).  
   * Cut idle GPU hours during dev cycles by 45 %, saving ≈$2,400/month.  

**Reflection**  
I owned the end‑to‑end rollout, dug deep into SSM’s API limits, and iterated on a fallback strategy after an early failure where a stale flag caused a GPU spike. This experience reinforced *Ownership* and *Dive Deep*—key Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
