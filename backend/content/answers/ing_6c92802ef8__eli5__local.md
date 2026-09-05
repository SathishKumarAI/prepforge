---
qid: ing_6c92802ef8__eli5__local
question: 'Explain: Example: 10.0.0.0/20 — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 291
total_tokens: 459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:27:40-05:00'
sources: []
---

Think of an IP address like a street address and the **/20** as a neighborhood map that tells you which houses belong to one block.

*IP address*: the full “house number” (e.g., 10.0.0.0).  
*Subnet mask /20*: the rule that says “the first 20 bits are fixed; the rest can change.”  

With **/20**, the first 20 bits (10.0.x.x) stay constant, so all computers whose addresses start with 10.0.0–10.0.15 are in the same subnet. That gives you 2¹² = 4096 possible host addresses (from 10.0.0.1 to 10.0.15.254).  

In a system design, this is like carving out a single neighborhood from a city grid so that all devices inside can talk freely while remaining isolated from other neighborhoods. The “block” size (2¹²) lets you plan how many machines or services fit without overlap—just as you’d decide how many houses fit in a real block before building.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
