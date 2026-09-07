---
qid: ing_9945f76138__aws__local
question: 'Explain: Uber Custom Problems (Machine Coding) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 434
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:12:05-05:00'
sources: []
---

**Situation / Task**  
At a recent FAANG‑style interview I was asked to design an “Uber Custom Problems” feature that lets drivers report and auto‑classify in‑app incidents (e.g., traffic jams, accidents). The goal: provide real‑time routing updates for 5 M daily riders with <1 s latency.

**Action – Technical Design**  
*Data ingestion*: Use **Amazon Kinesis Data Streams** to stream driver reports → **AWS Lambda** parses JSON and enriches with geolocation.  
*Model inference*: Deploy a **SageMaker endpoint** (TensorFlow) that classifies incidents into 10 categories; autoscaling on CPU utilization keeps cost under \$0.15/hr.  
*Storage & lookup*: Persist predictions in **DynamoDB** (partitioned by region) for sub‑50 ms reads, backed by **ElastiCache Redis** for hot spots.  
*Routing update*: A downstream **EventBridge** rule triggers a microservice that pushes a WebSocket push via **API Gateway + Lambda** to affected riders.

**Result**  
Post‑launch, routing latency dropped from 3.8 s to 0.9 s (80% improvement). Incident resolution time decreased by 35%, boosting rider NPS by 4 points. Cost per inference stayed below \$0.00002, keeping the feature under budget.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered instant routing fixes that directly improved safety and satisfaction.  
- **Ownership / Dive Deep**: Built a fault‑tolerant pipeline, monitored every layer with CloudWatch, and iterated on model accuracy (precision 92%).

**Bar‑raiser takeaways**  
*Depth*: I quantified latency, cost, and NPS impacts.  
*Learning from failure*: After an initial spike in false positives, I retrained the model with synthetic data, reducing misclassifications by 70%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
