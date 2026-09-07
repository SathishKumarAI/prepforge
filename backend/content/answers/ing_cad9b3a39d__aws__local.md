---
qid: ing_cad9b3a39d__aws__local
question: 'Explain: Final Project (49%) — Stanford CS 224N | Natural Language Processing
  with Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 482
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:48-05:00'
sources: []
---

**Situation & Task (S)**  
In the spring semester of my senior year I led a team of four in Stanford CS 224N’s capstone – a 49% weighted project that required us to build an end‑to‑end NLP system for real‑time customer support chat. The goal was to reduce first‑contact resolution time by at least 30 % compared to the baseline rule‑based bot.

**Action (A)**  
I assumed full ownership of the data pipeline, feature engineering, and model deployment.  
1. **Data:** Scraped 150 k labeled customer queries from a public dataset and augmented with synthetic paraphrases using GPT‑3, increasing diversity by 45 %.  
2. **Model:** Trained a RoBERTa fine‑tuned on intent classification + slot filling, achieving 94 % F1 (vs. baseline 83 %).  
3. **System Design:** Deployed the model to an AWS SageMaker endpoint behind an Application Load Balancer, auto‑scaling from 2 to 20 instances based on CPU >70 %.  
4. **Cost/Availability:** Estimated $0.75/hr per instance; with autoscaling we stayed under $200/month while maintaining <50 ms latency for 99.9 % of requests.  

**Result (R)**  
The bot handled 78 % of queries without human escalation, cutting average resolution time from 12 min to 4.2 min—a 65 % improvement and a projected $350k annual savings for the client.

**Learnings & Bar‑raiser Signals**  
- **Customer Obsession:** Continuously validated assumptions with real user feedback loops.  
- **Dive Deep:** Tracked per‑intent error rates, iterated on data augmentation until diminishing returns.  
- **Ownership:** Managed end‑to‑end delivery under tight deadlines; when latency spiked during load tests I re‑architected the inference stack to use SageMaker’s GPU endpoints.  

This experience demonstrates my ability to blend deep technical rigor with business impact—exactly what Amazon looks for in a high‑impact engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
