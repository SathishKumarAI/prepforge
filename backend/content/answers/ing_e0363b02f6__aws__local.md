---
qid: ing_e0363b02f6__aws__local
question: Where is the line between the model provider's safety responsibility and
  the application developer's? Whose job is each control?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 410
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:35-05:00'
sources: []
---

**Situation & Task (Leadership Principles: Customer Obsession, Ownership)**  
At a startup building an AI‑powered health chatbot, we had to decide who owns safety controls—our model vendor or us. The risk of misdiagnosis could cost lives and regulatory fines.

**Action (Dive Deep, Bias for Action, Deliver Results)**  
I mapped the control chain:  
| Control | Owner | AWS Service | Impact |
|---------|-------|-------------|--------|
| Data curation & labeling | **Developer** | S3 + SageMaker Ground Truth | 95 % reduction in label noise |
| Model training & validation | **Model Provider** | SageMaker Training | 98 % accuracy on hold‑out set |
| Post‑deployment monitoring | **Developer** | CloudWatch, Evidently | Detect drift within 2 hrs (99.9 % uptime) |
| Human review loop | **Both** | Lambda + DynamoDB | 1‑hour escalation window |

We formalized a “Safety SLA” with the vendor: model must meet an F1 ≥ 0.92 on FDA‑approved datasets. Our team built automated alerts that trigger when performance drops below threshold, and we maintained a continuous compliance audit using Evidently dashboards.

**Result (Deliver Results)**  
Within 6 months, drift incidents fell from 4 per week to < 0.5, and the overall system latency stayed under 200 ms with cost savings of 18 % by auto‑scaling Lambda during low‑traffic periods.

**Bar‑raiser Takeaway**  
Ownership is clear: vendors own model integrity; developers own data quality, monitoring, and human‑in‑the‑loop. Depth in the control map, quantifiable impact, and a learning loop (SLA renegotiation) are what interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
