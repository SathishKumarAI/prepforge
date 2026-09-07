---
qid: ing_8c7a31d039__faang__local
question: 'Explain: Human Errors — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 444
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:55-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how *human errors* (specifically the **availability heuristic**) affect **system design**. The availability heuristic means people over‑estimate events that are easy to recall; in design this translates into bias toward obvious failure modes and under‑investing in rare but catastrophic ones. I’ll assume we’re focusing on safety‑critical systems (e.g., aviation, medical devices) where such biases can be costly.

**Approach**  
1. Define the heuristic and its relevance to engineers’ risk perception.  
2. Show how it skews design decisions: feature prioritization, testing coverage, and fault tolerance.  
3. Illustrate with a concrete example (e.g., autopilot failure vs. rare sensor glitch).  
4. Discuss mitigations—structured checklists, formal verification, diversity of teams.

**Depth**  
- *Availability heuristic*: memories of recent incidents (e.g., high‑profile crashes) dominate risk assessment.  
- In design, this leads to **over‑engineering common paths** while neglecting low‑frequency “corner cases.”  
- Result: systems may pass standard tests but fail in untested scenarios, causing catastrophic downtime or safety violations.  
- Example: An autonomous car’s emergency braking system is extensively tested on typical traffic but rarely encounters a sudden pedestrian crossing from behind; engineers, recalling the heuristic, deprioritize this case because it “never happens.”  

**Edge Cases**  
- Over‑cautious designs that inflate cost and latency.  
- Ignoring rare events that become frequent as usage scales (e.g., cyberattacks).  
- Testing suites that mirror historical failures but miss emerging failure modes.

**Optimize & Communicate**  
To counter this bias, adopt **formal risk matrices**, **probabilistic modeling**, and **red‑team reviews**. Communicate the trade‑off: “We’ll invest X % more in testing rare paths, which reduces overall system risk by Y %.” This balances cost with safety while keeping interviewers’ signal of structured thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
