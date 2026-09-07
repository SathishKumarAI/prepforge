---
qid: ing_70e9bd8e65__aws__local
question: 'Q27: How do you evaluate LLM outputs when there is no ground truth?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 428
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:48-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a cross‑functional team that built an LLM‑powered chatbot for customer support. The model generated responses in real time, but there was no pre‑labelled “ground truth” because the domain knowledge evolves daily.

**Task (T)**  
I had to create a systematic way to evaluate output quality, ensure reliability, and drive continuous improvement while keeping latency < 200 ms and cost <$0.001 per query.

**Action (A)**  
1. **Define proxy metrics**:  
   * *Self‑consistency*: run the same prompt with different temperature settings; use Jensen–Shannon divergence to flag unstable answers.  
   * *Human‑in‑the‑loop*: deploy a lightweight “confidence score” via Amazon SageMaker’s Inference Recommender, then surface low‑score responses to a 10‑person panel for rapid feedback.  
2. **Automated monitoring**: built an AWS Lambda pipeline that ingests logs from API Gateway → CloudWatch Logs Insights → Athena queries; we aggregate the self‑consistency metric and human ratings in real time.  
3. **Continuous learning loop**: use the aggregated labels to fine‑tune the model on SageMaker Pipelines, retraining every 48 h (cost $15/day).  

**Result (R)**  
Within three months the chatbot’s customer satisfaction score rose from 78% to 92%, while query latency stayed at 180 ms and operating cost dropped by 18%. The system now flags 4.3× more ambiguous responses, allowing us to prioritize data collection for high‑impact areas.

**Leadership Principles Highlighted**  
*Customer Obsession*: Directly measured impact on CSAT.  
*Ownership & Dive Deep*: Built end‑to‑end pipeline, quantified uncertainty, and iterated on cost vs performance trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
