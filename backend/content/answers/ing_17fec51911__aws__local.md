---
qid: ing_17fec51911__aws__local
question: 'Explain: Create specific evaluators — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 516
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:19:49-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a rapid‑prototype team for an enterprise chatbot, we realized that generic LLM output scores were masking subtle safety and bias issues. I was tasked to build *specific evaluators*—custom metrics that could be plugged into our Langfuse evaluation pipeline and visualized in LangWatch dashboards.

**Action (A)**  
1. **Requirements & Design** – Defined evaluator types: *Safety‑Score*, *Bias‑Ratio*, *Context‑Retention*. Each evaluator is a small Lambda function receiving the LLM response, context metadata, and returning a numeric score.  
2. **AWS Services** –  
   - *Amazon Bedrock* for model inference (ensuring compliance).  
   - *Lambda + Step Functions* to orchestrate parallel evaluation passes.  
   - *DynamoDB* for storing evaluator configs and results.  
   - *EventBridge* to trigger LangWatch dashboards via WebSocket.  
3. **Scalability & Cost** – Lambda concurrency capped at 500; each run <200 ms → <$0.0002 per eval. Using DynamoDB’s on‑demand capacity keeps cost flat while handling burst traffic during model rollouts.  
4. **Bias Mitigation** – Integrated *Amazon Comprehend* sentiment and entity detection to compute Bias‑Ratio automatically.

**Result (R)**  
Within 3 weeks, we deployed the evaluator suite; evaluation latency dropped from 1 s to 300 ms per response. In a post‑deployment audit of 10k messages, the Safety‑Score flagged 12% of risky outputs—down from an earlier 27% false‑positive rate, saving us ~15 hrs of manual review monthly (~$3K). The LangWatch dashboards enabled real‑time monitoring, improving stakeholder confidence and accelerating release cycles.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivering safer, more trustworthy AI for end users.  
- **Ownership & Dive Deep**: Building from the ground up, iterating on metrics until they reflected true impact.  

*Bar‑raiser note*: Look for ownership of failure points (e.g., initial high false positives), deep technical trade‑offs (Lambda vs EC2), and quantified business value.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
