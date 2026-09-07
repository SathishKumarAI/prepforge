---
qid: ing_a0211f4123__aws__local
question: 'Explain: Cost estimate (rough token math) — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 460
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:52-05:00'
sources: []
---

**Situation** – I was asked to build a *Meeting Assistant* that transcribes audio, extracts key decisions and action items, and stores the notes in an analytics‑ready format for a SaaS client with ~10 000 weekly meetings.

**Task** – Deliver a cost‑effective, scalable prototype on AWS while meeting 5‑minute turnaround per meeting.  
**Action** – I broke the workflow into three stages:

| Stage | AWS Service | Token math & cost |
|-------|-------------|-------------------|
| **Transcription** | Amazon Transcribe (batch) | 30 s audio ≈ ≈ 1 000 tokens → $0.01 per meeting |
| **Text processing** | Amazon Bedrock (Claude‑3.5) + Lambda | 1 k tokens prompt, 2 k response → 3 k tokens @ $0.02 = $0.06 |
| **Storage & search** | S3 + OpenSearch Service | ~10 KB per note; S3 $0.023/GB/mo (≈$0.00023/meeting) |

Total ≈ $0.07 per meeting → ~$2,400/month for 10 k meetings.  
I added a DynamoDB cache to avoid duplicate processing and used **Serverless** (Lambda, API Gateway) to keep idle costs near zero.

**Result** – The prototype processed each meeting in <4 min with <1% error rate on action‑item extraction, cutting manual note‑taking time by 70%. Monthly cost stayed within the $3k budget.  

> **Leadership Principles:** *Ownership* (I assumed full responsibility for design & budgeting), *Dive Deep* (token‑level cost modeling), and *Deliver Results* (quantified savings).  
> **Bar‑raiser notes:** I demonstrated ownership by iterating on token usage, quantified impact with clear numbers, and learned from a failed initial estimate that over‑provisioned GPU instances were unnecessary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
