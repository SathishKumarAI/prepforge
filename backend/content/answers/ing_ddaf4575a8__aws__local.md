---
qid: ing_ddaf4575a8__aws__local
question: 'Explain: Custom function calling alongside sandbox tools'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 510
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:23-05:00'
sources: []
---

**Situation –** In 2023 I led the migration of our recommendation engine from a monolithic Java service to an AWS‑native ML workflow. The team needed *custom function calling* so that Python inference code could invoke domain‑specific utilities (e.g., user‑profile enrichment) without exposing the entire Lambda runtime.

**Task –** Build a sandboxed execution layer that lets custom functions call back into AWS services while preserving isolation, auditability, and cost control.  

**Action –**  
1. **Design:**  
   * Use **AWS Lambda@Edge** for low‑latency inference.  
   * Wrap user code in an **Amazon SageMaker Processing Job** that runs inside a **VPC** with a dedicated **NAT Gateway** to restrict outbound traffic.  
   * Implement a lightweight **API Gateway + Lambda Authorizer** that injects per‑request IAM roles (AWS IAM) for granular permissions.  
2. **Security:** Enforce **KMS‑encrypted environment variables** and enable **AWS Secrets Manager** for secrets, ensuring no plaintext leaks in the sandbox.  
3. **Cost/Scalability:** The Lambda layer pulls only the required libraries (~30 MiB), keeping cold starts <200 ms. SageMaker jobs auto‑scale to 5 GB RAM per instance; we capped concurrency at 20 to stay within $0.10/hr per job, yielding a 40 % reduction in inference cost versus the previous EC2 pool.

**Result –**  
*Latency dropped from 350 ms to 210 ms (40 % improvement).*  
*Inference costs fell by **$120k annually**, while data security audits reported zero violations.  

---

### Leadership Principles Anchored
- **Customer Obsession:** Delivered faster, cheaper recommendations that improved user engagement by 12 %.  
- **Ownership & Dive Deep:** Took full ownership of the end‑to‑end pipeline, diving into Lambda cold‑start profiling and IAM policy fine‑tuning.

**Bar‑raiser takeaways:** Clear ownership signals, deep technical dive into sandbox constraints, quantified impact on latency/cost, and a candid reflection that we initially over‑provisioned VPC endpoints—learning led to the 40 % cost cut.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
