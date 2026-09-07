---
qid: ing_5399aeb6d5__aws__local
question: 'Explain: Functional Requirements — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 406
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:47-05:00'
sources: []
---

**Functional Requirements – Conversational Agent**

**Situation / Task:**  
When I led the design of a virtual customer‑support agent for a fintech client, we needed to capture intent, handle multi‑turn dialogues, and route tickets to human agents only when escalation was required.

**Action (Design & Tech):**  
I scoped the functional requirements into three pillars:  
1. **Intent Recognition** – Amazon Lex + custom NLU model fine‑tuned on 12 k labeled utterances; confidence threshold 0.85 ensures high precision.  
2. **Context Management** – DynamoDB Streams + Lambda to persist conversation state per user, enabling seamless handoff across devices (mobile → web).  
3. **Escalation Workflow** – Step Functions orchestrate routing: if intent is “issue escalation” or confidence < 0.6, the ticket lands in an SQS queue fed into a human‑in‑the‑loop dashboard (AWS Connect).

I applied **Ownership** by drafting the full backlog, leading sprint planning, and conducting a risk review that highlighted cost spikes from high Lambda invocations; we mitigated this with provisioned concurrency.

**Result:**  
Within 3 months post‑launch, the agent handled 70 % of tickets without human touch, reducing average resolution time from 12 min to 4 min—an **80 % SLA improvement**. Costs were kept under $1k/month versus an estimated $2.5k for a legacy rule‑based bot.

**Reflection (Bar‑raiser focus):**  
I documented failure points (e.g., misclassifications on rare intents) and introduced continuous A/B testing, which raised accuracy from 84 % to 92 %. This iterative loop exemplifies **Dive Deep** and showcases measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
