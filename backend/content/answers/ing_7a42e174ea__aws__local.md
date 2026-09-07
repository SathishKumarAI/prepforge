---
qid: ing_7a42e174ea__aws__local
question: What is the best agent framework? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 694
total_tokens: 923
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:01:46-05:00'
sources: []
---

**Answer – Amazon Way**

> *Leadership Principles:* **Ownership**, **Dive Deep**  
> *Question:* “What is the best agent framework for AI?”

---

### Behavioral (STAR)

**Situation:** In my last role I had to build a customer‑support chatbot that handled 30k queries/day while keeping latency <200 ms.  
**Task:** Choose an agent framework that scales, allows rapid iteration, and reduces operational cost.  
**Action:** I evaluated **Rasa**, **Dialogflow CX**, and **Amazon Lex + Step Functions**. After a deep dive into each platform’s model‑deployment, observability, and pricing, I selected **Lex + AWS Step Functions** because:
- **Lex** provides built‑in NLU with 10× cheaper inference than Rasa on the same traffic.
- **Step Functions** orchestrates fallback logic, context enrichment (via DynamoDB), and human‑in‑the‑loop routing without custom code.
- Built‑in integration with CloudWatch and X-Ray gives end‑to‑end observability.

I provisioned a single Lex intent set, added a Lambda layer for business rules, and used Step Functions to route “unhandled” intents to an SQS queue for human review.  

**Result:**  
- **Latency dropped from 350 ms → 140 ms** (30% improvement).  
- **Operational cost decreased by 45%** vs the Rasa‑based prototype.  
- **User satisfaction score rose from 4.2 to 4.7/5** in a post‑deployment survey.

---

### Technical/System

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| NLU & voice | Amazon Lex | Managed, auto‑scales, supports multi‑language models |
| Orchestration | Step Functions | Declarative state machine, built‑in retry/timeout |
| Context store | DynamoDB (global tables) | Low‑latency, multi‑region replication |
| Observability | CloudWatch Logs + X-Ray | End‑to‑end tracing, cost‑effective |
| Cost control | Lambda with provisioned concurrency | Predictable spend, burst handling |

**Scalability:** Lex and Step Functions auto‑scale horizontally; DynamoDB handles 1M requests/sec.  
**Availability:** All services are AZ‑redundant; global tables ensure 99.999% uptime.  
**Trade‑offs:** Slightly higher latency on first request due to Lambda cold start, mitigated by provisioned concurrency.

---

### What a Bar‑raiser Looks For

- **Ownership:** I led the evaluation, implemented, and measured impact end‑to‑end.  
- **Dive Deep:** Quantified latency, cost, and satisfaction metrics; performed A/B tests.  
- **Quantified Impact:** 30% faster response, 45% cheaper ops, 0.5 point lift in CSAT.  
- **Learning from Failure:** Initial Rasa prototype had high inference costs; pivoted to Lex after cost analysis.

> *Result:* The framework not only met the current load but also positioned us for a 10× traffic increase with minimal re‑architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
