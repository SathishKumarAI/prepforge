---
qid: ing_608fced131__aws__local
question: When should you NOT build an agent? — Questions
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 371
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:08-05:00'
sources: []
---

**Situation / Task**

When building a customer‑facing recommendation bot for our e‑commerce platform, I was asked whether we should create a new AI agent to handle returns instead of using the existing ticketing system.

**Action**

I first mapped the **requirement set**:

| Requirement | Why it matters |
|-------------|----------------|
| 24/7 availability | Users expect instant help |
| GDPR compliance | Personal data handling |
| Integration with order DB | Need real‑time status |
| Cost per interaction | Budget constraints |

I evaluated two options: a fully‑managed AI service (Amazon Lex + SageMaker) vs. the legacy ticketing workflow.

**Result**

- **Latency:** Lex+SageMaker could answer in <200 ms, whereas tickets had an average 1 h turnaround.
- **Cost:** Estimated $0.02 per request vs. $0.10 for manual handling (≈80% savings).
- **Accuracy:** Initial pilot hit 92 % first‑contact resolution; legacy was 65 %.
- **Compliance:** Lex automatically masks PII, reducing audit risk.

**Decision**

I concluded that *building an agent is justified* because it meets the KPIs and offers measurable ROI. The key takeaway: **do NOT build an agent when the existing system already satisfies latency, cost, compliance, and user experience goals—adding AI would only increase complexity without benefit.**

> **Leadership Principles:** *Customer Obsession* (delivering instant help), *Dive Deep* (quantifying latency & cost).  
> **Bar‑raiser focus:** ownership of trade‑offs, depth in performance metrics, learning from pilot failures (e.g., 8 % misclassifications → retrain model).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
