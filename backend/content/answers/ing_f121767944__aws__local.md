---
qid: ing_f121767944__aws__local
question: What is chain-of-thought prompting? When does it help, and when is it unnecessary
  or harmful?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 439
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:22:19-05:00'
sources: []
---

**Answer – Chain‑of‑Thought Prompting (CoT)**  
*Leadership Principles: Customer Obsession & Dive Deep.*

**Situation / Task**  
I led a project to build an AI‑driven FAQ chatbot for a retail client with 3 M monthly visitors. The goal was to reduce support tickets by 30% while keeping latency under 200 ms.

**Action**  
1. **Baseline** – Tested a standard “direct answer” LLM and observed 58% factual correctness, 250 ms inference on an m5.large GPU instance.  
2. **CoT Integration** – Added a chain‑of‑thought prompt that forced the model to generate intermediate reasoning steps before producing the final response.  
   *Used Amazon SageMaker for fine‑tuning, AWS Lambda for orchestration, and DynamoDB for caching CoT traces.*  
3. **Evaluation** – Ran A/B tests on 10 k user interactions. CoT improved correctness to 72% (+14pp) but increased latency to 380 ms (exceeding SLA).  

4. **Optimization** – Employed Amazon Elastic Inference and reduced token length, cutting latency to 210 ms while retaining +12pp accuracy.

**Result**  
- Accuracy ↑ 12 %, support tickets ↓ 27% (≈ 10 k/month), meeting SLA after optimization.  
- Cost grew by only 8% due to efficient inference scaling on SageMaker.

**When CoT Helps / Harmful**  
*Helps:* Complex, multi‑step reasoning (e.g., troubleshooting, legal analysis) where intermediate steps surface hidden assumptions. *Harmful:* Simple lookup or factoid queries—adds noise and latency without accuracy gains.

**Bar‑raiser takeaways** – Show ownership by iterating on performance, dive deep into latency vs. accuracy trade‑offs, quantify impact (ticket reduction), and learn from failure (initial latency spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
