---
qid: ing_f7b5866513__aws__local
question: 'Explain: Agent Without Memory — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 456
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:43-05:00'
sources: []
---

**Situation – Problem**

In a recent product launch we built a conversational AI that answered customer FAQs in real time. The team shipped it quickly (Bias for Action) but discovered after 10 days that users were repeatedly asking the same question and receiving contradictory answers, leading to a 27% drop in NPS.

**Task – What I did**

I was tasked with diagnosing why the agent “forgot” context between turns and redesigning it so that each session could remember prior user intent without sacrificing latency or cost.

**Action – Technical & Design**

1. **Persist state per session** – I introduced a lightweight DynamoDB table (`AgentSession`) keyed by `sessionId`.  
2. **Event‑driven workflow** – Each utterance triggers an AWS Lambda that writes the new intent to DynamoDB and reads back the full context.  
3. **Stateful orchestration** – A Step Functions state machine stitches together the dialogue flow, ensuring at most 1 ms extra latency per turn.  
4. **Cost control** – Using DynamoDB’s on‑demand mode keeps us under $0.25k/month for 50k active sessions/day.  
5. **Observability** – CloudWatch metrics track “memory hit rate” (target ≥95%) and “contradiction count”.

I also added a training loop that feeds back mis‑matched intents into the ML pipeline, closing the loop quickly.

**Result – Impact**

- NPS rebounded from 62 to 78 in two weeks.  
- Session‑completion time dropped by 18% because users no longer had to repeat themselves.  
- Cost increased by only 3%, well within budget.  

**Learnings (Bar‑raiser focus)**

I took full ownership, dove deep into Lambda cold starts and DynamoDB read/write latencies, quantified the NPS swing, and iterated on failure feedback—demonstrating Amazon’s Ownership, Dive Deep, and Deliver Results principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
