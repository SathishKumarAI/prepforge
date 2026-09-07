---
qid: ing_53b229133f__aws__local
question: 'Explain: Where to go next — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 396
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:54-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** I was tasked with building a “Mock Interview Kit” for an internal AI training platform that would let users practice and get feedback on their answers before live sessions.  
> 
> **Task:** Deliver a fully‑functional prototype in 4 weeks, ensuring high availability, low latency, and cost‑efficiency while providing real‑time analytics on user performance.  
> 
> **Action:**  
> *Customer Obsession & Ownership* – I interviewed 30 candidates to surface pain points (e.g., lack of personalized feedback).  
> *Dive Deep* – Designed a micro‑service architecture:  
>   - **API Gateway + Lambda** for request routing and auto‑scaling.  
>   - **Amazon Polly** for TTS, **Transcribe** for ASR, and **Comprehend** for sentiment & key‑phrase extraction.  
>   - **DynamoDB** (partitioned by user ID) stores logs; **S3** holds raw audio/JSON.  
> *Bias for Action* – Built a CI/CD pipeline with CodePipeline, enabling rapid iteration.  
> *Deliver Results* – After 2 pilot batches, the system handled 5k concurrent users with <200 ms latency, and analytics showed a 15% improvement in interview readiness scores. Costs were $0.04 per user, 30% below budget.  
> 
> **Result:** The kit was adopted platform‑wide, driving a 25% increase in interview pass rates for new hires within two months.  
> 
> **Bar‑raiser takeaways:** I took full ownership, dove into the technical stack to surface cost/latency trade‑offs, quantified impact with real metrics, and iterated based on failure logs (e.g., adjusting DynamoDB read capacity after a spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
