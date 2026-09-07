---
qid: ing_2de17f060b__aws__local
question: 'Explain: Tree Search (MCTS) — Planning And Decomposition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 351
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:02-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to build an AI‑driven game‑bot for our internal gaming platform (≈ 50 k active users). The goal was to replace the rule‑based engine with *Monte‑Carlo Tree Search* (MCTS) so the bot could learn optimal strategies in real time while keeping latency < 200 ms.

**Action**  
- **Ownership & Bias for Action:** I scoped a serverless architecture: *AWS Lambda* for node expansion, *Amazon DynamoDB* as the tree store, and *Amazon SageMaker* to host the policy network that guides roll‑outs.  
- **Dive Deep & Invent & Simplify:** Implemented a “decomposition” layer that splits the game state into independent sub‑games (e.g., card piles), reducing branching factor by 60 %.  
- **Scalability & Availability:** Leveraged *AWS Step Functions* to orchestrate parallel roll‑outs; autoscaling Lambda concurrency kept cost < $0.05 per million calls.  
- **Deliver Results:** After 4 sprints, the bot achieved a win rate of **68%** vs. the legacy engine (32%) while maintaining sub‑200 ms inference.

**Result**  
The solution lifted platform engagement by 12 % and cut server costs by 35 %. I presented learnings at AWS re:Invent, highlighting how decomposing complex search spaces can yield both performance and cost advantages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
