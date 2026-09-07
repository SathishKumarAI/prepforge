---
qid: ing_fe8f161b56__aws__local
question: 'Explain: Types of Reinforcements — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 510
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:31-05:00'
sources: []
---

**Situation & Task**  
I was tasked to design a recommendation engine for an e‑commerce platform that had 3 million active users and 10 billion product interactions per month. The goal was to increase click‑through rate (CTR) by at least 5% while keeping compute costs under $200k/month.

**Action – Technical Design**  
I chose **Reinforcement Learning (RL)** because it optimizes for long‑term user engagement rather than short‑term accuracy. I implemented two RL paradigms:

| Type | What it learns | Why it fits |
|------|----------------|-------------|
| **Value‑based (Q‑learning, DQN)** | Estimates action value \(Q(s,a)\) | Handles discrete product actions; fast to train on GPU clusters. |
| **Policy‑gradient (REINFORCE, Actor‑Critic)** | Directly learns policy \(\pi(a|s)\) | Captures continuous recommendation scores and multi‑objective rewards (CTR + conversion). |

The state space was compressed with **SageMaker Feature Store**; actions were product IDs. Rewards combined CTR (+1) and purchase (+5). I deployed the policy as a **Lambda@Edge** function behind CloudFront to serve recommendations in <10 ms, ensuring 99.9% availability via **Auto Scaling Groups**.

**Result**  
Within three months:  
- CTR rose from 2.8 % to 3.1 % (+11 %)  
- Revenue per session increased by 4.7 %  
- Compute cost stayed at $185k/month (≈$0.01/req).  

**Reflection – Amazon Leadership Principles**  
*Customer Obsession*: We measured impact on real users, not just model loss.  
*Ownership*: I owned the end‑to‑end pipeline from data ingestion to inference.  
*Dive Deep*: The policy‑gradient vs value‑based trade‑off was tuned by ablation studies (10 % improvement).  

**Bar‑raiser take‑away** – I demonstrate ownership, deep technical reasoning, quantified impact, and a learning loop: after initial 7 % CTR lift, we iterated on reward shaping to avoid “reward hacking” that had caused spike‑in purchases but low satisfaction. This cycle shows continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
