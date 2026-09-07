---
qid: ing_96ca1bd8b7__aws__local
question: 'Explain: F1: Browser DOM mutation breaks the workflow'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 417
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:57-05:00'
sources: []
---

**Situation**  
While launching our real‑time analytics dashboard for the e‑commerce platform, a browser extension injected a script that mutated the `<div id="chart">` element. The mutation removed the `data-uuid` attribute our JavaScript used to bind chart events, causing the entire rendering pipeline to fail and 3 % of users (≈ 15k sessions/day) reported “page not loading.”  

**Task**  
Restore workflow continuity without sacrificing performance or security, while preserving customer experience.  

**Action**  
1. **Root‑cause dive** – instrumented the client with a MutationObserver that logs changes to S3 (`analytics-mutations/`).  
2. **Guardrail** – added a Content Security Policy (CSP) header via CloudFront’s *Lambda@Edge* function to block third‑party scripts from modifying critical DOM nodes.  
3. **Resilience layer** – wrapped the chart initialization in a retry loop backed by an exponential backoff; if mutation detected, the script re‑injects the missing attribute and triggers a lightweight re‑render.  
4. **Observability** – sent metrics to CloudWatch (`ChartRenderFailures`) and set an alarm that auto‑scales the API Gateway endpoint for heavy traffic bursts.

**Result**  
Within 24 h, failures dropped from 3 % to <0.1 %, restoring ~99.9 % of user sessions. The CSP implementation added only a 2 ms overhead per request and reduced malicious script execution by 98 %. Learned that proactive mutation monitoring combined with edge‑level security yields rapid, measurable impact—an embodiment of *Customer Obsession* and *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
