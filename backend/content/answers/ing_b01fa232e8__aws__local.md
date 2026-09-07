---
qid: ing_b01fa232e8__aws__local
question: 'Explain: Taxonomy of Agent Failures — Error Handling And Recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 430
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:38-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team that built an AI‑powered customer‑support chatbot, we noticed that the bot frequently stalled or returned nonsensical replies during peak traffic. My goal was to design a *taxonomy of agent failures*—a systematic way to detect, classify, and recover from errors—so that SLA remained below 2 % downtime.

**Action (Design)**  
I mapped failures into three layers:  
1. **Input‑level** (invalid intents, malformed entities).  
2. **Processing‑level** (model inference timeout, out‑of‑range confidence).  
3. **Output‑level** (policy mis‑match, external API failure).  

For each layer I defined *recovery paths* and *fallbacks*:  
- **Input** → prompt user clarification or route to human queue.  
- **Processing** → retry with a lighter model; if still failing, log for retraining.  
- **Output** → default scripted response + escalation.  

Implementation leveraged AWS services:  
- **Amazon Lex** for intent parsing, with *built‑in fallback intents*.  
- **AWS Lambda** (Node.js) orchestrating retries and routing.  
- **Amazon CloudWatch Events** to trigger alerts when retry counts exceed thresholds.  
- **DynamoDB** to persist failure logs for analytics.

**Result**  
Post‑deployment, bot uptime rose from 93 % to 99.8 %. Mean time to recovery dropped from 12 min to under 30 sec. Failure logs enabled a data‑driven retraining cycle that reduced input‑level errors by 45 % within two weeks.

**Learning & Bar‑raiser Insight**  
I owned the end‑to‑end pipeline, dove deep into failure telemetry, and quantified impact through SLA metrics—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
