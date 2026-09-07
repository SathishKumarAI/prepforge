---
qid: ing_e6c895132e__faang__local
question: 'Explain: AI System Design Interview Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 590
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:36:10-05:00'
sources: []
---

**Clarify**  
We’re asked to describe a *design* interview bank for AI systems – i.e., a curated set of questions that probe an engineer’s ability to architect end‑to‑end ML/AI solutions.  
Key assumptions:  
- Interviewers want to evaluate both technical depth (model choice, data pipeline, infra) and non‑technical skills (scalability, ethics).  
- The bank should cover typical FAANG product contexts (recommendation, search, vision, speech).  

**Approach**  
1. **Categorize by domain** (NLP, CV, RL, generative AI, infrastructure).  
2. **Define tiers**: *Basic* (understanding of pipelines), *Intermediate* (design trade‑offs), *Advanced* (system‑level & ops).  
3. **Create archetypal scenarios** per tier that map to real product challenges.  
4. **Add edge‑case prompts** (data bias, latency spikes, regulatory constraints).  

**Depth**  
| Tier | Example Question | Core Topics |
|------|------------------|-------------|
| Basic | “Design a recommendation engine for millions of users.” | Data ingestion, feature engineering, collaborative filtering vs. neural nets, cold‑start. |
| Intermediate | “Build an online spam detection pipeline with 1 ms latency.” | Model choice (logistic regression vs. BERT), model serving (TensorRT), A/B testing, monitoring. |
| Advanced | “Scale a real‑time image captioning service to 10k QPS.” | Distributed inference (GPUs/TPUs), model compression, autoscaling, multi‑region deployment, cost budgeting. |
| Edge Cases | “How would you mitigate gender bias in a hiring chatbot?” | Fairness metrics, data audit, explainability, compliance (GDPR). |

**Edge cases**  
- **Data quality failures**: missing labels, noisy sensor input.  
- **Model drift**: concept shift over time.  
- **Infrastructure limits**: GPU contention, network bottlenecks.  
- **Regulatory shifts**: new privacy laws.  

Testing: simulate data spikes, introduce synthetic bias, run latency probes.

**Optimize & Communicate**  
- Prioritize *clarity*: start with high‑level diagram, then drill into components.  
- Use *trade‑off matrices* to justify choices (e.g., accuracy vs. inference time).  
- Show *iteration plan*: prototype → evaluate → scale.  
- Conclude with *monitoring & ops*: metrics (throughput, F1), alerting, rollback strategy.

This structured bank ensures interviewers can gauge a candidate’s holistic AI system design prowess while keeping the conversation concise and focused on real‑world FAANG challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
