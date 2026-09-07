---
qid: vq_fb71f884f8__aws__local
question: Types of Prompt Engineering ?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 548
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:23:50-05:00'
sources: []
---

**Prompt‑Engineering Playbook – How I Built a Production AI Service**

*Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**  
*Result:* 30 % lift in user satisfaction and 25 % reduction in latency for our chatbot.

---

### Situation
Our internal customer‑support bot was misinterpreting user intent, causing a spike in escalations. I owned the turnaround.

### Task
Design a prompt‑engineering framework that could be deployed at scale on AWS, improve accuracy, and stay cost‑effective.

### Action

| Prompt Type | What it Does | AWS Service(s) Used | Why It Works |
|-------------|--------------|---------------------|---------------|
| **Template prompts** | Fixed skeleton with placeholders (e.g., “What is the status of order {order_id}?”). | Amazon SageMaker endpoints, Parameter Store for template storage. | Guarantees consistency; easy to audit. |
| **Few‑shot prompts** | Include 2–3 labeled examples in the prompt. | SageMaker RealTime inference + Lambda to inject examples at runtime. | Improves context understanding without retraining. |
| **Chain‑of‑Thought (CoT)** | Explicit reasoning steps embedded (“First, check inventory… Then …”). | Bedrock (Claude/PaLM) with custom prompts; Step Functions orchestrate sub‑calls. | Lowers hallucination; each step can be cached in ElastiCache for 10 ms latency. |
| **Dynamic prompt tuning** | Use real‑time metrics to adjust temperature and token limits via a Lambda scheduler. | CloudWatch, DynamoDB for config drift tracking. | Keeps cost down (≤$0.002 per 1k tokens) while maintaining quality. |

I automated the pipeline: every new intent triggers a CodePipeline that updates the template repo in S3, pushes to SageMaker, and validates against a test suite. We saw **30 %** fewer escalations within two weeks.

### Result
- Accuracy ↑ 25 % (BLEU score 0.72 → 0.91).  
- Latency dropped from 650 ms to 410 ms per request.  
- Monthly inference cost cut by 18 % through dynamic prompt tuning.

**Takeaway:** By owning the end‑to‑end flow, diving deep into token economics, and iterating on prompt types, I delivered measurable customer impact while keeping infrastructure lean and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
