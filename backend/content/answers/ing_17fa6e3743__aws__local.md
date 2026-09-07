---
qid: ing_17fa6e3743__aws__local
question: 'Explain: Sustainability — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 410
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:19:46-05:00'
sources: []
---

**Situation & Task (S)**  
In 2023 I led a cross‑functional team at IBM to build an ML platform that scores product designs for environmental impact—“Sustainability – Think Topics.” The goal was to cut the company’s carbon footprint by 20 % within one year while keeping the model’s accuracy above 92 %.  

**Action (A)**  
1. **Ownership & Bias for Action:** I drafted a data‑collection pipeline that ingested CAD files, material specs, and supply‑chain emissions from SAP, storing them in an encrypted S3 bucket.  
2. **Dive Deep & Invent & Simplify:** Using SageMaker, I trained a Graph Neural Network (GNN) on 150 k labeled designs, deploying it via SageMaker Endpoint with Auto Scaling for low latency (<200 ms).  
3. **Customer Obsession & Deliver Results:** Integrated the endpoint into the internal PLM UI so designers received real‑time sustainability scores during the sketch phase.  

**Result (R)**  
- Carbon‑emission predictions improved by 4 % over baseline, enabling a 12 % reduction in material waste across three product lines.  
- The platform handled 5 k requests/day with 99.9 % availability and cost < $0.10 per inference.  

**Bar‑raiser cues:**  
- Demonstrated end‑to‑end ownership (data ingestion → model training → deployment).  
- Quantified impact on emissions and cost.  
- Showed trade‑offs: chose SageMaker for rapid iteration versus building custom inference, balancing speed vs. operational overhead.  
- Learned from a failed initial model that mis‑estimated composite materials; pivoted to include material‑specific embeddings, improving accuracy by 3 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
