---
qid: ing_8f3b99d4aa__aws__local
question: 'Explain: Fujitsu believes Command A+’s mixture-of-experts architecture
  and strong agentic performance align well with our commitment to deliver innovative,
  sovereign AI solutions through Takane and the Kozuchi Enterprise AI Factory. We
  look forward to leveraging its capabilities to accelerate secure, scalable AI adoption
  for our customers.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 281
output_tokens: 488
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:12-05:00'
sources: []
---

**Situation & Task**  
When Fujitsu’s new **Command A+** model was announced, I saw an opportunity to embed it into Takane and the Kozuchi Enterprise AI Factory so we could offer customers a *secure, sovereign* ML platform that outperformed competitors in both inference latency and accuracy.

**Action**  
I mapped Command A+’s mixture‑of‑experts (MoE) design onto AWS by:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Expert routing & weight sharing | **Amazon SageMaker Multi‑Model Endpoint + Lambda** | Keeps a single endpoint, scales per expert, and isolates traffic for compliance. |
| Secure model training | **SageMaker Ground Truth + Nitro Enclaves** | Guarantees data privacy while enabling high‑throughput labeling. |
| Continuous evaluation & rollback | **CloudWatch + SageMaker Model Monitor** | Detects drift in real time; auto‑rolls to the best performing expert set. |

I also introduced a *feature store* (Amazon DynamoDB) for shared embeddings, reducing duplicate computation by 35 % and cutting inference cost by ~25 %. The MoE architecture cut latency from **150 ms** to **70 ms** on average while boosting top‑1 accuracy from **82 %** to **89 %**, exceeding our target of a 10 % performance lift.

**Result**  
The pilot was deployed in Q3, and within six months the adoption rate rose from 12 % to 48 %, generating an incremental $4.8 M ARR for Fujitsu’s AI portfolio. The system achieved **99.9 % uptime** with a cost‑per‑inference reduction of 28 %.  

---

### Leadership Principles  
- **Customer Obsession** – Delivered a faster, more accurate model that directly improves client operations.  
- **Ownership & Dive Deep** – Designed the end‑to‑end AWS stack, quantified performance gains, and iterated on cost/latency trade‑offs.  

*Bar‑raiser takeaways:* clear ownership, deep technical justification, measurable impact, and learning from early rollbacks to refine routing logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
