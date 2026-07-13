---
qid: q018
question: "What is the exploration-exploitation trade-off in reinforcement learning?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define it as the core tension in sequential decision-making: exploit the action currently believed best to earn reward now, or explore uncertain actions that might be better and improve future decisions. Pure exploitation gets stuck in local optima; pure exploration wastes reward. Strategies balance them, epsilon-greedy, decaying epsilon over time, or upper-confidence-bound and Thompson sampling that explore based on uncertainty.

To show **Customer Obsession** and **Bias for Action** I'd anchor it in a content-ranking system I owned, framed as a multi-armed bandit. Fully exploiting the top-performing items starved new content of impressions and hid better options. I used Thompson sampling to allocate a controlled share of traffic to explore, which lifted overall engagement 9% while capping the reward we risked on unproven items.

The trade-off I'd name explicitly: exploration has a real cost, we spend live customer impressions to learn, so I bounded the exploration budget and decayed it as confidence grew, protecting the customer experience while still learning. On AWS I'd run this with a bandit service backed by DynamoDB for arm statistics and Kinesis for the reward feedback stream.

A bar-raiser listens for whether I connect a textbook trade-off to a real cost, spending customer trust to gain information, and whether I bounded and measured that spend rather than exploring blindly.
