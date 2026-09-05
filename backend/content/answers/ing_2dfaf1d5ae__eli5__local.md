---
qid: ing_2dfaf1d5ae__eli5__local
question: 'Explain: On average, how many fair coin flips until you see two heads in
  a row? Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 301
total_tokens: 472
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:36-05:00'
sources: []
---

Think of walking down a hallway where each step is a coin flip: you either land on a “heads” tile or a “tails” tile. You want to keep stepping until you hit two heads tiles in a row, then you stop.

Because the coin is fair, each step has a ½ chance of being heads and ½ tails. The trick is that after any tail you’re back at square one—your “reset.” After a head, you’re one step closer to finishing, but a tail will send you back.

If you start fresh, the expected number of steps is **6**. Why? Picture this:  
- With probability ½ you get tails first and need another full “try” (average 6 more flips).  
- With probability ½ you get heads; now you’re in a new state where you only need one more head. From that point, the expected extra flips are 2 (half the time you’ll flip a tail and reset, half the time you’ll hit the second head).

Combining those possibilities gives \(6 = \frac12(6) + \frac12(1+2)\), solving to 6 flips on average. So, on average, you’ll flip the coin **six times** before seeing two heads in a row.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
