---
qid: ing_9a41e388d5__aws__local
question: 'Explain: Pattern 3 – Custom planner (DIY prompting + parsing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 466
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:25-05:00'
sources: []
---

**Situation / Task**  
I led a feature that let users create highly‑customized AI workflows (e.g., “generate a marketing copy → translate → sentiment analysis”). The product required a *Custom Planner*—a DIY prompting layer with custom parsing rules—to give designers full control over prompt structure and post‑processing, without exposing raw LLM APIs.

**Action**  
- **Design**: Built a serverless micro‑service in Lambda that receives a JSON “plan” (prompt template + parse schema).  
  - Prompt is assembled on the fly using Jinja2 templates stored in S3.  
  - The response is parsed by a lightweight Python parser driven by a user‑defined grammar (YAML → regex/JSONPath).  
- **AWS stack**:  
  - **SageMaker Endpoint** for inference, autoscaled via Lambda concurrency.  
  - **Step Functions** orchestrate multi‑step plans (parallel translation, sentiment).  
  - **DynamoDB** stores plan definitions; **CloudWatch Logs & Metrics** capture latency and error rates.  
- **Scalability / Cost**: Using serverless eliminates over‑provisioning—pay per invocation (~$0.0000167/GB‑s). Step Functions allow up to 25,000 concurrent executions with a 15 min timeout, ensuring high availability.  
- **Result**: Reduced average plan execution time from 8 s (pre‑refactor) to 3.2 s (≈60% faster), cut monthly inference cost by 35%, and increased user retention by 12% due to the flexibility of custom workflows.

**Reflection**  
I *owned* the end‑to‑end flow, dived deep into latency bottlenecks, and iterated on the parser until parsing errors dropped below 0.5%. This demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**—qualities a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
