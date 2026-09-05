---
qid: ing_e93cfde683__star__local
question: 'Explain: 📄 License — Ai System Design Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:36-05:00'
sources: []
---

**Situation:**  
At my previous company we were building an autonomous inspection drone that used computer‑vision models trained on a proprietary dataset of industrial parts. Our legal team flagged a risk: the model’s training data included images licensed under a Creative Commons Attribution‑NonCommercial (CC BY-NC) license, and our product was intended for commercial use.

**Task:**  
I needed to redesign the system architecture so that we complied with all licensing terms while keeping the drone functional and cost‑effective. The goal was to avoid potential IP litigation and ensure we could ship the product within the 6‑month release window.

**Action:**  
First, I mapped every data source in our pipeline and annotated its license metadata. Then I replaced the CC BY-NC dataset with a fully licensed open‑source alternative (Open Images v7) that allowed commercial use. To keep model performance, I used transfer learning: fine‑tuned a pre‑trained ResNet‑50 on the new dataset, then performed knowledge distillation to compress the network for onboard inference. I also added an automated license‑audit script in our CI pipeline to flag any future additions that violated terms.

**Result:**  
The updated model maintained 94 % of its original accuracy while reducing inference latency by 30 %. We cleared all legal hurdles, launched on schedule, and received a $2M contract from a major OEM. I learned the importance of embedding license compliance into data engineering pipelines early in product design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
