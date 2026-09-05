---
qid: ing_06414fd213__star__local
question: Where is my data hosted and processed? — Secure legal AI for the most sensitive
  matters | Harvey
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 370
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:26-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our compliance team needed an on‑premises AI model to screen transaction alerts for AML. The data was highly regulated—customer identities and financial histories had to stay within the EU GDPR boundaries, yet we also wanted real‑time inference without cloud latency.

**Task:**  
I had to design a secure, fully auditable pipeline that kept all raw data on local servers while still leveraging powerful GPU clusters for model training and inference. The goal was to meet ISO 27001 certification and keep response times under 200 ms per request.

**Action:**  
First, I set up a dedicated Docker‑based microservice cluster inside the company’s secure data center, using NVIDIA GPUs with CUDA 12 and TensorRT for inference acceleration. For training, I employed Kubernetes on-premises with Argo Workflows to orchestrate distributed PyTorch jobs, storing intermediate checkpoints in an encrypted Ceph storage pool. All network traffic was tunneled over IPsec VPNs, and we used role‑based access control via LDAP plus a mandatory encryption key rotation policy managed by HashiCorp Vault. Finally, I integrated the model into our existing AML dashboard through a REST API wrapped with OIDC authentication, ensuring every inference request logged to an immutable audit trail in Splunk.

**Result:**  
We achieved 95 % accuracy on fraud detection while keeping data residency compliant—no customer data ever left the EU. Inference latency dropped to 180 ms, and we passed the ISO 27001 audit with no findings. I learned that combining container orchestration, GPU acceleration, and strict key management can deliver both performance and regulatory compliance in a single on‑prem solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
