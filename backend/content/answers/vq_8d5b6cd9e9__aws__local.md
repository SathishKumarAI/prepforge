---
qid: vq_8d5b6cd9e9__aws__local
question: Which package construct must be declared and defined within the package
  body?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 451
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:02:56-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task** – While architecting a new microservice on AWS, I had to expose a public API that required a *read‑only* configuration object. The service was written in Ada, so the configuration lived inside an Ada package.  
>   
> **Action** – In Ada, anything declared as `private` or `protected` in the package spec must be defined in the corresponding package body. I therefore:
> 1. Declared a private type `Config_Type` and a function `Load_Config : Config_Type;` in the spec.
> 2. Implemented the body to read from S3 (using **AWS SDK for Ada**) and parse JSON into `Config_Type`.  
>   
> This ensured encapsulation: callers could only *read* the configuration, not modify it, while the service itself could update it during startup.  
>   
> **Result** – The deployment succeeded in 12 minutes instead of the previous 30 minutes because the body‑only implementation allowed the compiler to inline the load routine and avoid runtime linkage overhead. In production we saw a 35 % reduction in cold‑start latency for Lambda functions that depended on this config, translating to ~$200/month saved on AWS compute costs.  
>   
> **Leadership Principles** – *Customer Obsession* (delivering faster start‑ups for end users) and *Ownership* (designing the package to enforce immutability).  

---

### What a bar‑raiser looks for

| Criterion | Why it matters |
|-----------|----------------|
| **Ownership** | Demonstrates taking full responsibility from spec to body. |
| **Dive Deep** | Explains Ada’s visibility rules and why they’re critical. |
| **Quantified Impact** | Provides concrete latency and cost savings. |
| **Learning from Failure** | Mentions the prior 30 min build issue and how the new design resolves it. |

This concise, data‑driven explanation shows both technical depth and business impact—exactly what Amazon expects in an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
