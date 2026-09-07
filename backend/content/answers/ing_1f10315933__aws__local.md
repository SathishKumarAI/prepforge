---
qid: ing_1f10315933__aws__local
question: 'Q: How do you choose between a "Sequence of Chains" and a "Multi-Agent
  Graph"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 412
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:33-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Situation:** I was tasked to build a recommendation engine for a global e‑commerce platform that had to process millions of user actions per day while keeping latency under 50 ms.  
> **Task:** Decide whether to model the workflow as a *Sequence of Chains* (linear pipeline) or a *Multi‑Agent Graph* (distributed, message‑passing agents).  
> **Action:**  
> - **Customer Obsession & Ownership**: I first interviewed product managers and users; they needed personalized suggestions in real time for flash sales.  
> - **Dive Deep**: I benchmarked both patterns on a 1 M‑record sample using AWS Step Functions (chains) vs. Amazon SQS + Lambda graph (agents).  
>   *Step Functions*: 2× higher cold‑start cost, single failure point, but simpler to audit.  
>   *Graph*: 10× lower latency (30 ms), elastic scaling per node, and fault isolation via SNS topics.  
> - **Bias for Action**: I chose the graph because it aligned with our scalability goal and allowed independent rollback of failed nodes.  
> - **Deliver Results**: After deployment, we saw a *35% increase* in conversion rate during flash sales and cut infrastructure cost by 18 %.  
> **Result:** The multi‑agent graph delivered lower latency, higher availability (99.95%), and better ROI—demonstrating ownership and data‑driven decision making.  

**Bar‑raiser cues I addressed:**  
- Quantified impact (conversion +35%, cost -18%).  
- Deep dive into trade‑offs (latency vs. complexity).  
- Learning: initial prototype with Step Functions failed to meet SLA, leading to the graph redesign.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
