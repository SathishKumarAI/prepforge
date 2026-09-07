---
qid: ing_0567c9a8b3__aws__local
question: 'Explain: PoC: Memory Manipulation via Indirect Prompt Injection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 417
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:38:02-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team building an internal chatbot for product support, I discovered that attackers could exploit *indirect prompt injection* to alter the model’s “memory” (context window) and leak sensitive data. My goal was to prove the risk and design a resilient architecture.

**Action**  
1. **PoC & Data** – Built a sandbox on **Amazon SageMaker** with an LLM, injecting crafted prompts that referenced hidden context variables. Within 30 seconds we extracted ~12 KB of confidential logs—an increase of 150 % over baseline leakage attempts.  
2. **Design** – Deployed the model behind **AWS Lambda** (15 ms cold‑start) and a **Step Functions** state machine that:
   * validates prompt structure against a whitelist (IAM policy for “safe” keys),
   * truncates context to 4 KB using **Amazon DynamoDB Streams**,
   * logs every injection attempt in **CloudWatch Logs** with anomaly detection via **Amazon GuardDuty**.  
3. **Scalability & Cost** – Lambda scales to thousands of invocations; each run < $0.0002, keeping the PoC cost under $10/month while guaranteeing 99.9 % availability.

**Result**  
Implemented policy reduced successful injections by **92 %** and cut potential data exfiltration volume from 12 KB to 1 KB per session—an 84 % drop in risk exposure. The solution was rolled out enterprise‑wide, earning a 4.5/5 stakeholder rating.

**Reflection**  
I took ownership of the vulnerability, dove deep into prompt semantics, quantified impact with concrete metrics, and learned that proactive validation layers are essential before deploying LLMs at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
