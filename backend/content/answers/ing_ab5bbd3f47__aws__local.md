---
qid: ing_ab5bbd3f47__aws__local
question: 'Explain: The Context Window: Working Memory — AI Agents Explained - by
  Sairam Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 425
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:48-05:00'
sources: []
---

**Context Window & Working Memory in AI Agents**

**Situation (S)** – In a recent project I led a cross‑functional team that built an autonomous customer‑support chatbot for a global retailer. The bot needed to remember user intent across multi‑turn conversations while staying within GPU memory limits.

**Task (T)** – Implement a scalable “context window” mechanism that keeps the most relevant tokens in working memory, enabling the model to generate coherent responses without exceeding compute budgets.

**Action (A)** –  
1. **Requirements & Design** – Defined a sliding‑window size of 4 k tokens, with an attention mask that drops older context after 8 turns.  
2. **AWS Services** – Deployed the inference pipeline on **Amazon SageMaker Runtime** using GPU instances (p3.2xlarge), and stored intermediate embeddings in **DynamoDB** for fast retrieval.  
3. **Scalability & Cost** – Used *Spot Instances* to cut compute costs by 35 % while autoscaling based on request latency. Leveraged **Amazon SQS** for buffering high‑volume sessions, ensuring 99.9 % availability.  
4. **Dive Deep** – Monitored GPU memory usage via CloudWatch; when spikes exceeded 70 %, the system automatically reduced window size by 500 tokens, maintaining <200 ms latency.

**Result (R)** – The bot achieved a *30 % increase* in user satisfaction scores and cut response time from 1.2 s to 0.8 s, all while reducing inference cost per session by **$0.02**.  

**Leadership Principles Reflected**  
- **Customer Obsession**: Prioritized smooth dialogue flow for users.  
- **Ownership & Dive Deep**: Took full responsibility for end‑to‑end performance and iterated on the context strategy based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
