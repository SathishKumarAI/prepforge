---
qid: ing_ad6ff62cef__faang__local
question: What is IaC? — How do we manage configurations in a system?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 507
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:26:42-05:00'
sources: []
---

**Clarify**  
> *What is IaC and how does it help us keep system configurations consistent and reproducible?*  
Assumptions:  
- The team needs repeatable environments (dev, staging, prod).  
- We’re using cloud‑native services (AWS/Azure/GCP).  
- Configuration drift is a pain point.

**Approach**  
1. Define IaC as “Infrastructure as Code”: declarative scripts that describe desired state.  
2. Show typical tools: Terraform, CloudFormation, Pulumi, Ansible.  
3. Explain the workflow: write code → version‑control → CI pipeline → apply → verify.  

**Depth**  
IaC treats infrastructure (VMs, networks, databases) like software artifacts. Declarative files (`*.tf`, `*.yaml`) declare resources and dependencies; an engine reconciles the current state with the desired one. Benefits:  

- **Reproducibility** – same code yields identical environments.  
- **Versioning & rollbacks** – Git history gives audit trail.  
- **Automation** – CI/CD pipelines can spin up infra on demand.  
- **Collaboration** – multiple engineers edit the same config safely.

Typical pattern:  
```hcl
resource "aws_instance" "web" {
  ami           = var.ami_id
  instance_type = "t3.micro"
  tags          = { Name = "web-${var.env}" }
}
```
Running `terraform apply` creates/updates the instance to match the spec.

**Edge Cases**  
- **State management** – local state files can diverge; use remote backends (S3 + DynamoDB).  
- **Secrets** – avoid hard‑coding; integrate with Vault or KMS.  
- **Dependencies on external services** – order of creation matters; use `depends_on`.  
- **Partial failures** – idempotent ops mitigate drift but need robust error handling.

**Optimize & Communicate**  
*Improvements*: adopt modular, reusable modules; enforce linting (`tflint`), formatting (`terraform fmt`).  
*Communication*: illustrate with a diagram of Git → CI/CD → IaC tool → cloud provider. Emphasize that IaC turns manual ops into repeatable code, dramatically reducing configuration drift and accelerating release cycles. This aligns with FAANG’s focus on scalable, auditable infrastructure automation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
