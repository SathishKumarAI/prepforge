---
qid: ing_105d8bfed1__aws__local
question: 'Explain: 🧭 Prompt Engineering & Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 493
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:11-05:00'
sources: []
---

**Prompt & Context Engineering – A Customer‑Obsessed Approach**

**Situation (S)**  
At my previous firm we launched an internal chatbot that answered engineering queries. Users complained the bot returned generic responses and ignored subtle context (“I’m working on a 3 GHz ARM core, not a desktop PC”).  

**Task (T)**  
Redesign the prompt‑engineering pipeline so the model could adapt to user intent and maintain a consistent knowledge base without retraining from scratch.

**Action (A)**  
1. **Prompt Layering (Ownership + Dive Deep)** – Built a two‑tier system:  
   * *Context cache* in DynamoDB stores recent conversation tokens and domain tags (CPU, OS).  
   * *Dynamic prompt builder* stitches the user’s question with the cached context, adding an “intent hint” field.  
2. **AWS Services** – Lambda for on‑demand prompt assembly, SageMaker Endpoint for inference, and Step Functions to orchestrate retries if latency > 200 ms.  
3. **Cost & Scalability** – Caching reduces token count by ~35%, cutting per‑request cost from $0.0025 to $0.0016. Lambda concurrency throttles prevent over‑provisioning; autoscaling keeps 99.9% availability.

**Result (R)**  
Within two weeks of deployment, user satisfaction rose from **68 % to 92 %**, and the average answer latency dropped from **1.2 s to 0.4 s**. The system handled a 3× spike during quarterly releases without any manual intervention.

---

### What a Bar‑Raiser Looks For  
- **Ownership:** I took end‑to‑end responsibility for the prompt pipeline, not just model tuning.  
- **Dive Deep:** Leveraged DynamoDB metrics to quantify token savings and Lambda logs to fine‑tune latency thresholds.  
- **Quantified Impact:** 24 % cost reduction + 30 % latency improvement = $12k saved annually at scale.  
- **Learning from Failure:** Early prototype mis‑identified context; I instituted an A/B test loop that caught the issue before production, turning a potential failure into an iterative learning cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
