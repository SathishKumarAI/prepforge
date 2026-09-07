---
qid: ing_18c588cd4c__aws__local
question: 'Explain: Code Execution — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 421
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:56-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a pilot to evaluate whether an LLM could reliably execute Python snippets for automated data‑pipeline debugging. The goal was to reduce manual review time by 70 % while keeping error rates below 2 %.  

**Action – Design**  
I architected a serverless “Code Execution” microservice using **AWS Lambda + Amazon EKS (K8s) with GPU nodes** for heavy‑weight inference, and **Amazon S3** to stage user code. A **Step Functions** orchestration ran the LLM, generated candidate solutions, and then invoked a sandboxed Lambda that executed the code inside an **AWS Nitro Enclave** for isolation.  

*Scalability:* Auto‑scaling on CPU/GPU usage kept latency < 2 s per request.  
*Availability:* Multi‑AZ deployment with 99.95 % SLA; fallback to local Docker if enclave fails.  
*Cost:* Spot GPU instances and Lambda’s “pay‑per‑execution” model cut spend by ~35 % versus on‑prem VMs.  

**Result**  
We achieved a 73 % reduction in manual review time, error rates dropped to 1.4 %, and the cost per evaluation fell from $0.12 to $0.08.  

**Learning & Ownership**  
I owned the end‑to‑end pipeline, dove deep into enclave security logs to root‑cause a 5 % latency spike, and iterated on the policy to keep it below SLA thresholds. The bar‑raiser would note my clear ownership, data‑driven impact, and iterative learning loop—hallmarks of **Customer Obsession** and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
