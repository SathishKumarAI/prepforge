---
qid: ing_0b6cff9617__star__local
question: 'Explain: What Changed in the Last 10 Months — Multi-Agents: What''s Actually
  Working | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 343
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:45-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a fleet‑management platform that used reinforcement learning to route delivery drones. Two years ago the reward model was hand‑crafted and each drone operated in isolation, leading to sub‑optimal global efficiency—our on‑time delivery rate lagged 12% behind benchmarks.

**Task:**  
My goal was to shift from single‑agent RL to a true multi‑agent system that could learn cooperative strategies, reduce interference, and improve overall throughput by at least 15% within the next six months.

**Action:**  
I started by surveying recent literature on graph‑structured policy networks and discovered the “Cognition” framework’s multi‑agent curriculum learning approach. I re‑implemented our agents using PyTorch with a shared actor–critic architecture, embedding each drone’s state into a dynamic communication graph. We trained with PPO while gradually increasing the number of agents per episode (the curriculum). To keep training tractable we introduced a sparse attention mechanism that limited message passing to drones within 500 m, cutting GPU usage by 40%. I also set up an online A/B test pipeline in SageMaker to monitor key metrics during rollout.

**Result:**  
Within five months the on‑time delivery rate rose from 78% to 90%, surpassing our target. Total energy consumption dropped 9% due to better route coordination. The experience taught me that integrating recent multi‑agent research with careful engineering—especially curriculum design and sparse communication—can deliver measurable gains in real‑world systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
