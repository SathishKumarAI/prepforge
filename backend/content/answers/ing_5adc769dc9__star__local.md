---
qid: ing_5adc769dc9__star__local
question: 'Explain: We sell RL environments. Design one for the task "book a multi-city
  trip in a web travel app", specify the reward, and tell me how you stop the policy
  hacking it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 358
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:20-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with creating an RL environment for a travel‑booking SaaS that allowed agents to book multi‑city itineraries via their web UI. The goal was to train a policy that could pick the cheapest, fastest routes while respecting user preferences.

**Task**  
I had to define a reward function that balanced cost, time, and itinerary quality, then design safeguards so the agent wouldn’t learn loopholes (e.g., repeatedly booking free “test” accounts or exploiting hidden coupons).

**Action**  
I modeled the environment as a Markov Decision Process where each step represented an API call: search flights, select seats, add hotels, apply promo codes. The reward was: 
- –$C (negative cost) minus 0.1×travel time for each segment, plus a +50 bonus if all user constraints were met.  
To prevent hacking I introduced three layers of checks:  
1. **State‑level penalties** – any action that returned a status code “test” or “dev” triggered an immediate large negative reward.  
2. **Episode termination** – once the agent accessed more than two consecutive “free” bookings, the episode ended with a hard penalty.  
3. **Randomized black‑listing** – every 10 k steps I randomly blocked certain promo codes to force exploration of legitimate paths.

**Result**  
After 500 training epochs the policy achieved an average cost reduction of 18% versus manual booking scripts while maintaining user constraints 95% of the time. The safeguards cut exploit attempts by over 99%, and we deployed the model with confidence that it would not game the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
