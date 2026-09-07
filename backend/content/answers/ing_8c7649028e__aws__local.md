---
qid: ing_8c7649028e__aws__local
question: 'Explain: When to Fine-Tune — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 492
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:31-05:00'
sources: []
---

**Fine‑tuning Strategy & Decision Framework**

**Situation:**  
I led a data‑science team that needed to adapt an OpenAI GPT model for a SaaS product with 50 k active users, each generating ~2 queries/day. The baseline model achieved 78 % accuracy on our domain‑specific intent classification but lagged in handling rare entities (≈5 % of traffic).  

**Task:**  
Decide *when* to fine‑tune and design a cost‑effective pipeline that keeps latency <200 ms per request.

**Action:**  
1. **Data‑driven trigger** – When the error rate on a monitored metric (“entity‑miss” percentage) exceeded 3 % for >48 h, we flagged a *Fine‑tune* event.  
2. **Model choice** – Use `Amazon Bedrock` with a foundation model (e.g., `anthropic.claude-3-haiku`) and fine‑tune via the Bedrock API on 10k domain samples.  
3. **Deployment** – Wrap the fine‑tuned model in an *API Gateway* + *Lambda@Edge* to keep regional latency <200 ms; use *AWS Step Functions* for retry logic.  
4. **Cost control** – Spot instances for training (≈$0.05/hr) and autoscaling on request bursts; monitor with CloudWatch Alarms.  

**Result:**  
After 3 fine‑tune cycles, entity accuracy rose from 78 % to 92 %, reducing support tickets by 35 k/month (~$18K/yr). Latency stayed within SLA, and training costs were <15 % of the baseline model’s inference budget.

---

### Leadership Principles Anchored
- **Customer Obsession** – Rapidly improve accuracy that directly reduces user frustration.  
- **Ownership & Dive Deep** – Own end‑to‑end pipeline; dive into metrics to trigger actions.  

### Bar‑raiser Signals
- Clear ownership of metric thresholds.  
- Quantified impact (accuracy, cost, tickets).  
- Iterative learning: each fine‑tune informed the next strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
