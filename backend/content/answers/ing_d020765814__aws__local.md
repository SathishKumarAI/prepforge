---
qid: ing_d020765814__aws__local
question: 'Explain: Training-time isolation via Kubernetes namespaces plus network
  policy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 454
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:32-05:00'
sources: []
---

**Situation / Task**  
In a multi‑tenant ML platform at my previous company, we had to guarantee that training jobs from one customer could not read or tamper with data belonging to another while still keeping costs low and scaling to thousands of concurrent jobs.

**Action**  
I designed a *training‑time isolation* layer using **Kubernetes namespaces + NetworkPolicy**:

1. **Namespace per tenant** – each job runs in its own namespace, giving us process‑level isolation and separate resource quotas (`kube-apiserver`, `resourceQuota`).  
2. **NetworkPolicy** – I defined an ingress/egress policy that only allows traffic to the training node’s internal data store (S3 via VPC endpoint) and blocks all other egress.  
3. **ServiceAccount & RBAC** – each namespace gets a dedicated ServiceAccount with minimal IAM role (`AmazonSageMakerFullAccess` + `s3:GetObject` on tenant‑specific prefixes).  
4. **Cost control** – I added a *Pod Autoscaler* that scales GPU nodes based on queue depth, and tagged all resources for cost allocation.

I validated the design by deploying it in staging: 200 tenants ran parallel training jobs with no cross‑access incidents; CPU utilization rose from 55 % to 72 %, but total spend dropped 18 % due to better node sharing.  

**Result**  
The solution achieved **zero data leaks** (0/200 audits) and improved overall platform efficiency, directly supporting the *Customer Obsession* principle by protecting customer data and *Ownership* by delivering a reusable, auditable architecture.

**Bar‑raiser takeaways**  
- Ownership: I owned the entire end‑to‑end flow from policy to cost.  
- Dive Deep: I quantified performance (CPU %, cost %) and traced failure modes in CI.  
- Learning: After an initial mis‑configured NetworkPolicy that allowed egress, we added automated policy checks with OPA, turning a risk into a hard guardrail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
