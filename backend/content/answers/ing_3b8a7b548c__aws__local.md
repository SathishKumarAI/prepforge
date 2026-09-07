---
qid: ing_3b8a7b548c__aws__local
question: 'Explain: Clarifying questions & assumptions — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 466
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:53-05:00'
sources: []
---

**Situation / Task**  
At my previous firm I led the launch of a *Text‑to‑SQL* agent that turned natural‑language questions into database queries for our analytics portal. The goal was to reduce support tickets by 30 % and cut query turnaround time from ~10 s to <1 s.

**Action – Clarifying Questions & Assumptions**  
- **Customer Obsession**: I interviewed 12 data analysts to surface pain points—“We spend hours re‑writing joins.”  
- **Dive Deep**: I scoped the problem by mapping user intent against our schema; identified that 78 % of queries involved simple `SELECT` with optional filters.  
- **Bias for Action**: Drafted a minimal viable model using AWS Bedrock (LLM) + Amazon Athena, and prototyped an endpoint on API Gateway.

**Design & Technical Choices**  
| Component | Service | Rationale |
|-----------|---------|-----------|
| LLM inference | Bedrock (Claude 2) | Low‑latency, pay‑per‑token; no self‑hosting overhead |
| Query execution | Athena + Glue catalog | Serverless, scales to petabytes, reduces ops |
| Orchestration | Step Functions | Guarantees idempotent retries, visibility |
| Cost control | Athena query cost monitoring + Lambda throttling | Keeps spend < $0.02/query |

**Result**  
- **Performance**: 95 % of generated queries executed in <750 ms (vs 9 s baseline).  
- **Adoption**: Analysts used the tool 4× more than our legacy wizard, slashing support tickets by **32 %** in Q2.  
- **Cost**: $1.5k/month vs projected $3.8k for manual effort.

**Bar‑raiser Takeaway**  
I owned the entire feature cycle, dug into data to shape assumptions, and quantified impact with real metrics—all while learning from a failed LLM version that mis‑parsed `WHERE` clauses (fixed by adding a custom post‑processing step).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
