---
qid: ing_1d66eca457__aws__local
question: 'Explain: Jailbreak-Aware Output Filtering — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 509
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:54-05:00'
sources: []
---

**Situation & Task**  
I was tasked to protect a SaaS chatbot used by 3 M global customers from *prompt injection* that could cause the model to output disallowed content (e.g., phishing or hate speech). The goal: build a zero‑downtime, cost‑effective defense that scales to 10k requests/sec.

**Action**  
1. **Architected a two‑tier filter**  
   - **Layer 1 – Token‑Level Sanitizer** in Lambda@Edge (Python) for every request: regex + Bloom‑filter checks against a curated “dangerous token” list (≈ 5 K patterns).  
   - **Layer 2 – AI‑Driven Jailbreak Detector** using Amazon SageMaker RealTime endpoint hosting a lightweight transformer that scores prompts on a 0–1 jailbreak likelihood. Threshold set at 0.85; > threshold triggers automatic request rejection.  

2. **Integrated with API Gateway + Cognito** for authentication, and CloudWatch Metrics to log *rejection rate* (goal < 0.01 %).  
3. Implemented **Circuit Breaker** in Lambda to fall back to Layer 1 if SageMaker latency > 120 ms, guaranteeing 99.9 % availability.  

4. Trained the detector on a synthetic dataset of 200k injected prompts; achieved **F1 = 0.94**, reducing false positives by 40 % compared with regex alone.

**Result**  
- Rejection rate dropped from 2.3 % to < 0.01 %, eliminating 99.7 % of malicious outputs.  
- Cost per request fell from $0.00012 to $0.00007 (≈ 42 % savings).  
- Latency increased by only 8 ms on average, keeping SLA > 99.9 %.  

**Learnings**  
Ownership: I owned the end‑to‑end flow and rolled out a monitoring dashboard for continuous improvement. Dive Deep: I dissected false positives to refine token lists, improving precision. Bias for Action: Deployed the solution in 3 days using serverless components. The bar‑raiser will note that this solution balances security, cost, and performance while iterating on real data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
