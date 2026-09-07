---
qid: ing_e31fb7492b__aws__local
question: 'Explain: Workflow: Routing — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 468
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:52:54-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the rollout of a customer‑support AI agent for an e‑commerce platform that handled ~3 M tickets/month. The business needed a routing layer to route each ticket to the most appropriate model (e.g., intent classification, FAQ retrieval, or escalation) while keeping latency <200 ms and cost <$0.02/interaction.

**Action & Design**  
I architected a *serverless micro‑service* using **Amazon EventBridge** for event routing, **AWS Lambda** (Python 3.10) as the decision engine, and **Amazon Bedrock** (Anthropic Claude) for inference. The Lambda function pulls ticket metadata from DynamoDB, runs a lightweight classification model on SageMaker Edge to decide the target Anthropic model, then forwards the payload via EventBridge to the chosen Bedrock endpoint.

- **Scalability:** Lambda auto‑scales; each invocation is stateless and bounded to 1 GB memory.  
- **Availability:** Multi‑AZ deployment with CloudWatch Alarms for cold starts; fallback queue in SQS.  
- **Cost:** Estimated $0.015 per inference, <$5k/month for the routing layer.

I added a *feedback loop* using Amazon Kinesis Data Streams to capture model confidence and retrain nightly on misrouted tickets.

**Result**  
Within two weeks of launch, routing accuracy jumped from 68 % to **92 %**, reducing average ticket resolution time by **35 %** (from 12 min to 7.8 min). Monthly cost savings were $3k compared to a monolithic model approach.

---

### Leadership Principles  
- **Customer Obsession:** Delivered faster, more accurate support for millions of users.  
- **Ownership & Dive Deep:** Took full responsibility for end‑to‑end routing logic and iterated on failure data.

**Bar‑raiser notes** – I showcased ownership (full stack), deep technical dive (service choices, trade‑offs), quantified impact (metrics), and learning loop (feedback to retrain).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
