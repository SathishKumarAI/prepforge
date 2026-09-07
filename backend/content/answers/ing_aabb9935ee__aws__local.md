---
qid: ing_aabb9935ee__aws__local
question: 'Explain: Ambiguity clarification — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 452
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:31-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional squad tasked with building an *Ambiguity Clarification* feature for our AI‑powered Chatbot that converts natural language into SQL queries. The goal was to reduce user frustration and improve query accuracy from 68 % to >90 %.

**Action**  
- **Customer Obsession & Ownership:** Conducted 12 deep‑dive interviews with power users, mapping pain points (e.g., “What’s the sales trend?” → ambiguous date ranges).  
- **Dive Deep & Bias for Action:** Designed a two‑stage pipeline:  
  1. *Intent Clarifier* – uses Amazon Comprehend Medical + custom NER to extract entities and detect ambiguity flags.  
  2. *Clarification Dialogue* – powered by Amazon Lex (slot filling) that asks follow‑up questions and feeds back into the intent model.  
- Leveraged **Amazon Athena** for on‑demand SQL execution, **S3** for raw logs, and **AWS Lambda** for orchestration. Employed **CloudWatch Metrics** to track “clarification request latency” (target <2 s) and “query success rate.”  
- Implemented a *dynamic prompt tuning* loop: every 10k clarified queries trigger a nightly retrain of the Clarifier model using SageMaker, ensuring continuous improvement.

**Result**  
Within 3 months post‑launch:  
- Query accuracy rose to **92 %**, exceeding the target.  
- Ambiguity‑related support tickets dropped by **47 %**.  
- Latency stayed under **1.8 s** for 95 % of interactions, keeping SLA intact.

**Learning & Bar‑raiser Insight**  
I documented failure cases (e.g., mis‑identified “last quarter” as a single month) and incorporated them into the next training set, demonstrating ownership and a culture of learning from mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
