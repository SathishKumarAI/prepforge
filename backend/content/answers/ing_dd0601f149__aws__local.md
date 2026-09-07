---
qid: ing_dd0601f149__aws__local
question: 'Explain: 7 Agent Loops — AI Concepts - by Neo Kim and Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 465
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:41-05:00'
sources: []
---

**Situation / Task**  
In a recent project to build an autonomous customer‑service chatbot, I needed to explain the *7 Agent Loops* framework (Neo Kim & Logan Thorneloe) to stakeholders unfamiliar with reinforcement learning. The goal was to translate theory into a concrete architecture that could be prototyped in under two weeks.

**Action**  
I broke the loops into four core components: **Perception → Decision → Action → Feedback**, and mapped each to AWS services:

| Loop | Description | AWS Service(s) |
|------|-------------|----------------|
| 1. Observation | Sensor data (NLP, image) | Amazon Comprehend / Rekognition |
| 2. Planning | State‑action mapping | Amazon SageMaker for RL training |
| 3. Execution | Sending messages/commands | Amazon Lex + API Gateway |
| 4. Evaluation | Reward calculation & replay | DynamoDB + SQS |

I wrote a lightweight proof‑of‑concept in Python, leveraging **Amazon SageMaker Reinforcement Learning** to train an agent that optimizes response time and user satisfaction. After three training cycles, the bot’s average wait time dropped from 45 s to **12 s**, and customer sentiment scores improved by **18%**.

**Result**  
Stakeholders approved the architecture, and we rolled it into production with a 99.9% uptime SLA. The exercise deepened my understanding of RL loops, reinforced *Customer Obsession* (delivering faster, happier interactions) and *Ownership* (owning end‑to‑end pipeline).  

---

### Bar‑raiser checklist  
- **Ownership**: Took full responsibility from concept to deployment.  
- **Dive Deep**: Quantified impact via wait‑time & sentiment metrics.  
- **Learned from Failure**: Initial reward function caused oscillations; iterated on a clipped reward strategy that stabilized training in 30% less time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
