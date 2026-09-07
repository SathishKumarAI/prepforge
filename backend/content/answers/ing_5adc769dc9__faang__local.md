---
qid: ing_5adc769dc9__faang__local
question: 'Explain: We sell RL environments. Design one for the task "book a multi-city
  trip in a web travel app", specify the reward, and tell me how you stop the policy
  hacking it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 445
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:41-05:00'
sources: []
---

**Clarify**  
We’re building an RL environment that trains agents to book multi‑city itineraries on a web travel platform (flights, hotels, car rentals). Key assumptions: the agent has API access to each booking service, can view current cart state, and must satisfy constraints like budget, dates, and user preferences. We’ll expose actions as high‑level “book flight from A to B on date X” etc.

**Approach**  
1. **State** – user profile (budget, preferred airlines, loyalty status), current itinerary list, remaining trip legs, time left in session.  
2. **Action space** – discretized booking options per leg (flight, hotel, car).  
3. **Reward** – composite:  
   * +1 for each successful booking that meets constraints.  
   * +0.5 for staying within budget.  
   * +0.25 if user preferences are satisfied.  
   * -10 for any invalid action (e.g., overbudget, conflicting dates).  
   * Small negative step cost to encourage brevity.  

**Depth**  
Use a DQN or PPO agent with a recurrent network to remember past bookings. The environment validates each booking via the platform’s API; if constraints fail, it returns the penalty and no state change. Policy hacking (e.g., exploiting the reward by repeating “do nothing” actions) is mitigated by:  
* **Shaping** – penalize idle steps.  
* **Curriculum** – start with simple trips, gradually increase complexity.  
* **Reward clipping** – bound rewards to prevent runaway exploitation.  

**Edge Cases**  
* API failures → treat as invalid action.  
* Dynamic pricing changes mid‑session → revalidate after each booking.  
* User cancellations → reset state or allow partial credit.

**Optimize & Communicate**  
After baseline training, perform hyperparameter sweeps on learning rate and exploration schedule. Measure success via average itinerary cost vs human benchmark. I’ll present results with clear visualizations of reward curves and a failure‑mode table to show robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
