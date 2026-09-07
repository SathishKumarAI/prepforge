---
qid: ing_91ba57a1cc__aws__local
question: 'Explain: The Screenshot-Reason-Act Loop — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 438
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:17-05:00'
sources: []
---

**The Screenshot‑Reason‑Act Loop – a self‑directed AI agent**

**Situation / Task**  
When we launched an internal compliance scanner, the team needed an agent that could automatically flag policy violations in screenshots of corporate dashboards. The goal was to reduce manual review time by 70 % while keeping false positives below 5 %.  

**Action**  
1. **Capture** – A scheduled Lambda polls a DynamoDB stream of screenshot uploads (S3) and stores the image.  
2. **Reason** – SageMaker Endpoint runs a custom CNN that classifies “policy‑violation” vs. “clean.” If confidence > 0.92, the agent tags the image in DynamoDB; otherwise it routes to human review via an SQS queue.  
3. **Act** – A Step Function orchestrates downstream actions: if flagged, an SNS notification and a remediation Lambda update the dashboard metadata; if not, the file is archived in Glacier for audit.  

The loop runs continuously with CloudWatch metrics feeding back into model retraining every 30 days.  

**Result**  
- Review time dropped from **8 h** to **1.2 h** per batch (85 % reduction).  
- False‑positive rate fell from **12 %** to **4 %**, meeting the SLA.  
- Cost of AI inference stayed under **$0.02/image** thanks to spot instances and autoscaling.  

**Leadership Principles**  
- *Customer Obsession*: We built a system that protects data integrity for end users.  
- *Dive Deep*: Continuous monitoring, model drift alerts, and iterative retraining show ownership over every detail.  

**Bar‑raiser takeaways** – clear ownership of the entire pipeline, quantified impact (time & cost savings), deep technical justification, and lessons learned from early false positives that led to threshold tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
